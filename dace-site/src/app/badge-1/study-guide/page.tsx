import Link from "next/link";
import type { Metadata } from "next";
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

export default async function StudyGuidePage({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-2">
        <Link
          href={withToken("/", student?.accessToken)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to Course Home
        </Link>
      </div>

      <header className="rounded-lg bg-gradient-to-r from-surface to-surface/50 border-l-4 border-l-primary p-6 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Discover Badge Final Assessment Study Guide
        </h1>
        <p className="text-base text-text-secondary">
          Prepare for your 25-question cumulative assessment covering all Discover Badge outcomes.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary-dark">
            🔍 Discover Badge
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-700">
            📝 25 Questions
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-700">
            🎯 Instructor scored within 24 hours
          </span>
        </div>
      </header>

      <section
        aria-labelledby="how-to-use"
        className="rounded-lg bg-blue-50 border border-blue-200 border-l-4 border-l-blue-600 p-6 space-y-4"
      >
        <h2 id="how-to-use" className="text-xl font-semibold text-foreground flex items-center gap-2">
          <span aria-hidden="true">📖</span> How to Use This Guide
        </h2>
        <p className="text-sm text-text-secondary">
          This study guide covers the key concepts, WCAG success criteria, and testing approaches you need to know. 
          Focus on understanding the <strong>why</strong> behind accessibility requirements, not just memorizing rules.
        </p>
        <div>
          <p className="text-sm font-semibold text-foreground mb-2">The assessment tests your ability to:</p>
          <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
            <li>Evaluate design annotations for accessibility compliance</li>
            <li>Identify common accessibility failures</li>
            <li>Apply WCAG success criteria to real-world scenarios</li>
            <li>Make informed decisions about ambiguous situations</li>
          </ul>
        </div>
        <div className="rounded-lg bg-white border border-blue-200 p-4">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> Have the WCAG 2.2 Quick Reference open during your assessment:{" "}
            <a
              href="https://www.w3.org/WAI/WCAG22/quickref/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline hover:text-blue-900"
            >
              w3.org/WAI/WCAG22/quickref
            </a>
          </p>
        </div>
      </section>

      <div className="rounded-lg bg-amber-50 border border-amber-200 p-5 space-y-2">
        <p className="text-sm text-foreground">
          <strong>📄 Full Study Guide:</strong> The complete study guide with all modules, WCAG references, 
          and test-taking strategies is available as a static HTML page.
        </p>
        <a
          href="/badge-1/study-guide.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-700 transition-colors"
        >
          <span aria-hidden="true">📚</span>
          Open Full Study Guide (HTML)
        </a>
      </div>

      <section aria-labelledby="exam-link" className="rounded-lg border border-border bg-surface p-6 space-y-4">
        <h2 id="exam-link" className="text-xl font-semibold text-foreground">
          Ready to take the exam?
        </h2>
        <p className="text-sm text-text-secondary">
          Once you've reviewed the study guide, you can access the Discover Badge Final Assessment.
        </p>
        <Link
          href={withToken("/badge-1/exam", student?.accessToken)}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
        >
          Go to Discover Badge Exam
        </Link>
      </section>
    </div>
  );
}
