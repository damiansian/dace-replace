import { PRACTICE_PAGES, type PracticePageId } from "@/data/week4-practice/practice-zones";

function PageTabStatusDot({
  answered,
  selected,
}: {
  answered: boolean;
  selected: boolean;
}) {
  if (answered) {
    return (
      <span
        aria-hidden="true"
        className={`inline-block h-2 w-2 shrink-0 rounded-full ${
          selected ? "bg-white" : "bg-foreground/65"
        }`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2 w-2 shrink-0 rounded-full border-2 ${
        selected ? "border-white/80 bg-transparent" : "border-border bg-transparent"
      }`}
    />
  );
}

export function PracticePageTabs({
  pageId,
  pageCompletion,
  onSelect,
  showLegend = true,
}: {
  pageId: PracticePageId;
  pageCompletion?: Partial<Record<PracticePageId, boolean>>;
  onSelect: (id: PracticePageId) => void;
  showLegend?: boolean;
}) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Practice pages">
        {PRACTICE_PAGES.map((p) => {
          const selected = pageId === p.id;
          const answered = pageCompletion?.[p.id] ?? false;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={`${p.label}${answered ? ", answered" : ", not yet answered"}`}
              onClick={() => onSelect(p.id)}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium border transition-colors ${
                selected
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-foreground border-border hover:bg-surface"
              }`}
            >
              <PageTabStatusDot answered={answered} selected={selected} />
              {p.label}
            </button>
          );
        })}
      </div>
      {showLegend && pageCompletion ? (
        <p className="text-xs text-text-secondary m-0">
          <span className="inline-flex items-center gap-1.5 mr-3">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-foreground/65"
            />
            Answered on this step
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full border-2 border-border"
            />
            Not yet answered
          </span>
        </p>
      ) : null}
    </div>
  );
}
