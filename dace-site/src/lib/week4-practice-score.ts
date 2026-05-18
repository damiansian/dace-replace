/** Quiz-results id for workbook auto-score on the course home table. */
export const WEEK4_WORKBOOK_QUIZ_ID = "week-4-practice-workbook";

export const WEEK4_WORKBOOK_TOTAL_POINTS = 20;

export function workbookScoreStorageKey(accessToken?: string): string {
  return accessToken
    ? `dace-week4-workbook-score:${accessToken}`
    : "dace-week4-workbook-score";
}

export type WorkbookScoreMeta = {
  bestScore: number;
  lastScore: number;
  attemptNumber: number;
  lastSyncedAt: string | null;
};

export function loadWorkbookScoreMeta(accessToken?: string): WorkbookScoreMeta {
  const fallback: WorkbookScoreMeta = {
    bestScore: 0,
    lastScore: 0,
    attemptNumber: 1,
    lastSyncedAt: null,
  };
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(workbookScoreStorageKey(accessToken));
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<WorkbookScoreMeta>;
    return {
      bestScore: typeof parsed.bestScore === "number" ? parsed.bestScore : 0,
      lastScore: typeof parsed.lastScore === "number" ? parsed.lastScore : 0,
      attemptNumber:
        typeof parsed.attemptNumber === "number" ? parsed.attemptNumber : 1,
      lastSyncedAt:
        typeof parsed.lastSyncedAt === "string" ? parsed.lastSyncedAt : null,
    };
  } catch {
    return fallback;
  }
}

export function saveWorkbookScoreMeta(
  meta: WorkbookScoreMeta,
  accessToken?: string
): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      workbookScoreStorageKey(accessToken),
      JSON.stringify(meta)
    );
  } catch {
    // quota or private mode
  }
}

/** Persist best score locally and post attempt to quiz-results for the home table. */
export async function syncWorkbookScore(params: {
  score: number;
  studentDisplayName: string;
  accessToken?: string;
  attemptNumber: number;
}): Promise<WorkbookScoreMeta> {
  const { score, studentDisplayName, accessToken, attemptNumber } = params;
  const prev = loadWorkbookScoreMeta(accessToken);
  const bestScore = Math.max(prev.bestScore, score);
  const timestamp = new Date().toISOString();
  const meta: WorkbookScoreMeta = {
    bestScore,
    lastScore: score,
    attemptNumber,
    lastSyncedAt: timestamp,
  };
  saveWorkbookScoreMeta(meta, accessToken);

  if (studentDisplayName.trim()) {
    try {
      await fetch("/api/quiz-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: studentDisplayName.trim(),
          quizId: WEEK4_WORKBOOK_QUIZ_ID,
          score,
          total: WEEK4_WORKBOOK_TOTAL_POINTS,
          timestamp,
          ...(accessToken ? { accessToken } : {}),
        }),
      });
    } catch {
      // fire-and-forget; local meta still updated
    }
  }

  return meta;
}
