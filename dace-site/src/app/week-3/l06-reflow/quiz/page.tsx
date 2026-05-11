import type { Metadata } from "next";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import quizData from "@/data/quizzes/l06-reflow.json";

export const metadata: Metadata = {
  title: "L06 Reflow Quiz | DACE Cohort 2",
  description:
    "Test your understanding of responsive reflow, zoom behavior, text spacing requirements, and orientation.",
};

export default function L06ReflowQuiz() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8">
      <nav>
        <Link
          href="/week-3/l06-reflow"
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to L06: Reflow
        </Link>
      </nav>
      <Quiz data={quizData} />
    </div>
  );
}
