import WeekCompletionCircle from "@/components/WeekCompletionCircle";
import {
  flattenCourseSchedule,
  type ScheduleRow,
} from "@/data/course-schedule";

type WeekCount = { complete: number; total: number };

interface CourseScheduleSidebarProps {
  weekCounts: Record<string, WeekCount | null>;
}

function isWeekComplete(counts: WeekCount | null | undefined): boolean {
  if (!counts) return false;
  return counts.total > 0 && counts.complete === counts.total;
}

function rowSubtitle(row: ScheduleRow): string {
  return row.topics ?? row.modules;
}

function ScheduleStatusIcon({
  row,
  complete,
}: {
  row: ScheduleRow;
  complete: boolean;
}) {
  if (row.progressWeekId) {
    return (
      <WeekCompletionCircle complete={complete} weekLabel={row.weekLabel} />
    );
  }

  if (row.kind === "break") {
    return (
      <span
        className="inline-flex h-4 w-4 shrink-0 items-center justify-center text-sm"
        aria-hidden="true"
      >
        {"\u{1F334}"}
      </span>
    );
  }

  return <span className="inline-block h-4 w-4 shrink-0" aria-hidden="true" />;
}

export default function CourseScheduleSidebar({
  weekCounts,
}: CourseScheduleSidebarProps) {
  const rows = flattenCourseSchedule();

  return (
    <aside
      aria-labelledby="course-schedule-heading"
      className="min-w-0 lg:sticky lg:top-6 lg:self-start"
    >
      <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
        <h2
          id="course-schedule-heading"
          className="text-base font-semibold text-foreground"
        >
          Schedule
        </h2>
        <p className="mt-1 text-xs text-text-secondary">
          From the course syllabus (15-week program, April through August 2026).
        </p>

        <table className="mt-4 w-full table-fixed border-collapse text-sm">
          <caption className="sr-only">
            Full course schedule by week with live session dates
          </caption>
          <colgroup>
            <col className="w-[58%]" />
            <col className="w-[42%]" />
          </colgroup>
          <thead>
            <tr>
              <th
                scope="col"
                className="border-b border-border pb-2 pr-2 text-left text-xs font-semibold uppercase tracking-wide text-text-secondary"
              >
                Week / topics
              </th>
              <th
                scope="col"
                className="border-b border-border pb-2 text-left text-xs font-semibold uppercase tracking-wide text-text-secondary"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const counts = row.progressWeekId
                ? weekCounts[row.progressWeekId]
                : undefined;
              const complete = row.progressWeekId
                ? isWeekComplete(counts)
                : false;
              const isBreak = row.kind === "break";

              return (
                <tr key={row.id} className="border-b border-border/60">
                  <th
                    scope="row"
                    className={`py-3 pr-2 text-left font-normal text-foreground ${isBreak ? "italic" : ""}`}
                  >
                    <div className="flex min-w-0 items-start gap-2">
                      <ScheduleStatusIcon row={row} complete={complete} />
                      <span className="min-w-0">
                        <span className="font-medium text-foreground">
                          {row.weekLabel}
                        </span>
                        <span className="block break-words text-xs leading-snug text-text-secondary">
                          {rowSubtitle(row)}
                        </span>
                      </span>
                    </div>
                  </th>
                  <td className="break-words py-3 align-top text-xs leading-snug text-text-secondary">
                    {row.sessionDate ? (
                      <time dateTime={row.sessionDate}>{row.dateDisplay}</time>
                    ) : (
                      row.dateDisplay
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <p className="mt-3 text-xs text-text-secondary">
          Filled circle: all quizzes and applied practice for that week are done
          on this site (Weeks 2 through 4). Open circle: still in progress.
        </p>
      </div>
    </aside>
  );
}
