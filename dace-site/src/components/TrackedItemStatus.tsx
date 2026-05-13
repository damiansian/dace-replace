export default function TrackedItemStatus({
  kind,
  complete,
}: {
  kind: "quiz" | "assignment";
  complete: boolean;
}) {
  if (complete) {
    return (
      <span className="inline-flex shrink-0 items-center rounded-full bg-accent-green/10 px-2 py-0.5 text-xs font-medium text-accent-green">
        {kind === "quiz" ? "Quiz complete" : "Submitted"}
      </span>
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center rounded-full bg-surface px-2 py-0.5 text-xs font-medium text-text-secondary">
      {kind === "quiz" ? "Quiz not started" : "Not submitted"}
    </span>
  );
}
