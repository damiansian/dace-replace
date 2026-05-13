import type { Metadata } from "next";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import quizData from "@/data/quizzes/l05-keyboard.json";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

export const metadata: Metadata = {
  title: "L05 Keyboard Quiz | DACE Cohort 2",
  description:
    "Test your understanding of keyboard navigation, focus order, composite widgets, and modal dialog patterns.",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function L05KeyboardQuiz({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8">
      <div>
        <Link
          href={withToken("/week-3/l05-keyboard", student?.accessToken)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to L05: Keyboard
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
