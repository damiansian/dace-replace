import Link from "next/link";
import { withToken } from "@/data/progress-catalog";

export default function StudentProgressStrip({
  displayName,
  completeItems,
  totalItems,
  accessToken,
}: {
  displayName: string;
  completeItems: number;
  totalItems: number;
  accessToken: string;
}) {
  return (
    <div className="border-t border-border bg-surface px-4 py-2 text-sm text-foreground sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-text-secondary">
          <span className="font-medium text-foreground">{displayName}</span>
          <span aria-hidden="true"> · </span>
          <span>
            {completeItems} of {totalItems} tracked items complete
          </span>
        </p>
        <Link
          href={withToken("/progress", accessToken)}
          className="font-medium text-primary-text underline hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Open My Progress
        </Link>
      </div>
    </div>
  );
}
