import type { Metadata } from "next";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import quizData from "@/data/quizzes/l05-keyboard.json";

export const metadata: Metadata = {
  title: "L05 Keyboard Quiz | DACE Cohort 2",
  description:
    "Test your understanding of keyboard navigation, focus order, composite widgets, and modal dialog patterns.",
};

export default function L05KeyboardQuiz() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8">
      <div>
        <Link
          href="/week-3/l05-keyboard"
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to L05: Keyboard
        </Link>
      </div>
      <Quiz data={quizData} />
    </div>
  );
}
