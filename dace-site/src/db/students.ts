import { timingSafeEqual } from "node:crypto";
import { db } from "@/db";
import { students } from "@/db/schema";
import { isWellFormedToken } from "@/lib/access-token-format";
import { compareDisplayNamesByFirstName } from "@/lib/teacher-gradebook";
import { eq } from "drizzle-orm";

export type Student = typeof students.$inferSelect;

export { isWellFormedToken } from "@/lib/access-token-format";

function constantTimeEquals(a: string, b: string): boolean {
  const ab = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

export type RosterSelectOption = { id: number; displayName: string };

/** Display names ordered like the teacher gradebook roster (first name, then full name). */
export async function listRosterSelectOptions(): Promise<RosterSelectOption[]> {
  const rows = await db
    .select({ id: students.id, displayName: students.displayName })
    .from(students);

  return rows.sort((a, b) =>
    compareDisplayNamesByFirstName(a.displayName, b.displayName)
  );
}

export async function findStudentById(id: number): Promise<Student | null> {
  if (!Number.isInteger(id) || id <= 0) return null;

  const rows = await db
    .select()
    .from(students)
    .where(eq(students.id, id))
    .limit(1);

  return rows[0] ?? null;
}

export async function findStudentByToken(
  token: string | undefined | null
): Promise<Student | null> {
  if (!isWellFormedToken(token)) return null;

  const rows = await db
    .select()
    .from(students)
    .where(eq(students.accessToken, token))
    .limit(1);

  const row = rows[0];
  if (!row) return null;

  if (!constantTimeEquals(row.accessToken, token)) return null;

  return row;
}
