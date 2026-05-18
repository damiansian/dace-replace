"use client";

import { useState } from "react";
import {
  MOTION_SEEDS,
  PRACTICE_PAGES,
  PRACTICE_ZONES,
  ZONE_NUMBERS,
  type PracticePageId,
} from "@/data/week4-practice/practice-zones";
import { PracticeSitePage } from "./PracticeSitePages";

export default function PracticeSite({
  showZoneLegend = true,
  pageId: controlledPage,
  onPageChange,
}: {
  showZoneLegend?: boolean;
  pageId?: PracticePageId;
  onPageChange?: (id: PracticePageId) => void;
}) {
  const [internalPage, setInternalPage] = useState<PracticePageId>("home");
  const pageId = controlledPage ?? internalPage;

  const setPage = (id: PracticePageId) => {
    setInternalPage(id);
    onPageChange?.(id);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Practice pages">
        {PRACTICE_PAGES.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={pageId === p.id}
            onClick={() => setPage(p.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium border transition-colors ${
              pageId === p.id
                ? "bg-primary text-white border-primary"
                : "bg-white text-foreground border-border hover:bg-surface"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {showZoneLegend && (
        <div className="rounded-lg bg-surface border border-border p-3 text-xs text-text-secondary">
          <p className="font-semibold text-foreground m-0 mb-2">Zone legend</p>
          <ul className="grid sm:grid-cols-2 gap-1 list-none m-0 p-0">
            {PRACTICE_ZONES.filter((z) => z.pages.includes(pageId)).map((z) => (
              <li key={z.id}>
                <span className="font-mono text-foreground">{ZONE_NUMBERS[z.id]}.</span>{" "}
                {z.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      <PracticeSitePage pageId={pageId} showZoneLegend={showZoneLegend} />

      <div className="rounded-lg border border-border p-3">
        <p className="text-sm font-semibold text-foreground m-0 mb-2">
          Motion items to inventory
        </p>
        <ul className="list-disc list-inside text-sm text-text-secondary space-y-1 m-0">
          {MOTION_SEEDS.map((m) => (
            <li key={m.id}>
              <strong className="text-foreground">{m.label}</strong> — {m.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
