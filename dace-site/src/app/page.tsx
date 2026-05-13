import Link from "next/link";
import TrackedItemStatus from "@/components/TrackedItemStatus";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";
import { countWeekComplete, loadStudentProgressSnapshot } from "@/lib/student-progress";

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

  const w2 = snapshot ? countWeekComplete("week-2", snapshot) : null;
  const w3 = snapshot ? countWeekComplete("week-3", snapshot) : null;
  const t = student?.accessToken;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Welcome to DACE Cohort 2
        </h1>
        <div className="rounded-lg border-l-4 border-primary bg-surface p-4">
          <p className="text-base text-foreground">
            Canvas is temporarily unavailable. Use this site to access your
            course materials for Weeks 2 and 3.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Course Weeks
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href={withToken("/week-2", t)}
            className="group bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary transition-all"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                Week 2
              </span>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-text">
                Color &amp; Forms
              </h3>
              {w2 && (
                <p className="text-sm text-text-secondary">
                  Tracked items: {w2.complete} of {w2.total} complete
                </p>
              )}
              <ul className="space-y-1.5 text-sm text-text-secondary" role="list">
                <li>L03: Color</li>
                <li>L04: Forms &amp; Errors</li>
                <li>Applied Practice: Color and Forms Analysis</li>
              </ul>
              <p className="text-sm font-medium text-primary-text underline">
                View week materials &rarr;
              </p>
            </div>
          </Link>

          <Link
            href={withToken("/week-3", t)}
            className="group bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary transition-all"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                Week 3
              </span>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-text">
                Keyboard &amp; Reflow
              </h3>
              {w3 && (
                <p className="text-sm text-text-secondary">
                  Tracked items: {w3.complete} of {w3.total} complete
                </p>
              )}
              <ul className="space-y-1.5 text-sm text-text-secondary" role="list">
                <li>L05: Keyboard &amp; Touch</li>
                <li>L06: Reflow &amp; Zoom</li>
                <li>Applied Practice: Blueline Annotations</li>
              </ul>
              <p className="text-sm font-medium text-primary-text underline">
                View week materials &rarr;
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Knowledge Check Quizzes
        </h2>
        <p className="text-base text-text-secondary">
          Each lesson includes a knowledge check quiz. Navigate to the lesson
          page and follow the quiz link, or use the direct links below.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Week 2</h3>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-white px-4 py-3">
                <Link
                  href={withToken("/week-2/l03-color/quiz", t)}
                  className="text-sm font-medium text-primary-text underline hover:bg-surface transition-colors"
                >
                  L03 Color Quiz
                </Link>
                {snapshot && (
                  <TrackedItemStatus
                    kind="quiz"
                    complete={Boolean(snapshot.itemComplete.get("l03-color"))}
                  />
                )}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-white px-4 py-3">
                <Link
                  href={withToken("/week-2/l04-forms/quiz", t)}
                  className="text-sm font-medium text-primary-text underline hover:bg-surface transition-colors"
                >
                  L04 Forms Quiz
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
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Week 3</h3>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-white px-4 py-3">
                <Link
                  href={withToken("/week-3/l05-keyboard/quiz", t)}
                  className="text-sm font-medium text-primary-text underline hover:bg-surface transition-colors"
                >
                  L05 Keyboard Quiz
                </Link>
                {snapshot && (
                  <TrackedItemStatus
                    kind="quiz"
                    complete={Boolean(snapshot.itemComplete.get("l05-keyboard"))}
                  />
                )}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-white px-4 py-3">
                <Link
                  href={withToken("/week-3/l06-reflow/quiz", t)}
                  className="text-sm font-medium text-primary-text underline hover:bg-surface transition-colors"
                >
                  L06 Reflow Quiz
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
        <h2 className="text-2xl font-semibold text-foreground">
          Applied Skill Projects
        </h2>
        <p className="text-base text-text-secondary">
          Each week includes a hands-on project where you apply the skills from
          that week&apos;s lessons to a real design scenario.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href={withToken("/week-2/applied-practice", t)}
            className="group rounded-lg border border-border bg-white p-6 shadow-sm hover:shadow-md hover:border-primary transition-all"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                    Week 2
                  </span>
                  <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">
                    24 Points
                  </span>
                </div>
                {snapshot && (
                  <TrackedItemStatus
                    kind="assignment"
                    complete={Boolean(
                      snapshot.itemComplete.get("week-2-practice")
                    )}
                  />
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-text">
                Color and Forms Analysis
              </h3>
              <p className="text-sm text-text-secondary">
                Written response assessment analyzing a modal dialog design for
                color contrast and form labeling.
              </p>
              <p className="text-sm font-medium text-primary-text underline">
                View project &rarr;
              </p>
            </div>
          </Link>

          <Link
            href={withToken("/week-3/applied-practice", t)}
            className="group rounded-lg border border-border bg-white p-6 shadow-sm hover:shadow-md hover:border-primary transition-all"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                    Week 3
                  </span>
                  <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">
                    28 Points
                  </span>
                </div>
                {snapshot && (
                  <TrackedItemStatus
                    kind="assignment"
                    complete={Boolean(
                      snapshot.itemComplete.get("week-3-practice")
                    )}
                  />
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-text">
                Blueline Annotations
              </h3>
              <p className="text-sm text-text-secondary">
                Create accessibility annotations for keyboard, touch targets,
                and responsive design on a Figma mockup.
              </p>
              <p className="text-sm font-medium text-primary-text underline">
                View project &rarr;
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
