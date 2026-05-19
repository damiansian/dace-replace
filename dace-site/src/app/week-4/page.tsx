import Link from "next/link";
import type { Metadata } from "next";
import TrackedItemStatus from "@/components/TrackedItemStatus";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";
import { countWeekComplete, loadStudentProgressSnapshot } from "@/lib/student-progress";

export const metadata: Metadata = {
  title: "Week 4: Landmarks, Navigation & Motion",
  description:
    "Landmark regions, consistent navigation, skip links, focus order, and motion accessibility including reduced motion preferences and pause controls.",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function Week4Hub({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);
  const snapshot = student
    ? await loadStudentProgressSnapshot(student.id)
    : null;
  const t = student?.accessToken;
  const weekCounts = snapshot ? countWeekComplete("week-4", snapshot) : null;

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
          Week 4: Landmarks, Navigation &amp; Motion
        </h1>
        {weekCounts && (
          <p className="text-sm text-text-secondary">
            Tracked for this week: {weekCounts.complete} of {weekCounts.total}{" "}
            complete (quizzes + applied practice).
          </p>
        )}
        <p className="text-base text-text-secondary">
          This week covers landmark regions, consistent navigation, skip links,
          and focus order (L07), plus motion accessibility including reduced
          motion preferences, pause controls, and flash thresholds (L08).
          Complete both lessons, take each quiz, and submit the applied
          practice.
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
                  Module 1G
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                L07: Landmarks &amp; Navigation
              </h3>
              <p className="text-sm text-text-secondary">
                Landmark regions, consistent navigation across pages, skip
                links and bypass blocks, and focus order requirements.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={withToken("/week-4/l07-landmarks", t)}
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  View lesson
                </Link>
                <span className="inline-flex items-center gap-2">
                  {snapshot && (
                    <TrackedItemStatus
                      kind="quiz"
                      complete={Boolean(snapshot.itemComplete.get("l07-landmarks"))}
                    />
                  )}
                  <Link
                    href={withToken("/week-4/l07-landmarks/quiz", t)}
                    className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                  >
                    Take quiz
                  </Link>
                </span>
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
                  Module 1H
                </span>
                <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
                  Online / Self-paced
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                L08: Motion &amp; Animation
              </h3>
              <p className="text-sm text-text-secondary">
                Reduced motion preferences, the 5-second pause rule, flash
                thresholds, and designing motion alternatives that preserve
                meaning.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={withToken("/week-4/l08-motion", t)}
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  View lesson
                </Link>
                <span className="inline-flex items-center gap-2">
                  {snapshot && (
                    <TrackedItemStatus
                      kind="quiz"
                      complete={Boolean(snapshot.itemComplete.get("l08-motion"))}
                    />
                  )}
                  <Link
                    href={withToken("/week-4/l08-motion/quiz", t)}
                    className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                  >
                    Take quiz
                  </Link>
                </span>
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
                    snapshot.itemComplete.get("week-4-practice")
                  )}
                />
              )}
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Navigation Accessibility Audit
            </h3>
            <p className="text-sm text-text-secondary">
              Audit a multi-page design mockup with landmark annotations,
              navigation consistency checks, and skip link specifications.
              Worth 16 points total.
            </p>
            <p className="text-sm text-text-secondary">
              Due before the Discover Badge Final Assessment.
            </p>
            <Link
              href={withToken("/week-4/applied-practice", t)}
              className="inline-block text-sm font-medium text-primary-text underline hover:text-primary-dark"
            >
              View assignment details
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2
          id="badge-assessment-heading"
          className="text-2xl font-semibold text-foreground"
        >
          Discover Badge Final Assessment
        </h2>
        <div className="bg-white border border-border rounded-lg p-6 shadow-sm border-l-4 border-l-primary">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                25 questions
              </span>
              <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
                Open book
              </span>
              <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
                Untimed
              </span>
              {snapshot && (
                <TrackedItemStatus
                  kind="quiz"
                  complete={Boolean(
                    snapshot.itemComplete.get("b1-final-assessment")
                  )}
                />
              )}
            </div>
            <p className="text-sm text-text-secondary">
              Cumulative knowledge check covering all Discover Badge outcomes
              (Modules 1A&ndash;1H). Take this after finishing the Week 4
              applied practice.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href={withToken("/badge-1/exam", t)}
                className="inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
              >
                Take the final assessment
              </Link>
              <a
                href="/badge-1/study-guide.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
              >
                Open the study guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
