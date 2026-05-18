import Link from "next/link";
import TrackedItemStatus from "@/components/TrackedItemStatus";
import { withToken } from "@/data/progress-catalog";
import type { HomeWeek } from "@/data/course-home-catalog";
import type { StudentProgressSnapshot } from "@/lib/student-progress";

type WeekCount = { complete: number; total: number };

interface CourseHomeTableProps {
  weeks: HomeWeek[];
  token: string | undefined;
  snapshot: StudentProgressSnapshot | null;
  weekCounts: Record<string, WeekCount | null>;
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
          applied skill projects for Weeks 2 through 4.
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
            return week.lessons.map((lesson, lessonIdx) => {
              const isFirstRow = lessonIdx === 0;
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
                    <div className="flex w-full items-center justify-start gap-2">
                      {snapshot && (
                        <TrackedItemStatus
                          kind="quiz"
                          complete={Boolean(
                            snapshot.itemComplete.get(lesson.progressId)
                          )}
                        />
                      )}
                      <Link
                        href={withToken(lesson.quizHref, token)}
                        className="font-medium text-primary-text underline hover:text-primary-dark"
                      >
                        {lesson.quizLabel}
                      </Link>
                    </div>
                  </td>
                  {isFirstRow && (
                    <td
                      rowSpan={week.lessons.length}
                      className="border border-border bg-white px-4 py-4 align-middle text-left text-foreground"
                    >
                      <div className="flex w-full items-center justify-start gap-2">
                        {snapshot && (
                          <TrackedItemStatus
                            kind="assignment"
                            complete={Boolean(
                              snapshot.itemComplete.get(
                                week.appliedSkill.progressId
                              )
                            )}
                          />
                        )}
                        <Link
                          href={withToken(week.appliedSkill.href, token)}
                          className="font-semibold text-primary-text underline hover:text-primary-dark"
                        >
                          {week.appliedSkill.title}
                        </Link>
                      </div>
                    </td>
                  )}
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
}
