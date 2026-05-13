/**
 * Optional one-shot backfill: for each existing row in quiz_results /
 * submissions where student_id IS NULL, look for a student whose
 * display_name matches the historical `name` field (case-insensitive,
 * trimmed). If exactly one match is found, set student_id.
 *
 * This is fragile (free-text names vary). Always inspect the printed
 * report before re-running with --commit.
 *
 * Usage:
 *   POSTGRES_URL=... npm run --prefix dace-site -- exec tsx scripts/backfill-student-ids.ts        # dry run
 *   POSTGRES_URL=... npm run --prefix dace-site -- exec tsx scripts/backfill-student-ids.ts --commit
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq, isNull } from "drizzle-orm";
import * as schema from "../src/db/schema";
import { quizResults, students, submissions } from "../src/db/schema";

function normalize(name: string): string {
  return name.trim().toLowerCase();
}

async function main() {
  const postgresUrl = process.env.POSTGRES_URL;
  if (!postgresUrl) {
    console.error("Missing POSTGRES_URL.");
    process.exit(1);
  }
  const commit = process.argv.includes("--commit");

  const sql = neon(postgresUrl);
  const db = drizzle(sql, { schema });

  const allStudents = await db.select().from(students);
  const byName = new Map<string, typeof allStudents>();
  for (const s of allStudents) {
    const key = normalize(s.displayName);
    const arr = byName.get(key) ?? [];
    arr.push(s);
    byName.set(key, arr);
  }

  let quizMatched = 0;
  let quizSkipped = 0;
  const orphanedQuizzes = await db
    .select()
    .from(quizResults)
    .where(isNull(quizResults.studentId));
  for (const q of orphanedQuizzes) {
    const matches = byName.get(normalize(q.name)) ?? [];
    if (matches.length === 1) {
      quizMatched++;
      if (commit) {
        await db
          .update(quizResults)
          .set({ studentId: matches[0].id })
          .where(eq(quizResults.id, q.id));
      }
    } else {
      quizSkipped++;
      console.log(
        `quiz_results id=${q.id} name="${q.name}" matches=${matches.length}`
      );
    }
  }

  let subMatched = 0;
  let subSkipped = 0;
  const orphanedSubs = await db
    .select()
    .from(submissions)
    .where(isNull(submissions.studentId));
  for (const s of orphanedSubs) {
    const matches = byName.get(normalize(s.name)) ?? [];
    if (matches.length === 1) {
      subMatched++;
      if (commit) {
        await db
          .update(submissions)
          .set({ studentId: matches[0].id })
          .where(eq(submissions.id, s.id));
      }
    } else {
      subSkipped++;
      console.log(
        `submissions id=${s.id} name="${s.name}" matches=${matches.length}`
      );
    }
  }

  console.log(
    `\nQuiz results: matched=${quizMatched} skipped=${quizSkipped} (of ${orphanedQuizzes.length} orphans)`
  );
  console.log(
    `Submissions:  matched=${subMatched} skipped=${subSkipped} (of ${orphanedSubs.length} orphans)`
  );
  if (!commit) {
    console.log("\nDry run. Re-run with --commit to apply.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
