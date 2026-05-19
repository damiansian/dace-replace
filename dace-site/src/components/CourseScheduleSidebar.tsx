import WeekCompletionCircle from "@/components/WeekCompletionCircle";
import { formatClassDueDate, type HomeWeek } from "@/data/course-home-catalog";

type WeekCount = { complete: number; total: number };

interface CourseScheduleSidebarProps {
  weeks: HomeWeek[];
  weekCounts: Record<string, WeekCount | null>;
}

function isWeekComplete(counts: WeekCount | null | undefined): boolean {
  if (!counts) return false;
  return counts.total > 0 && counts.complete === counts.total;
}

export default function CourseScheduleSidebar({
  weeks,
  weekCounts,
}: CourseScheduleSidebarProps) {
  return (
    <aside
      aria-labelledby="course-schedule-heading"
      className="lg:sticky lg:top-6 lg:self-start"
    >
      <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
        <h2
          id="course-schedule-heading"
          className="text-base font-semibold text-foreground"
        >
          Schedule
        </h2>
        <p className="mt-1 text-xs text-text-secondary">
          From the course syllabus (Discover Badge, Weeks 2 through 4).
        </p>

        <table className="mt-4 w-full border-collapse text-sm">
          <caption className="sr-only">
            Weekly class schedule with completion status for Weeks 2 through 4
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="border-b border-border pb-2 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-text-secondary"
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
            {weeks.map((week) => {
              const counts = weekCounts[week.weekId];
              const complete = isWeekComplete(counts);

              return (
                <tr key={week.weekId} className="border-b border-border/60">
                  <th
                    scope="row"
                    className="py-3 pr-3 text-left font-normal text-foreground"
                  >
                    <div className="flex items-start gap-2">
                      <WeekCompletionCircle
                        complete={complete}
                        weekLabel={week.weekLabel}
                      />
                      <span>
                        <span className="font-medium text-foreground">
                          {week.weekLabel}
                        </span>
                        <span className="block text-xs leading-snug text-text-secondary">
                          {week.weekTitle}
                        </span>
                      </span>
                    </div>
                  </th>
                  <td className="py-3 align-top text-xs text-text-secondary whitespace-nowrap">
                    <time dateTime={week.syllabusClassDate}>
                      {formatClassDueDate(week.syllabusClassDate)}
                    </time>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <p className="mt-3 text-xs text-text-secondary">
          Filled circle: all quizzes and applied practice for that week are
          done. Open circle: still in progress.
        </p>
      </div>
    </aside>
  );
}
