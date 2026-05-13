"use server";

import { db } from "@/db";
import { submissions } from "@/db/schema";
import { findStudentByToken, isWellFormedToken } from "@/db/students";

export type SubmissionState = {
  success: boolean;
  message: string;
} | null;

export async function submitAssignment(
  _prev: SubmissionState,
  formData: FormData
): Promise<SubmissionState> {
  const rawName = formData.get("name");
  const linkUrl = formData.get("linkUrl");
  const assignmentId = formData.get("assignmentId");
  const rawToken = formData.get("accessToken");

  if (
    typeof linkUrl !== "string" ||
    typeof assignmentId !== "string" ||
    !linkUrl.trim() ||
    !assignmentId.trim()
  ) {
    return { success: false, message: "All fields are required." };
  }

  let url: URL;
  try {
    url = new URL(linkUrl);
  } catch {
    return {
      success: false,
      message: "Please enter a valid URL (e.g. https://figma.com/...).",
    };
  }

  if (!["http:", "https:"].includes(url.protocol)) {
    return {
      success: false,
      message: "URL must start with http:// or https://.",
    };
  }

  let resolvedName: string | null = null;
  let resolvedStudentId: number | null = null;

  if (typeof rawToken === "string" && rawToken.trim().length > 0) {
    if (!isWellFormedToken(rawToken)) {
      return {
        success: false,
        message:
          "Your private link looks invalid. Open this page from your personal progress URL and try again.",
      };
    }

    const student = await findStudentByToken(rawToken);
    if (!student) {
      return {
        success: false,
        message:
          "Your private link did not match a student. Open this page from your personal progress URL and try again.",
      };
    }

    resolvedName = student.displayName;
    resolvedStudentId = student.id;
  } else {
    if (typeof rawName !== "string" || !rawName.trim()) {
      return { success: false, message: "All fields are required." };
    }
    resolvedName = rawName.trim();
  }

  try {
    await db.insert(submissions).values({
      name: resolvedName!,
      assignmentId: assignmentId.trim(),
      linkUrl: linkUrl.trim(),
      studentId: resolvedStudentId,
    });

    return { success: true, message: "Submission received." };
  } catch {
    return {
      success: false,
      message: "Something went wrong saving your submission. Please try again.",
    };
  }
}
