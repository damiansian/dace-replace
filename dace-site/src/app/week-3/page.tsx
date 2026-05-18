import Link from "next/link";
import type { Metadata } from "next";
import TrackedItemStatus from "@/components/TrackedItemStatus";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";
import { countWeekComplete, loadStudentProgressSnapshot } from "@/lib/student-progress";

export const metadata: Metadata = {
  title: "Week 3: Keyboard & Reflow",
  description:
    "Keyboard accessibility, focus indicators, touch target sizing, reading order, and responsive design with reflow.",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function Week3Hub({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);
  const snapshot = student
    ? await loadStudentProgressSnapshot(student.id)
    : null;
  const t = student?.accessToken;
  const weekCounts = snapshot ? countWeekComplete("week-3", snapshot) : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-2">
        <Link
          href={withToken("/", t)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Week 3: Keyboard &amp; Reflow
        </h1>
        {weekCounts && (
          <p className="text-sm text-text-secondary">
            Tracked for this week: {weekCounts.complete} of {weekCounts.total}{" "}
            complete (quizzes + applied practice).
          </p>
        )}
        <p className="text-base text-text-secondary">
          This week covers keyboard accessibility, focus indicators, touch
          target sizing, reading order (L05), and responsive design with reflow,
          text spacing, and orientation (L06). Complete both lessons, take each
          quiz, and submit the applied practice.
        </p>
      </div>

      <div className="space-y-6">
        <h2 id="lessons-heading" className="text-2xl font-semibold text-foreground">
          Lessons
        </h2>

        <div className="space-y-4">
          <div className="bg-white border border-border rounded-lg p-6 shadow-sm border-l-4 border-l-primary">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                  Discover Badge
                </span>
                <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
                  Module 1E
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                L05: Keyboard, Touch &amp; Reading Order
              </h3>
              <p className="text-sm text-text-secondary">
                Keyboard navigation, focus order, focus indicators, touch target
                sizing, and reading order fundamentals.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={withToken("/week-3/l05-keyboard", t)}
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  View lesson
                </Link>
                <Link
                  href={withToken("/week-3/l05-keyboard/quiz", t)}
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  Take quiz
                </Link>
                {snapshot && (
                  <TrackedItemStatus
                    kind="quiz"
                    complete={Boolean(snapshot.itemComplete.get("l05-keyboard"))}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-lg p-6 shadow-sm border-l-4 border-l-primary">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                  Discover Badge
                </span>
                <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
                  Module 1F
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                L06: Reflow &amp; Zoom
              </h3>
              <p className="text-sm text-text-secondary">
                Responsive design at 400% zoom, text spacing adjustments, and
                orientation requirements.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={withToken("/week-3/l06-reflow", t)}
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  View lesson
                </Link>
                <Link
                  href={withToken("/week-3/l06-reflow/quiz", t)}
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  Take quiz
                </Link>
                {snapshot && (
                  <TrackedItemStatus
                    kind="quiz"
                    complete={Boolean(snapshot.itemComplete.get("l06-reflow"))}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="practice-heading" className="text-2xl font-semibold text-foreground">
          Applied Practice
        </h2>
        <div className="bg-white border border-border rounded-lg p-6 shadow-sm border-l-4 border-l-accent-green">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">
                Rubric-graded
              </span>
              {snapshot && (
                <TrackedItemStatus
                  kind="assignment"
                  complete={Boolean(
                    snapshot.itemComplete.get("week-3-practice")
                  )}
                />
              )}
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Blueline Annotations
            </h3>
            <p className="text-sm text-text-secondary">
              Create a complete set of accessibility annotations covering focus
              indicator specifications, touch target measurements, and responsive
              behavior notes. Worth 28 points total.
            </p>
            <p className="text-sm text-text-secondary">
              Due before the Week 4 session.
            </p>
            <Link
              href={withToken("/week-3/applied-practice", t)}
              className="inline-block text-sm font-medium text-primary-text underline hover:text-primary-dark"
            >
              View assignment details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
