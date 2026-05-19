/**
 * Shared logic for instructor-adjustable exam scoring (Badge 1 final exam and
 * any future weighted assessment).
 *
 * Score model:
 * - Each question has a `pointWeight` (default 1.0). Instructors can lower
 *   (e.g. 0.5, 0) after item analysis without redeploying.
 * - `adjustedScore` = sum of `pointWeight` for every question the student
 *   answered correctly.
 * - `adjustedTotal` = sum of `pointWeight` for every question in the quiz.
 * - Per-attempt overrides are stored on `quiz_results.adjusted_score` /
 *   `adjustment_note` and take precedence over the computed value.
 */

import { db } from "@/db";
import { quizQuestionWeights, quizResults } from "@/db/schema";
import { eq, inArray } from "drizzle-orm";

import b1FinalAssessment from "@/data/quizzes/b1-final-assessment.json";

export interface ExamQuestion {
  id: string;
  correctAnswer: string;
}

export interface ExamDefinition {
  id: string;
  title: string;
  questions: ExamQuestion[];
}

/**
 * Registry of weighted exams. Add additional entries here when a new exam
 * needs instructor-adjustable scoring.
 */
const EXAM_REGISTRY: Record<string, ExamDefinition> = {
  [b1FinalAssessment.id]: {
    id: b1FinalAssessment.id,
    title: b1FinalAssessment.title,
    questions: b1FinalAssessment.questions.map((q) => ({
      id: q.id,
      correctAnswer: q.correctAnswer,
    })),
  },
};

export function getExamDefinition(quizId: string): ExamDefinition | null {
  return EXAM_REGISTRY[quizId] ?? null;
}

export function listExams(): ExamDefinition[] {
  return Object.values(EXAM_REGISTRY);
}

export function parseWeight(raw: string | number | null | undefined): number {
  if (raw === null || raw === undefined) return 1;
  const n = typeof raw === "number" ? raw : Number.parseFloat(raw);
  if (!Number.isFinite(n) || n < 0) return 1;
  return n;
}

export function formatScore(value: number): string {
  // Show one decimal when not integer; otherwise show as integer.
  return Number.isInteger(value) ? value.toString() : value.toFixed(2);
}

/**
 * Compute adjusted score for a single attempt given the exam definition,
 * the student's per-question responses, and the current weight map.
 */
export function computeAdjustedForAttempt(
  exam: ExamDefinition,
  responses: Record<string, string> | null | undefined,
  weights: Map<string, number>
): { adjustedScore: number; adjustedTotal: number } {
  let adjustedScore = 0;
  let adjustedTotal = 0;
  const resp = responses ?? {};
  for (const q of exam.questions) {
    const w = weights.get(q.id) ?? 1;
    adjustedTotal += w;
    if (resp[q.id] === q.correctAnswer) {
      adjustedScore += w;
    }
  }
  return { adjustedScore, adjustedTotal };
}

export async function loadWeightsMap(
  quizId: string
): Promise<Map<string, number>> {
  const rows = await db
    .select()
    .from(quizQuestionWeights)
    .where(eq(quizQuestionWeights.quizId, quizId));
  const map = new Map<string, number>();
  for (const row of rows) {
    map.set(row.questionId, parseWeight(row.pointWeight));
  }
  return map;
}

/**
 * Upsert one or more per-question weights for a quiz. Returns the resulting
 * weights map (including unchanged questions defaulted to 1.0).
 */
export async function upsertWeights(
  quizId: string,
  updates: Record<string, number>
): Promise<Map<string, number>> {
  const exam = getExamDefinition(quizId);
  if (!exam) throw new Error(`Unknown weighted exam: ${quizId}`);

  const validIds = new Set(exam.questions.map((q) => q.id));
  for (const [qid, w] of Object.entries(updates)) {
    if (!validIds.has(qid)) continue;
    if (!Number.isFinite(w) || w < 0) continue;
    const weightStr = w.toFixed(2);
    await db
      .insert(quizQuestionWeights)
      .values({ quizId, questionId: qid, pointWeight: weightStr })
      .onConflictDoUpdate({
        target: [
          quizQuestionWeights.quizId,
          quizQuestionWeights.questionId,
        ],
        set: { pointWeight: weightStr, updatedAt: new Date() },
      });
  }
  return loadWeightsMap(quizId);
}

/**
 * Recompute and persist `adjusted_score` / `adjusted_total` for every attempt
 * of the given quiz that has stored responses and no manual override
 * (`adjustment_note IS NULL`). Per-attempt overrides are preserved.
 */
