import { initialWorkbookState, type WorkbookState } from "@/data/week4-practice/workbook-types";

const STORAGE_KEY = "dace-week4-practice-workbook";

/** Map saved step index from the 6-step workbook (Explore at 1) to the 5-step flow. */
export function migrateCurrentStep(saved: number): number {
  const max = 4;
  if (saved <= 0) return 0;
  if (saved === 1) return 1;
  return Math.min(saved - 1, max);
}

export function workbookStorageKey(accessToken?: string): string {
  return accessToken ? `${STORAGE_KEY}:${accessToken}` : STORAGE_KEY;
}

export function loadWorkbookDraft(accessToken?: string): WorkbookState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(workbookStorageKey(accessToken));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as WorkbookState;
    if (parsed.version !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveWorkbookDraft(
  state: WorkbookState,
  accessToken?: string
): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      workbookStorageKey(accessToken),
      JSON.stringify(state)
    );
  } catch {
    // quota or private mode
  }
}

export function clearWorkbookDraft(accessToken?: string): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(workbookStorageKey(accessToken));
}

export function mergeWorkbookDraft(
  accessToken?: string
): WorkbookState {
  const base = initialWorkbookState();
  const saved = loadWorkbookDraft(accessToken);
  if (!saved) return base;
  return {
    ...base,
    ...saved,
    landmarks: { ...base.landmarks, ...saved.landmarks },
    skipLink: { ...base.skipLink, ...saved.skipLink },
    skipLinkFirstTab: { ...base.skipLinkFirstTab, ...saved.skipLinkFirstTab },
    selfAssessment: { ...base.selfAssessment, ...saved.selfAssessment },
  };
}

/** Clears saved draft so the next load starts empty. */
export function resetWorkbookDraft(accessToken?: string): void {
  clearWorkbookDraft(accessToken);
}
