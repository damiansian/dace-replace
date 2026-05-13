import type { Metadata } from "next";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import quizData from "@/data/quizzes/l04-forms.json";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";

export const metadata: Metadata = {
  title: "L04 Forms Quiz | DACE Cohort 2",
  description:
    "Test your understanding of accessible form design, labels, error handling, and input purpose.",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function L04FormsQuiz({ searchParams }: PageProps) {
  const { t: token } = await searchParams;
  const student = token ? await findStudentByToken(token) : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8">
      <div>
        <Link
          href={withToken("/week-2/l04-forms", student?.accessToken)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to L04: Forms
        </Link>
      </div>
      <Quiz
        data={quizData}
        accessToken={student?.accessToken}
        studentDisplayName={student?.displayName}
      />
    </div>
  );
}
