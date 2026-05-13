import type { Metadata } from "next";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import quizData from "@/data/quizzes/l06-reflow.json";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

export const metadata: Metadata = {
  title: "L06 Reflow Quiz | DACE Cohort 2",
  description:
    "Test your understanding of responsive reflow, zoom behavior, text spacing requirements, and orientation.",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function L06ReflowQuiz({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8">
      <div>
        <Link
          href={withToken("/week-3/l06-reflow", student?.accessToken)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to L06: Reflow
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
