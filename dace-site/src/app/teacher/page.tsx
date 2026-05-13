import { notFound } from "next/navigation";
import { db } from "@/db";
import { quizResults, submissions, grades, students } from "@/db/schema";
import { desc } from "drizzle-orm";
import {
  buildGradebookRows,
  getGradebookColumns,
  type AssignmentCell,
  type QuizCell,
} from "@/lib/teacher-gradebook";

export const metadata = {
  title: "Teacher Portal | DACE Cohort 2",
  robots: "noindex, nofollow",
};

interface TeacherPageProps {
  searchParams: Promise<{ token?: string }>;
}

function QuizCellView({ cell }: { cell: QuizCell }) {
  if (cell.status === "incomplete") {
    return (
      <span className="font-medium text-text-secondary">Incomplete</span>
    );
  }
  return (
    <span
      className="tabular-nums text-foreground"
      title={`${cell.attempts} attempt${cell.attempts === 1 ? "" : "s"}`}
    >
      {cell.bestScore}/{cell.total}
    </span>
  );
}

function AssignmentCellView({
  cell,
  tokenEnc,
}: {
  cell: AssignmentCell;
  tokenEnc: string;
}) {
  if (cell.status === "incomplete") {
    return (
      <span className="font-medium text-text-secondary">Incomplete</span>
    );
  }
  const href = `/teacher/submission/${cell.submissionId}?token=${tokenEnc}`;
  if (cell.graded && cell.score != null && cell.total != null) {
    return (
      <a
        href={href}
        className="font-medium text-primary-text underline tabular-nums"
      >
        {cell.score}/{cell.total}
      </a>
    );
  }
  return (
    <a href={href} className="font-medium text-primary-text underline">
      Ungraded
    </a>
  );
}

export default async function TeacherPage({ searchParams }: TeacherPageProps) {
  const { token } = await searchParams;

  if (!process.env.ADMIN_SECRET || token !== process.env.ADMIN_SECRET) {
    notFound();
  }

  const tokenEnc = encodeURIComponent(token);

  const [roster, allQuizResults, allSubmissions, allGrades] =
    await Promise.all([
      db.select().from(students),
      db.select().from(quizResults).orderBy(desc(quizResults.submittedAt)),
      db.select().from(submissions).orderBy(desc(submissions.submittedAt)),
      db.select().from(grades),
    ]);

  const gradeMap = new Map(allGrades.map((g) => [g.submissionId, g]));

  const rows = buildGradebookRows({
    students: roster,
    quizResults: allQuizResults,
    submissions: allSubmissions,
    gradeMap,
  });

  const { columns, weekHeaders } = getGradebookColumns();

  const orphanRows = rows.filter((r) => r.identity.kind === "orphan");
  const rosterEmptyButActivity =
    roster.length === 0 &&
    (allQuizResults.length > 0 || allSubmissions.length > 0);

  return (
    <main
      id="main-content"
      className="mx-auto max-w-[100vw] px-4 py-10 sm:px-6 space-y-8"
    >
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Teacher Portal
        </h1>
        <p className="mt-1 text-base text-text-secondary">
          {allQuizResults.length} quiz attempts, {allSubmissions.length}{" "}
          assignment submissions, {roster.length} students on roster
        </p>
      </header>

      {rosterEmptyButActivity && (
        <div
          className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground"
          role="status"
        >
          No rows in the <code className="text-xs">students</code> table yet.
          Showing everyone who appears in quiz or submission data. Add roster
          records so the full cohort appears even before their first activity.
        </div>
      )}

      {roster.length > 0 && orphanRows.length > 0 && (
        <p className="text-sm text-text-secondary" role="note">
          Rows at the bottom labeled without roster IDs match activity that
          did not resolve to a roster student (check spelling or personal link
          usage).
        </p>
      )}

      <section aria-labelledby="gradebook-heading" className="space-y-4">
        <h2
          id="gradebook-heading"
          className="text-2xl font-semibold text-foreground"
        >
          Gradebook
        </h2>

        <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
          <table className="min-w-max w-full border-collapse text-sm">
            <thead>
              <tr className="bg-surface">
                <th
                  scope="col"
                  rowSpan={2}
                  className="sticky left-0 z-20 min-w-[10rem] border border-border bg-surface px-3 py-3 text-left text-base font-semibold text-foreground"
                >
                  Student
                </th>
                {weekHeaders.map((w) => (
                  <th
                    key={w.weekLabel}
                    scope="colgroup"
                    colSpan={w.colspan}
                    className="border border-border px-2 py-2 text-center text-sm font-semibold text-foreground"
                  >
                    {w.weekLabel}
                  </th>
                ))}
              </tr>
              <tr className="bg-surface">
                {columns.map((col) => (
                  <th
                    key={col.id}
                    scope="col"
                    className="min-w-[7.5rem] max-w-[10rem] border border-border px-2 py-2 text-left align-bottom font-semibold text-foreground"
                  >
                    <span className="line-clamp-3 block leading-snug">
                      {col.label}
                    </span>
                    <span className="mt-1 block text-xs font-normal text-text-secondary">
                      Out of {col.outOf}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="border border-border px-4 py-6 text-center text-text-secondary"
                  >
                    No roster students and no activity yet.
                  </td>
                </tr>
              ) : (
                rows.map((row) => {
                  const rowBg = row.stripe ? "bg-surface" : "bg-white";
                  return (
                    <tr key={row.identity.key} className={rowBg}>
                      <th
                        scope="row"
                        className={`sticky left-0 z-10 whitespace-nowrap border border-border px-3 py-2.5 text-left text-base font-medium text-foreground ${rowBg}`}
                      >
                        {row.identity.displayName}
                        {row.identity.kind === "orphan" && (
                          <span className="sr-only"> (not on roster)</span>
                        )}
                      </th>
                      {columns.map((col) => (
                        <td
                          key={col.id}
                          className={`border border-border px-2 py-2.5 text-left ${rowBg}`}
                        >
                          {col.kind === "quiz" ? (
                            <QuizCellView cell={row.quizzes.get(col.id)!} />
                          ) : (
                            <AssignmentCellView
                              cell={row.assignments.get(col.id)!}
                              tokenEnc={tokenEnc}
                            />
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
