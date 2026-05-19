export default function WeekCompletionCircle({
  complete,
  weekLabel,
}: {
  complete: boolean;
  weekLabel: string;
}) {
  const label = complete
    ? `${weekLabel} complete`
    : `${weekLabel} not complete`;

  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-flex h-4 w-4 shrink-0 items-center justify-center ${
        complete ? "text-accent-green" : "text-text-secondary"
      }`}
    >
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4"
      >
        {complete ? (
          <circle cx="8" cy="8" r="5" fill="currentColor" />
        ) : (
          <circle
            cx="8"
            cy="8"
            r="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        )}
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}
