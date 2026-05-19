import type { Metadata } from "next";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import quizData from "@/data/quizzes/b1-final-assessment.json";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

export const metadata: Metadata = {
  title: "Discover Badge Final Assessment | DACE Cohort 2",
  description:
    "Cumulative Discover Badge assessment: 25 scenario-based questions covering accessible names, headings, color, forms, keyboard, reflow, landmarks, and motion.",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function Badge1ExamPage({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div>
        <Link
          href={withToken("/week-4", student?.accessToken)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to Week 4
        </Link>
      </div>

      <header className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
            Discover Badge
          </span>
          <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
            25 questions · open book · untimed
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Discover Badge Final Assessment
        </h1>
        <p className="text-base text-text-secondary">
          Cumulative assessment covering all Discover Badge outcomes
          (1A&ndash;1H). Each question presents a real-world annotation example
          and asks you to identify the right call for accessibility.
        </p>
      </header>

      <section
        aria-labelledby="prep-heading"
        className="rounded-lg border border-border bg-surface p-5 space-y-3"
      >
        <h2 id="prep-heading" className="text-lg font-semibold text-foreground">
          Before you start
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
          <li>
            Open book and untimed. Take as long as you need; you only have one
            attempt, so review your answers before submitting.
          </li>
          <li>
            Keep the{" "}
            <a
              href="https://www.w3.org/WAI/WCAG22/quickref/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text underline hover:text-primary-dark"
            >
              WCAG 2.2 Quick Reference
            </a>{" "}
            and your course materials handy.
          </li>
          <li>
            Review the{" "}
            <a
              href="/badge-1/study-guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text underline hover:text-primary-dark"
            >
              Discover Badge study guide
            </a>{" "}
            for a recap of every module.
          </li>
          <li>
            Your raw score appears immediately. Your instructor may adjust the
            final score after item analysis; that adjustment is reflected in
            the gradebook, not on this page.
          </li>
        </ul>
      </section>

      <Quiz
        data={quizData}
        accessToken={student?.accessToken}
        studentDisplayName={student?.displayName}
        examMode
        maxAttempts={1}
      />
    </div>
  );
}
