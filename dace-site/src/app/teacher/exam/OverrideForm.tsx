"use client";

import { useState, useTransition } from "react";
import {
  applyExamOverride,
  clearExamOverride,
} from "@/app/actions/exam-scoring";

interface OverrideFormProps {
  token: string;
  quizId: string;
  attemptId: number;
  initialAdjustedScore: string | null;
  initialAdjustmentNote: string | null;
  computedAdjustedScore: number;
  adjustedTotal: number;
}

export function OverrideForm({
  token,
  quizId,
  attemptId,
  initialAdjustedScore,
  initialAdjustmentNote,
  computedAdjustedScore,
  adjustedTotal,
}: OverrideFormProps) {
  const [score, setScore] = useState<string>(initialAdjustedScore ?? "");
  const [note, setNote] = useState<string>(initialAdjustmentNote ?? "");
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<
    { kind: "idle" } | { kind: "saved" } | { kind: "error"; message: string }
  >({ kind: "idle" });

  const hasOverride =
    initialAdjustmentNote !== null && initialAdjustmentNote.length > 0;

  function save() {
    const trimmed = score.trim();
    const adjusted = trimmed === "" ? null : Number.parseFloat(trimmed);
    if (adjusted !== null && (!Number.isFinite(adjusted) || adjusted < 0)) {
      setStatus({ kind: "error", message: "Score must be zero or greater" });
      return;
    }
    const trimmedNote = note.trim();
    startTransition(async () => {
      try {
        await applyExamOverride({
          token,
          quizId,
          attemptId,
          adjustedScore: adjusted,
          note: trimmedNote.length > 0 ? trimmedNote : null,
        });
        setStatus({ kind: "saved" });
      } catch (err) {
        setStatus({
          kind: "error",
          message: err instanceof Error ? err.message : "Failed to save",
        });
      }
    });
  }

  function clear() {
    startTransition(async () => {
      try {
        await clearExamOverride({ token, quizId, attemptId });
        setScore("");
        setNote("");
        setStatus({ kind: "saved" });
      } catch (err) {
        setStatus({
          kind: "error",
          message: err instanceof Error ? err.message : "Failed to clear",
        });
      }
    });
  }

  return (
    <div className="space-y-4 rounded-lg border border-border bg-white p-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          Per-attempt override
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          Use to grant an exception for this one student. Computed adjusted
          score from current weights:{" "}
          <strong className="tabular-nums">
            {computedAdjustedScore.toFixed(2)} / {adjustedTotal.toFixed(2)}
          </strong>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[auto_1fr]">
        <div>
          <label
            htmlFor={`override-score-${attemptId}`}
            className="block text-sm font-medium text-foreground"
          >
            Override score
          </label>
          <input
            id={`override-score-${attemptId}`}
            type="number"
            inputMode="decimal"
            min={0}
            step="0.05"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="leave blank to use computed"
            className="mt-1 w-40 rounded border border-border px-2 py-1 text-sm tabular-nums"
          />
        </div>
        <div>
          <label
            htmlFor={`override-note-${attemptId}`}
            className="block text-sm font-medium text-foreground"
          >
            Override note <span className="text-text-secondary">(required to apply override)</span>
          </label>
          <textarea
            id={`override-note-${attemptId}`}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            className="mt-1 block w-full rounded border border-border px-2 py-1 text-sm"
            placeholder="e.g. Approved make-up after technical issue"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={save}
          disabled={pending || note.trim().length === 0}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "Saving…" : "Save override"}
        </button>
        {hasOverride && (
          <button
            type="button"
            onClick={clear}
            disabled={pending}
            className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground hover:bg-surface transition-colors disabled:opacity-50"
          >
            Clear override
          </button>
        )}
        {status.kind === "saved" && (
          <span className="text-sm text-accent-green" role="status">
            Saved
          </span>
        )}
        {status.kind === "error" && (
          <span className="text-sm text-accent-red" role="alert">
            {status.message}
          </span>
        )}
      </div>
    </div>
  );
}
