type CalloutTone = "info" | "warn";

/**
 * Conspicuous, always-visible badge that documents the motion target and
 * how it responds to prefers-reduced-motion. Conveys the learning visually
 * for sighted students who never toggle their OS preference.
 */
export default function MotionLearningCallout({
  motionId,
  label,
  fullMotion,
  reducedMotion,
  hasPauseControl = false,
  tone = "info",
}: {
  motionId: string;
  label: string;
  fullMotion: string;
  reducedMotion: string;
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
        <span>Respects prefers-reduced-motion</span>
        {hasPauseControl ? (
          <span className="rounded-full bg-accent-green/15 text-accent-green border border-accent-green/30 px-2 py-0.5 text-[11px] font-medium">
            Pause control provided
          </span>
        ) : null}
      </p>
      <dl className="grid gap-x-3 gap-y-1 text-text-secondary m-0 grid-cols-[max-content_1fr]">
        <dt className="font-medium text-foreground">{label}:</dt>
        <dd className="m-0">{fullMotion}</dd>
        <dt className="font-medium text-foreground">Reduced motion:</dt>
        <dd className="m-0">{reducedMotion}</dd>
      </dl>
    </div>
  );
}
