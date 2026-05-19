import { motionItemsForPage } from "@/data/week4-practice/practice-overlays";
import {
  PRACTICE_PAGES,
  zonesForPage,
  type PracticePageId,
} from "@/data/week4-practice/practice-zones";
import { hasGenericLandmarkName } from "@/lib/week4-practice-landmark-name";
import type { WorkbookState } from "@/data/week4-practice/workbook-types";
import {
  needsPauseButtonAnswered,
  shouldRespectPreferenceAnswered,
} from "@/lib/week4-practice-motion-grade";

function isAnsweredText(value: string | undefined): boolean {
  return Boolean(value?.trim());
}

/** All required landmark fields filled on this page (not graded for correctness). */
export function isLandmarkPageComplete(
  state: WorkbookState,
  pageId: PracticePageId
): boolean {
  const zones = zonesForPage(pageId);
  const rows = state.landmarks[pageId] ?? [];
  return zones.every((zone) => {
    const row = rows.find((r) => r.zoneId === zone.id);
    const role = row?.role?.trim() ?? "";
    if (!role || role === "none") return false;
    if (!isAnsweredText(row?.htmlEquivalent)) return false;
    const accessibleName = row?.accessibleName?.trim() ?? "";
    if (zone.nameRequired && !isAnsweredText(accessibleName)) return false;
    if (zone.nameRequired && hasGenericLandmarkName(accessibleName)) return false;
    return true;
  });
}

export function landmarkPageCompletion(
  state: WorkbookState
): Record<PracticePageId, boolean> {
  return Object.fromEntries(
    PRACTICE_PAGES.map((p) => [p.id, isLandmarkPageComplete(state, p.id)])
  ) as Record<PracticePageId, boolean>;
}

export function isSkipPageComplete(
  state: WorkbookState,
  pageId: PracticePageId
): boolean {
  return isAnsweredText(state.skipLinkFirstTab[pageId]);
}

export function skipLinkPageCompletion(
  state: WorkbookState
): Record<PracticePageId, boolean> {
  return Object.fromEntries(
    PRACTICE_PAGES.map((p) => [p.id, isSkipPageComplete(state, p.id)])
  ) as Record<PracticePageId, boolean>;
}

export function isMotionPageComplete(
  state: WorkbookState,
  pageId: PracticePageId
): boolean {
  const seeds = motionItemsForPage(pageId);
  if (seeds.length === 0) return true;
  return seeds.every((seed) => {
    const row = state.motionInventory.find((m) => m.id === seed.id);
    return needsPauseButtonAnswered(row) && shouldRespectPreferenceAnswered(row);
  });
}

export function motionPageCompletion(
  state: WorkbookState
): Record<PracticePageId, boolean> {
  return Object.fromEntries(
    PRACTICE_PAGES.map((p) => [p.id, isMotionPageComplete(state, p.id)])
  ) as Record<PracticePageId, boolean>;
}
