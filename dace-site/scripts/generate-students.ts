/**
 * Generate access tokens for students and insert them into the database.
 *
 * Usage:
 *   POSTGRES_URL=postgres://... PROGRESS_BASE_URL=https://your-host \
 *     npm run students:generate -- --names "Alice Example,Bob Example"
 *
 * Or pipe a CSV-like list of names from stdin:
 *   cat names.txt | npm run students:generate
 *
 * Prints CSV rows (display_name,access_token,dashboard_url) to stdout. Save
 * those rows into cohort-private/student-access-tokens.csv (gitignored).
 */

import { randomBytes } from "node:crypto";
import { readFileSync } from "node:fs";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import * as schema from "../src/db/schema";
import { students } from "../src/db/schema";

function parseArgs(argv: string[]) {
  const args: Record<string, string> = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith("--")) {
        args[key] = next;
        i++;
      } else {
        args[key] = "true";
      }
    }
  }
  return args;
}

function generateToken(): string {
  return randomBytes(32).toString("base64url");
}

function csvEscape(value: string): string {
  if (/[",\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const postgresUrl = process.env.POSTGRES_URL;
  if (!postgresUrl) {
    console.error("Missing POSTGRES_URL environment variable.");
    process.exit(1);
  }

  const baseUrl =
    args["base-url"] ?? process.env.PROGRESS_BASE_URL ?? "http://localhost:3000";

  let names: string[] = [];
  if (args.names) {
    names = args.names.split(",").map((s) => s.trim()).filter(Boolean);
  } else if (args.file) {
    const file = readFileSync(args.file, "utf8");
    names = file
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  } else if (!process.stdin.isTTY) {
    const stdin = await new Promise<string>((resolve, reject) => {
      let buf = "";
      process.stdin.setEncoding("utf8");
      process.stdin.on("data", (chunk) => (buf += chunk));
      process.stdin.on("end", () => resolve(buf));
      process.stdin.on("error", reject);
    });
    names = stdin
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }

  if (names.length === 0) {
    console.error(
      "No names provided. Use --names \"A,B,C\", --file path.txt, or pipe names via stdin."
    );
    process.exit(1);
  }

  const sql = neon(postgresUrl);
  const db = drizzle(sql, { schema });

  const dryRun = args["dry-run"] === "true";

  process.stdout.write("display_name,access_token,dashboard_url\n");

  for (const name of names) {
    const existing = await db
      .select()
      .from(students)
      .where(eq(students.displayName, name))
      .limit(1);

    let token: string;
    if (existing.length > 0) {
      token = existing[0].accessToken;
    } else {
      token = generateToken();
      if (!dryRun) {
        await db.insert(students).values({
          displayName: name,
          accessToken: token,
        });
      }
    }

    const dashboardUrl = `${baseUrl.replace(/\/$/, "")}/?t=${encodeURIComponent(token)}`;
    process.stdout.write(
      `${csvEscape(name)},${csvEscape(token)},${csvEscape(dashboardUrl)}\n`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
