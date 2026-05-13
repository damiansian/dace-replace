import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/db";
import { quizResults, submissions, grades } from "@/db/schema";
import { desc, eq, inArray } from "drizzle-orm";
import ProgressAccordionsShell from "@/components/ProgressAccordionsShell";
import { findStudentByToken } from "@/db/students";
import { progressCatalog, withToken, type CatalogItem } from "@/data/progress-catalog";

export const metadata = {
  title: "My Progress | DACE Cohort 2",
  robots: "noindex, nofollow",
};

interface ProgressPageProps {
  searchParams: Promise<{ t?: string }>;
}

type QuizRow = typeof quizResults.$inferSelect;
type SubmissionRow = typeof submissions.$inferSelect;
type GradeRow = typeof grades.$inferSelect;

function bestQuiz(rows: QuizRow[]): QuizRow | null {
  if (rows.length === 0) return null;
  return rows.reduce((best, r) => (r.score > best.score ? r : best), rows[0]);
}

function latestSubmission(rows: SubmissionRow[]): SubmissionRow | null {
  if (rows.length === 0) return null;
  return rows.reduce((latest, r) =>
    r.submittedAt > latest.submittedAt ? r : latest
  );
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ProgressPage({ searchParams }: ProgressPageProps) {
  const { t: token } = await searchParams;
  const student = await findStudentByToken(token);

  if (!student) notFound();

  const [studentQuizzes, studentSubmissions] = await Promise.all([
    db
      .select()
      .from(quizResults)
      .where(eq(quizResults.studentId, student.id))
      .orderBy(desc(quizResults.submittedAt)),
    db
      .select()
      .from(submissions)
      .where(eq(submissions.studentId, student.id))
      .orderBy(desc(submissions.submittedAt)),
  ]);

  const submissionIds = studentSubmissions.map((s) => s.id);
  const studentGrades: GradeRow[] =
    submissionIds.length === 0
      ? []
      : await db
          .select()
          .from(grades)
          .where(inArray(grades.submissionId, submissionIds));

  const gradeBySubmission = new Map(studentGrades.map((g) => [g.submissionId, g]));
  const quizzesById = new Map<string, QuizRow[]>();
  for (const q of studentQuizzes) {
    const arr = quizzesById.get(q.quizId) ?? [];
    arr.push(q);
    quizzesById.set(q.quizId, arr);
  }
  const submissionsById = new Map<string, SubmissionRow[]>();
  for (const s of studentSubmissions) {
    const arr = submissionsById.get(s.assignmentId) ?? [];
    arr.push(s);
    submissionsById.set(s.assignmentId, arr);
  }

  let totalItems = 0;
  let completeItems = 0;
  for (const week of progressCatalog) {
    for (const item of week.items) {
      totalItems++;
      if (item.kind === "quiz") {
        if (bestQuiz(quizzesById.get(item.id) ?? [])) completeItems++;
      } else if (latestSubmission(submissionsById.get(item.id) ?? [])) {
        completeItems++;
      }
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <header className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-wide text-primary-dark">
          My Progress
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Hi, {student.displayName}
        </h1>
        <p className="text-base text-text-secondary">
          {completeItems} of {totalItems} items complete. Open any week below to
          see what is left.
        </p>
        <p className="text-sm text-text-secondary">
          This page is yours. Bookmark it. The link is private, so do not share
          it with classmates.
        </p>
      </header>

      <ProgressAccordionsShell>
        {progressCatalog.map((week) => {
          const weekComplete = week.items.filter((item) => {
            if (item.kind === "quiz") {
              return Boolean(bestQuiz(quizzesById.get(item.id) ?? []));
            }
            return Boolean(latestSubmission(submissionsById.get(item.id) ?? []));
          }).length;

          return (
            <details
              key={week.id}
              open
              className="group rounded-lg border border-border bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <span className="flex flex-col">
                  <span className="text-lg font-semibold text-foreground">
                    {week.label}
                  </span>
                  <span className="text-sm text-text-secondary">
                    {weekComplete} of {week.items.length} complete
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-sm text-text-secondary transition-transform group-open:rotate-180"
                >
                  &#9662;
                </span>
              </summary>

              <ul className="divide-y divide-border border-t border-border">
                {week.items.map((item) => (
                  <li key={`${item.kind}-${item.id}`} className="px-5 py-4">
                    <ItemRow
                      item={item}
                      token={student.accessToken}
                      quizRows={quizzesById.get(item.id) ?? []}
                      submissionRows={submissionsById.get(item.id) ?? []}
                      gradeBySubmission={gradeBySubmission}
                    />
                  </li>
                ))}
              </ul>
            </details>
          );
        })}
      </ProgressAccordionsShell>

      <p className="text-xs text-text-secondary">
        Trouble with this page? Email your instructor and include the date and
        time you tried to access it.
      </p>
    </div>
  );
}

function ItemRow({
  item,
  token,
  quizRows,
  submissionRows,
  gradeBySubmission,
}: {
  item: CatalogItem;
  token: string;
  quizRows: QuizRow[];
  submissionRows: SubmissionRow[];
  gradeBySubmission: Map<number, GradeRow>;
}) {
  const href = withToken(item.href, token);

  if (item.kind === "quiz") {
    const best = bestQuiz(quizRows);
    return (
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <Link
            href={href}
            className="text-base font-medium text-primary-text underline"
          >
            {item.label}
          </Link>
          <p className="text-sm text-text-secondary">
            Knowledge check quiz
          </p>
        </div>
        <div className="text-sm">
          {best ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-green/10 px-3 py-1 font-medium text-accent-green">
              <span aria-hidden="true">&#10003;</span>
              <span>
                Completed &mdash; best score {best.score}/{best.total}
              </span>
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 font-medium text-text-secondary">
              Not started
            </span>
          )}
        </div>
      </div>
    );
  }

  const latest = latestSubmission(submissionRows);
  const grade = latest ? gradeBySubmission.get(latest.id) : null;

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex flex-col gap-1">
        <Link
          href={href}
          className="text-base font-medium text-primary-text underline"
        >
          {item.label}
        </Link>
        <p className="text-sm text-text-secondary">
          Applied practice &mdash; {item.totalPoints} points
        </p>
        {latest && (
          <p className="text-xs text-text-secondary">
            <a
              href={latest.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View your submitted file
            </a>
          </p>
        )}
      </div>
      <div className="text-sm space-y-1 sm:text-right">
        {latest ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-green/10 px-3 py-1 font-medium text-accent-green">
            <span aria-hidden="true">&#10003;</span>
            <span>Submitted {formatDate(latest.submittedAt)}</span>
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 font-medium text-text-secondary">
            Not submitted
          </span>
        )}
        {grade && (
          <p className="text-sm font-medium text-foreground">
            Graded: {grade.score}/{grade.total}
          </p>
        )}
      </div>
    </div>
  );
}