export async function recomputeAttemptsForQuiz(quizId: string): Promise<{
  updated: number;
  skipped: number;
}> {
  const exam = getExamDefinition(quizId);
  if (!exam) throw new Error(`Unknown weighted exam: ${quizId}`);

  const weights = await loadWeightsMap(quizId);
  const attempts = await db
    .select()
    .from(quizResults)
    .where(eq(quizResults.quizId, quizId));

  let updated = 0;
  let skipped = 0;
  for (const attempt of attempts) {
    if (attempt.adjustmentNote && attempt.adjustmentNote.length > 0) {
      // Manual override — leave adjusted_score alone but refresh adjustedTotal
      const { adjustedTotal } = computeAdjustedForAttempt(
        exam,
        attempt.responses,
        weights
      );
      await db
        .update(quizResults)
        .set({ adjustedTotal: adjustedTotal.toFixed(2) })
        .where(eq(quizResults.id, attempt.id));
      skipped++;
      continue;
    }
    if (!attempt.responses) {
      skipped++;
      continue;
    }
    const { adjustedScore, adjustedTotal } = computeAdjustedForAttempt(
      exam,
      attempt.responses,
      weights
    );
    await db
      .update(quizResults)
      .set({
        adjustedScore: adjustedScore.toFixed(2),
        adjustedTotal: adjustedTotal.toFixed(2),
      })
      .where(eq(quizResults.id, attempt.id));
    updated++;
  }
  return { updated, skipped };
}

export async function applyAttemptOverride(
  attemptId: number,
  override: {
    adjustedScore: number | null;
    adjustedTotal?: number | null;
    note: string | null;
  }
): Promise<void> {
  const set: {
    adjustedScore: string | null;
    adjustedTotal?: string | null;
    adjustmentNote: string | null;
  } = {
    adjustedScore:
      override.adjustedScore === null
        ? null
        : override.adjustedScore.toFixed(2),
    adjustmentNote: override.note,
  };
  if (override.adjustedTotal !== undefined) {
    set.adjustedTotal =
      override.adjustedTotal === null
        ? null
        : override.adjustedTotal.toFixed(2);
  }
  await db.update(quizResults).set(set).where(eq(quizResults.id, attemptId));
}

export interface PerQuestionStats {
  questionId: string;
  attempts: number;
  correct: number;
  percentCorrect: number;
  weight: number;
  optionCounts: Record<string, number>;
}

export function computePerQuestionStats(
  exam: ExamDefinition,
  attempts: { responses: Record<string, string> | null }[],
  weights: Map<string, number>
): PerQuestionStats[] {
  const withResponses = attempts.filter((a) => a.responses);
  return exam.questions.map((q) => {
    let correct = 0;
    const optionCounts: Record<string, number> = {};
    for (const attempt of withResponses) {
      const chosen = attempt.responses?.[q.id];
      if (!chosen) continue;
      optionCounts[chosen] = (optionCounts[chosen] ?? 0) + 1;
      if (chosen === q.correctAnswer) correct++;
    }
    const attemptsCount = withResponses.length;
    return {
      questionId: q.id,
      attempts: attemptsCount,
      correct,
      percentCorrect:
        attemptsCount > 0 ? (correct / attemptsCount) * 100 : 0,
      weight: weights.get(q.id) ?? 1,
      optionCounts,
    };
  });
}

export async function loadAttempts(quizId: string) {
  return db
    .select()
    .from(quizResults)
    .where(eq(quizResults.quizId, quizId));
}

export async function loadAttemptsByIds(ids: number[]) {
  if (ids.length === 0) return [];
  return db.select().from(quizResults).where(inArray(quizResults.id, ids));
}

export async function findAttempt(attemptId: number) {
  const rows = await db
    .select()
    .from(quizResults)
    .where(eq(quizResults.id, attemptId));
  return rows[0] ?? null;
}

/** Sum of all currently stored weights for a quiz. Default-weight (1.0) questions
 * with no row are included by falling back to `exam.questions.length`. */
export function totalWeightFromMap(
  exam: ExamDefinition,
  weights: Map<string, number>
): number {
  let total = 0;
  for (const q of exam.questions) {
    total += weights.get(q.id) ?? 1;
  }
  return total;
}

/** Effective score for gradebook display: prefers adjusted, falls back to raw. */
export interface EffectiveScore {
  display: string;
  numerator: number;
  denominator: number;
  source: "adjusted" | "raw";
}

export function effectiveScore(attempt: {
  score: number;
  total: number;
  adjustedScore: string | null;
  adjustedTotal: string | null;
}): EffectiveScore {
  if (attempt.adjustedScore !== null && attempt.adjustedTotal !== null) {
    const num = parseWeight(attempt.adjustedScore);
    const denom = parseWeight(attempt.adjustedTotal);
    return {
      display: `${formatScore(num)}/${formatScore(denom)}`,
      numerator: num,
      denominator: denom,
      source: "adjusted",
    };
  }
  return {
    display: `${attempt.score}/${attempt.total}`,
    numerator: attempt.score,
    denominator: attempt.total,
    source: "raw",
  };
}
