type CalloutTone = "info" | "warn";

/**
 * Conspicuous badge that documents a motion target for sighted students.
 * Does not describe reduced-motion behavior (students discover that in the workbook).
 */
export default function MotionLearningCallout({
  motionId,
  label,
  fullMotion,
  hint,
  hasPauseControl = false,
  tone = "info",
}: {
  motionId: string;
  label: string;
  fullMotion: string;
  /** Shown below the Motion pill (e.g. scroll-once animations). */
  hint?: string;
  hasPauseControl?: boolean;
  tone?: CalloutTone;
}) {
  const containerClass =
    tone === "warn"
      ? "border-amber-400 bg-amber-50"
      : "border-primary/40 bg-primary/5";

  return (
    <div
      role="note"
      aria-labelledby={`motion-callout-${motionId}-label`}
      className={`mt-3 rounded-md border-2 ${containerClass} px-3 py-2 text-xs`}
    >
      <p
        id={`motion-callout-${motionId}-label`}
        className="font-semibold text-foreground m-0 mb-1 flex flex-wrap items-center gap-2"
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-1 rounded-full bg-white border border-border px-2 py-0.5 text-[11px] font-medium text-foreground"
        >
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M3 8h10M8 3v10" strokeLinecap="round" />
          </svg>
          Motion
        </span>
        {hasPauseControl ? (
          <span className="rounded-full bg-accent-green/15 text-accent-green border border-accent-green/30 px-2 py-0.5 text-[11px] font-medium">
            Pause control provided
          </span>
        ) : null}
      </p>
      {hint ? (
        <p className="text-text-secondary m-0 mb-1">{hint}</p>
      ) : null}
      <p className="text-text-secondary m-0">
        <span className="font-medium text-foreground">{label}:</span> {fullMotion}
      </p>
    </div>
  );
}
