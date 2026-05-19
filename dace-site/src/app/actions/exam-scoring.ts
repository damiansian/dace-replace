"use server";

import { revalidatePath } from "next/cache";
import {
  applyAttemptOverride,
  computeAdjustedForAttempt,
  findAttempt,
  getExamDefinition,
  loadAttempts,
  loadWeightsMap,
  parseWeight,
  recomputeAttemptsForQuiz,
  upsertWeights,
} from "@/lib/exam-scoring";

function requireAdmin(token: string): void {
  if (!process.env.ADMIN_SECRET || token !== process.env.ADMIN_SECRET) {
    throw new Error("Unauthorized");
  }
}

export async function updateExamWeights(args: {
  token: string;
  quizId: string;
  weights: Record<string, number>;
}): Promise<{ updated: number; skipped: number }> {
  requireAdmin(args.token);

  const exam = getExamDefinition(args.quizId);
  if (!exam) throw new Error(`Unknown exam: ${args.quizId}`);

  const sanitized: Record<string, number> = {};
  for (const [qid, raw] of Object.entries(args.weights)) {
    const w = parseWeight(raw);
    if (Number.isFinite(w) && w >= 0 && w <= 100) {
      sanitized[qid] = w;
    }
  }

  await upsertWeights(args.quizId, sanitized);
  const result = await recomputeAttemptsForQuiz(args.quizId);

  revalidatePath("/teacher");
  revalidatePath(`/teacher/exam/${args.quizId}`);
  return result;
}

export async function recomputeExam(args: {
  token: string;
  quizId: string;
}): Promise<{ updated: number; skipped: number }> {
  requireAdmin(args.token);
  if (!getExamDefinition(args.quizId)) {
    throw new Error(`Unknown exam: ${args.quizId}`);
  }
  const result = await recomputeAttemptsForQuiz(args.quizId);
  revalidatePath("/teacher");
  revalidatePath(`/teacher/exam/${args.quizId}`);
  return result;
}

export async function applyExamOverride(args: {
  token: string;
  quizId: string;
  attemptId: number;
  adjustedScore: number | null;
  note: string | null;
}): Promise<void> {
  requireAdmin(args.token);

  const attempt = await findAttempt(args.attemptId);
  if (!attempt || attempt.quizId !== args.quizId) {
    throw new Error("Attempt not found");
  }

  const adjusted = args.adjustedScore;
  if (adjusted !== null && (!Number.isFinite(adjusted) || adjusted < 0)) {
    throw new Error("Adjusted score must be zero or greater");
  }

  const note = args.note?.trim() || null;

  await applyAttemptOverride(args.attemptId, {
    adjustedScore: adjusted,
    note,
  });

  revalidatePath("/teacher");
  revalidatePath(`/teacher/exam/${args.quizId}`);
  revalidatePath(
    `/teacher/exam/${args.quizId}/attempt/${args.attemptId}`
  );
}

/**
 * Clear a per-attempt override and recompute the attempt's adjusted score
 * from the current weights map.
 */
export async function clearExamOverride(args: {
  token: string;
  quizId: string;
  attemptId: number;
}): Promise<void> {
  requireAdmin(args.token);

  const exam = getExamDefinition(args.quizId);
  if (!exam) throw new Error(`Unknown exam: ${args.quizId}`);

  const attempt = await findAttempt(args.attemptId);
  if (!attempt || attempt.quizId !== args.quizId) {
    throw new Error("Attempt not found");
  }

  const weights = await loadWeightsMap(args.quizId);
  if (weights.size === 0 || !attempt.responses) {
    // No weights set yet — leave adjusted columns NULL so gradebook falls
    // back to the raw score.
    await applyAttemptOverride(args.attemptId, {
      adjustedScore: null,
      adjustedTotal: null,
      note: null,
    });
  } else {
    const { adjustedScore, adjustedTotal } = computeAdjustedForAttempt(
      exam,
      attempt.responses,
      weights
    );
    await applyAttemptOverride(args.attemptId, {
      adjustedScore,
      adjustedTotal,
      note: null,
    });
  }

  revalidatePath("/teacher");
  revalidatePath(`/teacher/exam/${args.quizId}`);
  revalidatePath(
    `/teacher/exam/${args.quizId}/attempt/${args.attemptId}`
  );
}

// Cheap re-export so server components on /teacher/exam can grab the same data.
export async function loadExamData(args: {
  token: string;
  quizId: string;
}) {
  requireAdmin(args.token);
  const exam = getExamDefinition(args.quizId);
  if (!exam) throw new Error(`Unknown exam: ${args.quizId}`);
  const [weights, attempts] = await Promise.all([
    loadWeightsMap(args.quizId),
    loadAttempts(args.quizId),
  ]);
  return { exam, weights, attempts };
}
