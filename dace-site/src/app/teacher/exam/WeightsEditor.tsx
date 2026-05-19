"use client";

import { useState, useTransition } from "react";
import { updateExamWeights } from "@/app/actions/exam-scoring";

export interface QuestionWeightRow {
  questionId: string;
  weight: number;
  percentCorrect: number;
  attempts: number;
  correct: number;
}

interface WeightsEditorProps {
  token: string;
  quizId: string;
  rows: QuestionWeightRow[];
}

const WEIGHT_OPTIONS: { label: string; value: string }[] = [
  { label: "1.0 (full credit)", value: "1.00" },
  { label: "0.5 (half credit)", value: "0.50" },
  { label: "0 (drop from scoring)", value: "0.00" },
];

export function WeightsEditor({ token, quizId, rows }: WeightsEditorProps) {
  const initial = Object.fromEntries(
    rows.map((r) => [r.questionId, r.weight.toFixed(2)])
  );
  const [weights, setWeights] = useState<Record<string, string>>(initial);
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "saved"; updated: number; skipped: number }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const dirty = rows.some(
    (r) => (weights[r.questionId] ?? "1.00") !== r.weight.toFixed(2)
  );

  function setWeight(qid: string, value: string) {
    setWeights((prev) => ({ ...prev, [qid]: value }));
  }

  function save() {
    const payload: Record<string, number> = {};
    for (const r of rows) {
      const raw = weights[r.questionId] ?? "1.00";
      const n = Number.parseFloat(raw);
      if (Number.isFinite(n) && n >= 0) {
        payload[r.questionId] = n;
      }
    }
    startTransition(async () => {
      try {
        const result = await updateExamWeights({
          token,
          quizId,
          weights: payload,
        });
        setStatus({ kind: "saved", ...result });
      } catch (err) {
        setStatus({
          kind: "error",
          message: err instanceof Error ? err.message : "Failed to save",
        });
      }
    });
  }

  function reset() {
    setWeights(initial);
    setStatus({ kind: "idle" });
  }

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-surface">
            <tr>
              <th
                scope="col"
                className="border border-border px-3 py-2 text-left font-semibold text-foreground"
              >
                Question
              </th>
              <th
                scope="col"
                className="border border-border px-3 py-2 text-left font-semibold text-foreground"
              >
                % correct
              </th>
              <th
                scope="col"
                className="border border-border px-3 py-2 text-left font-semibold text-foreground"
              >
                Attempts
              </th>
              <th
                scope="col"
                className="border border-border px-3 py-2 text-left font-semibold text-foreground"
              >
                Point weight
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const inputId = `weight-${r.questionId}`;
              const current = weights[r.questionId] ?? "1.00";
              const matchesPreset = WEIGHT_OPTIONS.some(
                (o) => o.value === current
              );
              return (
                <tr key={r.questionId} className="bg-white">
                  <th
                    scope="row"
                    className="border border-border px-3 py-2 text-left font-medium text-foreground"
                  >
                    {r.questionId.toUpperCase()}
                  </th>
                  <td className="border border-border px-3 py-2 tabular-nums">
                    {r.attempts > 0 ? `${r.percentCorrect.toFixed(0)}%` : "—"}
                  </td>
                  <td className="border border-border px-3 py-2 tabular-nums">
                    {r.attempts > 0
                      ? `${r.correct}/${r.attempts}`
                      : "—"}
                  </td>
                  <td className="border border-border px-3 py-2">
                    <label htmlFor={inputId} className="sr-only">
                      Point weight for {r.questionId.toUpperCase()}
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      <select
                        id={inputId}
                        value={matchesPreset ? current : "custom"}
                        onChange={(e) => {
                          const v = e.target.value;
                          if (v === "custom") {
                            setWeight(r.questionId, current);
                          } else {
                            setWeight(r.questionId, v);
                          }
                        }}
                        className="rounded border border-border bg-white px-2 py-1 text-sm"
                      >
                        {WEIGHT_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                        <option value="custom">Custom…</option>
                      </select>
                      <input
                        type="number"
                        inputMode="decimal"
                        min={0}
                        max={100}
                        step="0.05"
                        value={current}
                        onChange={(e) =>
                          setWeight(r.questionId, e.target.value)
                        }
                        className="w-20 rounded border border-border px-2 py-1 text-sm tabular-nums"
                        aria-label={`Custom point weight for ${r.questionId.toUpperCase()}`}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={save}
          disabled={!dirty || pending}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "Saving…" : "Save weights and recompute"}
        </button>
        <button
          type="button"
          onClick={reset}
          disabled={!dirty || pending}
          className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground hover:bg-surface transition-colors disabled:opacity-50"
        >
          Revert changes
        </button>
        {status.kind === "saved" && (
          <span className="text-sm text-accent-green" role="status">
            Saved. Recomputed {status.updated} attempt
            {status.updated === 1 ? "" : "s"}
            {status.skipped > 0
              ? `; ${status.skipped} skipped (manual override or missing responses)`
              : ""}
            .
          </span>
        )}
        {status.kind === "error" && (
          <span className="text-sm text-accent-red" role="alert">
            {status.message}
          </span>
        )}
      </div>

      <p className="text-xs text-text-secondary">
        Default weight is 1.0 per question. Lower a weight after item analysis
        (e.g. point-biserial discrimination) to reduce or drop a poorly
        performing question from scoring. Attempts with a manual override are
        not recomputed.
      </p>
    </div>
  );
}
