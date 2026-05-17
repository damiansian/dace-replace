import type { Metadata } from "next";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import quizData from "@/data/quizzes/l08-motion.json";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

export const metadata: Metadata = {
  title: "L08 Motion Quiz | DACE Cohort 2",
  description:
    "Test your understanding of reduced motion preferences, pause controls, flash thresholds, and motion alternatives.",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function L08MotionQuiz({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8">
      <div>
        <Link
          href={withToken("/week-4/l08-motion", student?.accessToken)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to L08: Motion &amp; Animation
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
