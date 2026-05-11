import type { Metadata } from "next";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import quizData from "@/data/quizzes/l03-color.json";

export const metadata: Metadata = {
  title: "L03 Color Quiz | DACE Cohort 2",
  description:
    "Test your understanding of WCAG color contrast requirements, non-text contrast, and use of color.",
};

export default function L03ColorQuiz() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8">
      <nav>
        <Link
          href="/week-2/l03-color"
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to L03: Color
        </Link>
      </nav>
      <Quiz data={quizData} />
    </div>
  );
}
