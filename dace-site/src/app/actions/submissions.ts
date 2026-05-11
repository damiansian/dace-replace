"use server";

import { db } from "@/db";
import { submissions } from "@/db/schema";

export type SubmissionState = {
  success: boolean;
  message: string;
} | null;

export async function submitAssignment(
  _prev: SubmissionState,
  formData: FormData
): Promise<SubmissionState> {
  const name = formData.get("name");
  const linkUrl = formData.get("linkUrl");
  const assignmentId = formData.get("assignmentId");

  if (
    typeof name !== "string" ||
    typeof linkUrl !== "string" ||
    typeof assignmentId !== "string" ||
    !name.trim() ||
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

  try {
    await db.insert(submissions).values({
      name: name.trim(),
      assignmentId: assignmentId.trim(),
      linkUrl: linkUrl.trim(),
    });

    return { success: true, message: "Submission received." };
  } catch {
    return {
      success: false,
      message: "Something went wrong saving your submission. Please try again.",
    };
  }
}
