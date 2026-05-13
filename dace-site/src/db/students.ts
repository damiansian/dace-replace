import { timingSafeEqual } from "node:crypto";
import { db } from "@/db";
import { students } from "@/db/schema";
import { eq } from "drizzle-orm";

export type Student = typeof students.$inferSelect;

const TOKEN_PATTERN = /^[A-Za-z0-9_-]{20,128}$/;

export function isWellFormedToken(value: unknown): value is string {
  return typeof value === "string" && TOKEN_PATTERN.test(value);
}

function constantTimeEquals(a: string, b: string): boolean {
  const ab = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
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
