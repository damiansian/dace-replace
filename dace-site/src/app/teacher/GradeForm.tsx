"use client";

import { useActionState } from "react";
import { gradeSubmission } from "@/app/actions/grading";

interface GradeFormProps {
  submissionId: number;
  defaultTotal: number;
}

type FormState = { error?: string; saved?: boolean };

export function GradeForm({ submissionId, defaultTotal }: GradeFormProps) {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    async (_prev, formData) => {
      const score = Number(formData.get("score"));
      const total = Number(formData.get("total"));
      try {
        await gradeSubmission(submissionId, score, total);
        return { saved: true };
      } catch (e) {
        return { error: e instanceof Error ? e.message : "Failed to save" };
      }
    },
    {}
  );

  if (state.saved) {
    return (
      <span className="text-sm font-medium text-accent-green">Saved</span>
    );
  }

  return (
    <form action={formAction} className="flex items-center gap-1">
      <label htmlFor={`score-${submissionId}`} className="sr-only">
        Points earned
      </label>
      <input
        id={`score-${submissionId}`}
        name="score"
        type="number"
        min={0}
        max={defaultTotal || undefined}
        required
        className="w-14 rounded border border-border px-2 py-1 text-sm text-foreground"
        placeholder="0"
        aria-label="Points earned"
      />
      <span className="text-text-secondary">/</span>
      <label htmlFor={`total-${submissionId}`} className="sr-only">
        Points possible
      </label>
      <input
        id={`total-${submissionId}`}
        name="total"
        type="number"
        min={1}
        required
        defaultValue={defaultTotal || ""}
        className="w-14 rounded border border-border px-2 py-1 text-sm text-foreground"
        aria-label="Points possible"
      />
      <button
        type="submit"
        disabled={isPending}
        className="ml-1 rounded bg-primary px-2 py-1 text-xs font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isPending ? "..." : "Grade"}
      </button>
      {state.error && (
        <span className="text-xs text-accent-red ml-1" role="alert">
          {state.error}
        </span>
      )}
    </form>
  );
}
