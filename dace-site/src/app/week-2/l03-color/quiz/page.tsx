import type { Metadata } from "next";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import quizData from "@/data/quizzes/l03-color.json";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";

export const metadata: Metadata = {
  title: "L03 Color Quiz | DACE Cohort 2",
  description:
    "Test your understanding of WCAG color contrast requirements, non-text contrast, and use of color.",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function L03ColorQuiz({ searchParams }: PageProps) {
  const { t: token } = await searchParams;
  const student = token ? await findStudentByToken(token) : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8">
      <div>
        <Link
          href={withToken("/week-2/l03-color", student?.accessToken)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to L03: Color
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
