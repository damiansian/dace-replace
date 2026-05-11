"use server";

import { db } from "@/db";
import { grades, comments } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function gradeSubmission(
  submissionId: number,
  score: number,
  total: number
) {
  if (score < 0 || total < 1 || score > total) {
    throw new Error("Invalid score values");
  }

  await db
    .insert(grades)
    .values({ submissionId, score, total })
    .onConflictDoUpdate({
      target: grades.submissionId,
      set: { score, total, gradedAt: new Date() },
    });

  revalidatePath("/teacher");
  revalidatePath(`/teacher/submission/${submissionId}`);
}

export async function addComment(submissionId: number, body: string) {
  const trimmed = body.trim();
  if (!trimmed) {
    throw new Error("Comment body cannot be empty");
  }

  await db.insert(comments).values({
    submissionId,
    author: "instructor",
    body: trimmed,
  });

  revalidatePath(`/teacher/submission/${submissionId}`);
  revalidatePath("/teacher");
}
