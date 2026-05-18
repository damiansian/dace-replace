import CourseHomeTable from "@/components/CourseHomeTable";
import { courseHomeCatalog } from "@/data/course-home-catalog";
import { findStudentByToken } from "@/db/students";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";
import {
  countWeekComplete,
  loadStudentProgressSnapshot,
} from "@/lib/student-progress";

interface HomeProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);
  const snapshot = student
    ? await loadStudentProgressSnapshot(student.id)
    : null;
  const t = student?.accessToken;

  const weekCounts = {
    "week-2": snapshot ? countWeekComplete("week-2", snapshot) : null,
    "week-3": snapshot ? countWeekComplete("week-3", snapshot) : null,
    "week-4": snapshot ? countWeekComplete("week-4", snapshot) : null,
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Welcome to DACE Cohort 2
        </h1>
        <div className="rounded-lg border-l-4 border-primary bg-surface p-4">
          <p className="text-base text-foreground">
            Canvas is temporarily unavailable. Use this site to access your
            course materials for Weeks 2, 3, and 4.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Course materials
        </h2>
        <p className="text-base text-text-secondary">
          Each week has two lessons with a knowledge check quiz, plus one
          applied skill project. Use the links below to open lessons, take
          quizzes, or view assignment details.
        </p>
        <p className="text-base text-text-secondary">
          <a
            href="https://www.figma.com/design/mNFDFtVojYP1yvNO20bhfb/DACE---Cohort-2?node-id=0-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-text underline hover:text-primary-dark"
          >
            Open the DACE Cohort 2 Figma file
          </a>{" "}
          for all lesson and applied practice designs.
        </p>
        <CourseHomeTable
          weeks={courseHomeCatalog}
          token={t}
          snapshot={snapshot}
          weekCounts={weekCounts}
        />
      </div>
    </div>
  );
}
