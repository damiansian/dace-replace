"use client";

import { useCallback, useRef, type ReactNode } from "react";

type ProgressAccordionsShellProps = {
  children: ReactNode;
};

export default function ProgressAccordionsShell({
  children,
}: ProgressAccordionsShellProps) {
  const regionRef = useRef<HTMLDivElement>(null);

  const setAllOpen = useCallback((open: boolean) => {
    const root = regionRef.current;
    if (!root) return;
    root.querySelectorAll("details").forEach((el) => {
      (el as HTMLDetailsElement).open = open;
    });
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setAllOpen(true)}
          className="inline-flex items-center rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Expand all
        </button>
        <button
          type="button"
          onClick={() => setAllOpen(false)}
          className="inline-flex items-center rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Collapse all
        </button>
      </div>
      <div ref={regionRef} className="space-y-4">
        {children}
      </div>
    </div>
  );
}
