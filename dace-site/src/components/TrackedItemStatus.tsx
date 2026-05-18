export default function TrackedItemStatus({
  kind,
  complete,
}: {
  kind: "quiz" | "assignment";
  complete: boolean;
}) {
  const label = complete
    ? kind === "quiz"
      ? "Quiz complete"
      : "Submitted"
    : kind === "quiz"
      ? "Quiz not started"
      : "Not submitted";

  if (complete) {
    return (
      <span
        role="img"
        aria-label={label}
        className="inline-flex h-5 w-5 shrink-0 self-start items-center justify-center rounded-full bg-accent-green/10 text-accent-green"
      >
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="h-3.5 w-3.5"
        >
          <path
            d="M5 10.5l3 3 7-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="sr-only">{label}</span>
      </span>
    );
  }

  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex h-5 w-5 shrink-0 self-start items-center justify-center rounded-full bg-surface text-text-secondary"
    >
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        className="h-3.5 w-3.5"
      >
        <circle
          cx="10"
          cy="10"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}
