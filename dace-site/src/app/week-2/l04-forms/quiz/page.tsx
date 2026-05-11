import type { Metadata } from "next";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import quizData from "@/data/quizzes/l04-forms.json";

export const metadata: Metadata = {
  title: "L04 Forms Quiz | DACE Cohort 2",
  description:
    "Test your understanding of accessible form design, labels, error handling, and input purpose.",
};

export default function L04FormsQuiz() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8">
      <div>
        <Link
          href="/week-2/l04-forms"
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to L04: Forms
        </Link>
      </div>
      <Quiz data={quizData} />
    </div>
  );
}
