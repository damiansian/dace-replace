import Link from "next/link";
import type { Metadata } from "next";
import { readFile } from "fs/promises";
import { join } from "path";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

export const metadata: Metadata = {
  title: "Discover Badge Study Guide | DACE Cohort 2",
  description:
    "Comprehensive study guide for the Discover Badge final assessment covering accessible names, headings, color, forms, keyboard, reflow, landmarks, and motion.",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

async function getStudyGuideContent(): Promise<string> {
  const htmlPath = join(process.cwd(), "public", "badge-1", "study-guide.html");
  const html = await readFile(htmlPath, "utf8");

  // Extract just the content div (everything between the body tags, excluding head)
  const contentStart = html.indexOf('<div style="max-width: 900px');
  const contentEnd = html.lastIndexOf("</div>") + 6;

  return html.slice(contentStart, contentEnd);
}

export default async function StudyGuidePage({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);
  const studyGuideHtml = await getStudyGuideContent();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 space-y-6">
      <div className="space-y-2">
        <Link
          href={withToken("/", student?.accessToken)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to Course Home
        </Link>
      </div>

      <div dangerouslySetInnerHTML={{ __html: studyGuideHtml }} />
    </div>
  );
}
