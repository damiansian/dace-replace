import Link from "next/link";
import TrackedItemStatus from "@/components/TrackedItemStatus";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";
import { countWeekComplete, loadStudentProgressSnapshot } from "@/lib/student-progress";

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function Week2Hub({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);
  const snapshot = student
    ? await loadStudentProgressSnapshot(student.id)
    : null;
  const t = student?.accessToken;
  const weekCounts = snapshot ? countWeekComplete("week-2", snapshot) : null;

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
          Week 2: Color &amp; Forms
        </h1>
        {weekCounts && (
          <p className="text-sm text-text-secondary">
            Tracked for this week: {weekCounts.complete} of {weekCounts.total}{" "}
            complete (quizzes + applied practice).
          </p>
        )}
        <p className="text-base text-text-secondary">
          This week covers color accessibility (contrast ratios, color as
          information, color vision simulation) and accessible forms (labels,
          error identification, input purpose). Complete both lessons, take each
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
                  Module 1C
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                L03: Color
              </h3>
              <p className="text-sm text-text-secondary">
                WCAG color contrast requirements, color as information, and
                color vision simulation techniques.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={withToken("/week-2/l03-color", t)}
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  View lesson
                </Link>
                <Link
                  href={withToken("/week-2/l03-color/quiz", t)}
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  Take quiz
                </Link>
                {snapshot && (
                  <TrackedItemStatus
                    kind="quiz"
                    complete={Boolean(snapshot.itemComplete.get("l03-color"))}
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
                  Module 1D
                </span>
                <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">
                  Self-Paced
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                L04: Forms and Errors
              </h3>
              <p className="text-sm text-text-secondary">
                Accessible form labels and instructions, error identification
                and suggestions, and input purpose for autocomplete.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={withToken("/week-2/l04-forms", t)}
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  View lesson
                </Link>
                <Link
                  href={withToken("/week-2/l04-forms/quiz", t)}
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  Take quiz
                </Link>
                {snapshot && (
                  <TrackedItemStatus
                    kind="quiz"
                    complete={Boolean(snapshot.itemComplete.get("l04-forms"))}
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
                Written Response
              </span>
              {snapshot && (
                <TrackedItemStatus
                  kind="assignment"
                  complete={Boolean(
                    snapshot.itemComplete.get("week-2-practice")
                  )}
                />
              )}
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Color and Forms Analysis
            </h3>
            <p className="text-sm text-text-secondary">
              Analyze a web page or app for color and forms accessibility
              issues. Identify failures, cite WCAG criteria, and suggest
              remediation. Worth 24 points total.
            </p>
            <p className="text-sm text-text-secondary">
              Due before the Week 3 session.
            </p>
            <Link
              href={withToken("/week-2/applied-practice", t)}
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
