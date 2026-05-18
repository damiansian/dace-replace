"use client";

import { useState } from "react";
import {
  getMotionNumber,
  motionItemsForPage,
  skipTargetsForPage,
  type PracticeOverlayMode,
} from "@/data/week4-practice/practice-overlays";
import {
  MOTION_SEEDS,
  PRACTICE_PAGES,
  getZoneNumber,
  zonesForPage,
  type PracticePageId,
} from "@/data/week4-practice/practice-zones";
import { PracticeSitePage } from "./PracticeSitePages";

function OverlayLegend({
  overlayMode,
  pageId,
}: {
  overlayMode: PracticeOverlayMode;
  pageId: PracticePageId;
}) {
  if (overlayMode === "landmark") {
    const zones = zonesForPage(pageId);
    const splitAt = Math.ceil(zones.length / 2);
    const renderZone = (z: (typeof zones)[number]) => (
      <li key={z.id}>
        <span className="font-mono text-foreground">{getZoneNumber(z.id, pageId)}.</span>{" "}
        {z.description}
      </li>
    );
    return (
      <div className="rounded-lg bg-surface border border-border p-3 text-xs text-text-secondary">
        <p className="font-semibold text-foreground m-0 mb-2">Zone legend (static preview)</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
          <ul className="flex-1 list-none m-0 p-0 space-y-1">
            {zones.slice(0, splitAt).map(renderZone)}
          </ul>
          <ul className="flex-1 list-none m-0 p-0 space-y-1">
            {zones.slice(splitAt).map(renderZone)}
          </ul>
        </div>
      </div>
    );
  }

  if (overlayMode === "skipNav") {
    const targets = skipTargetsForPage(pageId);
    const splitAt = Math.ceil(targets.length / 2);
    return (
      <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-text-secondary">
        <p className="font-semibold text-foreground m-0 mb-2">Focus target legend (static preview)</p>
        <p className="m-0 mb-2">
          Numbers mark where focus may land after a skip link to main content and one Tab
          press.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
          <ul className="flex-1 list-none m-0 p-0 space-y-1">
            {targets.slice(0, splitAt).map((t, i) => (
              <li key={t.id}>
                <span className="font-mono text-foreground">{i + 1}.</span> {t.description}
              </li>
            ))}
          </ul>
          <ul className="flex-1 list-none m-0 p-0 space-y-1">
            {targets.slice(splitAt).map((t, i) => (
              <li key={t.id}>
                <span className="font-mono text-foreground">{splitAt + i + 1}.</span>{" "}
                {t.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  const onPage = motionItemsForPage(pageId);
  return (
    <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 text-xs text-text-secondary">
      <p className="font-semibold text-foreground m-0 mb-2">
        Motion targets on this page (static preview)
      </p>
      <ul className="list-none m-0 p-0 space-y-1">
        {onPage.map((m) => (
          <li key={m.id}>
            <span className="font-mono text-foreground">{getMotionNumber(m.id)}.</span>{" "}
            {m.label}
          </li>
        ))}
      </ul>
      {onPage.length === 0 ? (
        <p className="m-0 mt-2">Switch tabs to find the other motion targets.</p>
      ) : null}
    </div>
  );
}

function MotionInventoryList() {
  return (
    <div className="rounded-lg border border-border p-3">
      <p className="text-sm font-semibold text-foreground m-0 mb-2">All motion items (1–4)</p>
      <ul className="list-none m-0 p-0 space-y-1 text-sm text-text-secondary">
        {MOTION_SEEDS.map((m) => (
          <li key={m.id}>
            <span className="font-mono text-foreground">{getMotionNumber(m.id)}.</span>{" "}
            <strong className="text-foreground font-medium">{m.label}</strong> — {m.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PracticeSite({
  overlayMode = "landmark",
  showLegend = true,
  pageId: controlledPage,
  onPageChange,
}: {
  overlayMode?: PracticeOverlayMode;
  showLegend?: boolean;
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

      {showLegend ? <OverlayLegend overlayMode={overlayMode} pageId={pageId} /> : null}

      <PracticeSitePage pageId={pageId} overlayMode={overlayMode} />

      {overlayMode === "motion" ? <MotionInventoryList /> : null}
    </div>
  );
}
