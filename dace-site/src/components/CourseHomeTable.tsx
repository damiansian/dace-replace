import Link from "next/link";
import TrackedItemStatus from "@/components/TrackedItemStatus";
import { withToken } from "@/data/progress-catalog";
import {
  formatClassDueDate,
  type HomeWeek,
} from "@/data/course-home-catalog";
import {
  bestQuiz,
  latestSubmission,
  type StudentProgressSnapshot,
} from "@/lib/student-progress";

type WeekCount = { complete: number; total: number };

interface CourseHomeTableProps {
  weeks: HomeWeek[];
  token: string | undefined;
  snapshot: StudentProgressSnapshot | null;
  weekCounts: Record<string, WeekCount | null>;
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function CourseHomeTable({
  weeks,
  token,
  snapshot,
  weekCounts,
}: CourseHomeTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">
          Course materials by week: lessons, knowledge check quizzes, and
          applied skill projects for Weeks 2 through 4. The due date for each
          week appears in the Week column and applies to every item in that
          row group.
        </caption>
        <thead>
          <tr className="bg-surface">
            <th
              scope="col"
              className="border border-border px-4 py-4 text-left font-semibold text-foreground"
            >
              Week
            </th>
            <th
              scope="col"
              className="border border-border px-4 py-4 text-left font-semibold text-foreground"
            >
              Lesson
            </th>
            <th
              scope="col"
              className="border border-border px-4 py-4 text-left font-semibold text-foreground"
            >
              Quiz
            </th>
            <th
              scope="col"
              className="border border-border px-4 py-4 text-left font-semibold text-foreground"
            >
              Applied skill
            </th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => {
            const counts = weekCounts[week.weekId];
            const appliedSubmissionRows = snapshot
              ? snapshot.submissionsById.get(week.appliedSkill.progressId) ?? []
              : [];
            const appliedLatest = latestSubmission(appliedSubmissionRows);
            const appliedGrade =
              snapshot && appliedLatest
                ? snapshot.gradeBySubmission.get(appliedLatest.id) ?? null
                : null;

            return week.lessons.map((lesson, lessonIdx) => {
              const isFirstRow = lessonIdx === 0;
              const quizRows = snapshot
                ? snapshot.quizzesById.get(lesson.progressId) ?? []
                : [];
              const best = bestQuiz(quizRows);

              return (
                <tr
                  key={`${week.weekId}-${lesson.progressId}`}
                  className={lessonIdx % 2 === 1 ? "bg-surface/50" : undefined}
                >
                  {isFirstRow && (
                    <th
                      scope="rowgroup"
                      rowSpan={week.lessons.length}
                      className="border border-border bg-white px-4 py-4 align-middle text-left font-semibold text-foreground"
                    >
                      <div className="space-y-1.5">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                          {week.weekLabel}
                        </span>
                        <Link
                          href={withToken(week.weekHref, token)}
                          className="block text-base font-semibold text-primary-text underline hover:text-primary-dark"
                        >
                          {week.weekTitle}
                        </Link>
                        {counts && (
                          <p className="text-xs font-normal text-text-secondary">
                            {counts.complete} of {counts.total} complete
                          </p>
                        )}
                        <p className="text-xs font-normal text-text-secondary">
                          Due{" "}
                          <time dateTime={week.classDueDate}>
                            {formatClassDueDate(week.classDueDate)}
                          </time>
                        </p>
                      </div>
                    </th>
                  )}
                  <td className="border border-border px-4 py-4 align-middle text-foreground">
                    <Link
                      href={withToken(lesson.lessonHref, token)}
                      className="font-medium text-primary-text underline hover:text-primary-dark"
                    >
                      {lesson.lessonLabel}
                    </Link>
                  </td>
                  <td className="border border-border px-4 py-4 align-middle text-left text-foreground">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        {snapshot && (
                          <TrackedItemStatus
                            kind="quiz"
                            complete={Boolean(best)}
                          />
                        )}
                        <Link
                          href={withToken(lesson.quizHref, token)}
                          className="font-medium text-primary-text underline hover:text-primary-dark"
                        >
                          {lesson.quizLabel}
                        </Link>
                      </div>
                      {best && (
                        <p className="pl-7 text-xs text-text-secondary">
                          Best score {best.score}/{best.total}
                        </p>
                      )}
                    </div>
                  </td>
                  {isFirstRow && (
                    <td
                      rowSpan={week.lessons.length}
                      className="border border-border bg-white px-4 py-4 align-middle text-left text-foreground"
                    >
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          {snapshot && (
                            <TrackedItemStatus
                              kind="assignment"
                              complete={Boolean(appliedLatest)}
                            />
                          )}
                          <Link
                            href={withToken(week.appliedSkill.href, token)}
                            className="font-semibold text-primary-text underline hover:text-primary-dark"
                          >
                            {week.appliedSkill.title}
                          </Link>
                        </div>
                        {appliedLatest && (
                          <div className="pl-7 text-xs text-text-secondary">
                            <p>Submitted {formatDate(appliedLatest.submittedAt)}</p>
                            {appliedGrade && (
                              <p className="font-medium text-foreground">
                                Graded {appliedGrade.score}/{appliedGrade.total}
                              </p>
                            )}
                            {appliedLatest.linkUrl && (
                              <p>
                                <a
                                  href={appliedLatest.linkUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline text-primary-text hover:text-primary-dark"
                                >
                                  View your submitted file
                                </a>
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              );
            });
          })}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan={4}
              className="border border-border bg-surface px-4 py-3 text-xs text-text-secondary"
            >
              Due dates are end of day (11:59 PM) on the listed date.
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
