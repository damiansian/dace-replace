import { initialWorkbookState, type WorkbookState } from "@/data/week4-practice/workbook-types";

const STORAGE_KEY = "dace-week4-practice-workbook";

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
