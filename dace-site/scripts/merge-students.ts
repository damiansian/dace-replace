/**
 * Merge two roster rows into one: re-point quiz_results and submissions to the
 * keeper student, then delete the merged-away row.
 *
 * The keeper's access_token (progress URL) remains valid. The merged student's
 * token is removed with their row; do not share that old link after a merge.
 *
 * Usage:
 *   POSTGRES_URL=... npx tsx scripts/merge-students.ts --list
 *   POSTGRES_URL=... npx tsx scripts/merge-students.ts --keep "xiao duan" --merge "xiao"
 *   POSTGRES_URL=... npx tsx scripts/merge-students.ts --keep-id 12 --merge-id 34 --commit
 *
 * --commit may appear as a flag without a value.
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq, isNull } from "drizzle-orm";
import * as schema from "../src/db/schema";
import { students, quizResults, submissions } from "../src/db/schema";
import { normalizeName } from "../src/lib/teacher-gradebook";

function parseArgs(argv: string[]) {
  const out: Record<string, string> = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith("--")) {
        out[key] = next;
        i++;
      } else {
        out[key] = "true";
      }
    }
  }
  return out;
}

function resolveStudentByName(
  roster: (typeof students.$inferSelect)[],
  label: string,
  role: string
): typeof students.$inferSelect {
  const target = normalizeName(label);
  const matches = roster.filter((s) => normalizeName(s.displayName) === target);
  if (matches.length === 0) {
    console.error(`No student matches ${role} name "${label}" (normalized: "${target}")`);
    process.exit(1);
  }
  if (matches.length > 1) {
    console.error(
      `Multiple students match ${role} name "${label}": ids ${matches.map((m) => m.id).join(", ")}`
    );
    process.exit(1);
  }
  return matches[0];
}

function resolveStudentById(
  roster: (typeof students.$inferSelect)[],
  idStr: string,
  role: string
): typeof students.$inferSelect {
  const id = Number.parseInt(idStr, 10);
  if (!Number.isFinite(id)) {
    console.error(`${role} must be a numeric id, got "${idStr}"`);
    process.exit(1);
  }
  const row = roster.find((s) => s.id === id);
  if (!row) {
    console.error(`No student with ${role} id=${id}`);
    process.exit(1);
  }
  return row;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const postgresUrl = process.env.POSTGRES_URL;
  if (!postgresUrl) {
    console.error("Missing POSTGRES_URL.");
    process.exit(1);
  }

  const commit = args.commit === "true" || process.argv.includes("--commit");
  const canonicalName = args["canonical-name"];

  const sql = neon(postgresUrl);
  const db = drizzle(sql, { schema });

  const roster = await db.select().from(students);

  if (args.list === "true") {
    if (roster.length === 0) {
      console.log("No rows in students.");
      return;
    }
    for (const s of roster.sort((a, b) => a.id - b.id)) {
      console.log(
        `${s.id}\t${JSON.stringify(s.displayName)}\tcreated ${s.createdAt.toISOString()}`
      );
    }
    return;
  }

  const keeperIdArg = args["keep-id"];
  const mergeIdArg = args["merge-id"];
  const keepLabel = args.keep;
  const mergeLabel = args.merge;

  let keeper: (typeof students.$inferSelect);
  let merged: (typeof students.$inferSelect);

  if (keeperIdArg && mergeIdArg) {
    keeper = resolveStudentById(roster, keeperIdArg, "--keep-id");
    merged = resolveStudentById(roster, mergeIdArg, "--merge-id");
  } else if (keepLabel && mergeLabel) {
    keeper = resolveStudentByName(roster, keepLabel, "--keep");
    merged = resolveStudentByName(roster, mergeLabel, "--merge");
  } else {
    console.error(
      "Provide either --list, or (--keep and --merge), or (--keep-id and --merge-id).\n" +
        "Optional: --commit, --canonical-name \"Full Name\""
    );
    process.exit(1);
  }

  if (keeper.id === merged.id) {
    console.error("keep and merge resolve to the same student id.");
    process.exit(1);
  }

  const mergeNorm = normalizeName(merged.displayName);

  const quizByStudent = await db
    .select()
    .from(quizResults)
    .where(eq(quizResults.studentId, merged.id));
  const subByStudent = await db
    .select()
    .from(submissions)
    .where(eq(submissions.studentId, merged.id));

  const allQuizOrphans = await db
    .select()
    .from(quizResults)
    .where(isNull(quizResults.studentId));
  const quizOrphansToFix = allQuizOrphans.filter(
    (q) => normalizeName(q.name) === mergeNorm
  );

  const allSubOrphans = await db
    .select()
    .from(submissions)
    .where(isNull(submissions.studentId));
  const subOrphansToFix = allSubOrphans.filter(
    (s) => normalizeName(s.name) === mergeNorm
  );

  console.log("Keeper student:", {
    id: keeper.id,
    displayName: keeper.displayName,
    accessTokenPreview: `${keeper.accessToken.slice(0, 6)}…`,
  });
  console.log("Merged-away student:", {
    id: merged.id,
    displayName: merged.displayName,
    accessTokenPreview: `${merged.accessToken.slice(0, 6)}…`,
  });
  console.log(
    `Rows to update: quiz_results student_id=${merged.id} → ${keeper.id}: ${quizByStudent.length}`
  );
  console.log(
    `Rows to update: submissions student_id=${merged.id} → ${keeper.id}: ${subByStudent.length}`
  );
  console.log(
    `Orphan quiz_results (null student_id, name matches merged): ${quizOrphansToFix.length}`
  );
  console.log(
    `Orphan submissions (null student_id, name matches merged): ${subOrphansToFix.length}`
  );

  const finalDisplay = canonicalName?.trim() || keeper.displayName;
  if (canonicalName && canonicalName.trim() !== keeper.displayName) {
    console.log(`Will set keeper display_name to: "${finalDisplay}"`);
  }

  if (!commit) {
    console.log("\nDry run. Re-run with --commit to apply.");
    return;
  }

  const activityName = finalDisplay;

  for (const q of quizByStudent) {
    await db
      .update(quizResults)
      .set({ studentId: keeper.id, name: activityName })
      .where(eq(quizResults.id, q.id));
  }
  for (const s of subByStudent) {
    await db
      .update(submissions)
      .set({ studentId: keeper.id, name: activityName })
      .where(eq(submissions.id, s.id));
  }
  for (const q of quizOrphansToFix) {
    await db
      .update(quizResults)
      .set({ studentId: keeper.id, name: activityName })
      .where(eq(quizResults.id, q.id));
  }
  for (const s of subOrphansToFix) {
    await db
      .update(submissions)
      .set({ studentId: keeper.id, name: activityName })
      .where(eq(submissions.id, s.id));
  }

  if (canonicalName && canonicalName.trim()) {
    await db
      .update(students)
      .set({ displayName: canonicalName.trim() })
      .where(eq(students.id, keeper.id));
  }

  await db.delete(students).where(eq(students.id, merged.id));

  console.log("\nDone. Merged into keeper id", keeper.id, "display_name is now:", finalDisplay);
  console.log("Old progress link for the merged-away token no longer works.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
