import { notFound } from "next/navigation";
import Link from "next/link";
import {
  computeAdjustedForAttempt,
  findAttempt,
  getExamDefinition,
  loadWeightsMap,
  parseWeight,
  totalWeightFromMap,
} from "@/lib/exam-scoring";
import { OverrideForm } from "../../../OverrideForm";
import quizDataB1 from "@/data/quizzes/b1-final-assessment.json";

export const metadata = {
  title: "Exam attempt | DACE Cohort 2",
  robots: "noindex, nofollow",
};

interface PageProps {
  params: Promise<{ quizId: string; attemptId: string }>;
  searchParams: Promise<{ token?: string }>;
}

interface QuestionDisplay {
  id: string;
  question: string;
  correctAnswer: string;
  options: { id: string; text: string }[];
}

function loadQuestionDisplay(quizId: string): QuestionDisplay[] {
  if (quizId === quizDataB1.id) {
    return quizDataB1.questions.map((q) => ({
      id: q.id,
      question: q.question,
      correctAnswer: q.correctAnswer,
      options: q.options,
    }));
  }
  return [];
}

export default async function ExamAttemptPage({
  params,
  searchParams,
}: PageProps) {
  const [{ quizId, attemptId }, { token }] = await Promise.all([
    params,
    searchParams,
  ]);

  if (!process.env.ADMIN_SECRET || token !== process.env.ADMIN_SECRET) {
    notFound();
  }
  const exam = getExamDefinition(quizId);
  if (!exam) notFound();
  const idNum = Number.parseInt(attemptId, 10);
  if (Number.isNaN(idNum)) notFound();

  const tokenEnc = encodeURIComponent(token);

  const [attempt, weights] = await Promise.all([
    findAttempt(idNum),
    loadWeightsMap(quizId),
  ]);
  if (!attempt || attempt.quizId !== quizId) notFound();

  const questions = loadQuestionDisplay(quizId);
  const { adjustedScore, adjustedTotal } = computeAdjustedForAttempt(
    exam,
    attempt.responses,
    weights
  );
  const fallbackTotal = totalWeightFromMap(exam, weights);
  const totalForDisplay = adjustedTotal || fallbackTotal;

  const storedAdjusted =
    attempt.adjustedScore !== null
      ? parseWeight(attempt.adjustedScore)
      : null;
  const storedAdjustedTotal =
    attempt.adjustedTotal !== null
      ? parseWeight(attempt.adjustedTotal)
      : null;

  return (
    <main
      id="main-content"
      className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-8"
    >
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={`/teacher/exam/${quizId}?token=${tokenEnc}`}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to {exam.title}
        </Link>
        <Link
          href={`/teacher?token=${tokenEnc}`}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          Teacher portal
        </Link>
      </div>

      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {attempt.name} &mdash; attempt #{attempt.id}
        </h1>
        <p className="text-sm text-text-secondary">
          Submitted{" "}
          {attempt.submittedAt.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>
      </header>

      <section
        aria-labelledby="score-summary-heading"
        className="rounded-lg border border-border bg-surface p-4 space-y-1"
      >
        <h2
          id="score-summary-heading"
          className="text-lg font-semibold text-foreground"
        >
          Score summary
        </h2>
        <p className="text-sm text-foreground">
          Raw: <strong className="tabular-nums">{attempt.score}/{attempt.total}</strong>
        </p>
        <p className="text-sm text-foreground">
          Adjusted (from current weights):{" "}
          <strong className="tabular-nums">
            {adjustedScore.toFixed(2)}/{totalForDisplay.toFixed(2)}
          </strong>
        </p>
        {storedAdjusted !== null && (
          <p className="text-sm text-foreground">
            Stored adjusted (in gradebook):{" "}
            <strong className="tabular-nums">
              {storedAdjusted.toFixed(2)}/
              {(storedAdjustedTotal ?? totalForDisplay).toFixed(2)}
            </strong>
            {attempt.adjustmentNote ? " (manual override)" : ""}
          </p>
        )}
      </section>

      <OverrideForm
        token={token}
        quizId={quizId}
        attemptId={attempt.id}
        initialAdjustedScore={
          attempt.adjustmentNote ? attempt.adjustedScore : null
        }
        initialAdjustmentNote={attempt.adjustmentNote}
        computedAdjustedScore={adjustedScore}
        adjustedTotal={totalForDisplay}
      />

      <section aria-labelledby="responses-heading" className="space-y-4">
        <h2
          id="responses-heading"
          className="text-2xl font-semibold text-foreground"
        >
          Responses
        </h2>
        {!attempt.responses ? (
          <p className="text-sm text-text-secondary">
            No per-question responses recorded (legacy attempt).
          </p>
        ) : (
          <ol className="space-y-4 list-none p-0">
            {questions.map((q, i) => {
              const chosen = attempt.responses?.[q.id] ?? null;
              const isCorrect = chosen === q.correctAnswer;
              const weight = weights.get(q.id) ?? 1;
              return (
                <li
                  key={q.id}
                  className={`rounded-lg border p-4 ${
                    chosen
                      ? isCorrect
                        ? "border-accent-green bg-accent-green/5"
                        : "border-accent-red bg-accent-red/5"
                      : "border-border bg-white"
                  }`}
                >
                  <p className="text-sm font-semibold text-foreground">
                    Q{i + 1} ({q.id.toUpperCase()}) · weight{" "}
                    <span className="tabular-nums">{weight.toFixed(2)}</span>
                  </p>
                  <p className="mt-1 text-sm text-foreground">{q.question}</p>
                  <ul className="mt-2 space-y-1 list-none p-0">
                    {q.options.map((opt) => {
                      const isChosen = chosen === opt.id;
                      const isKey = q.correctAnswer === opt.id;
                      return (
                        <li
                          key={opt.id}
                          className={`text-sm leading-relaxed ${
                            isKey
                              ? "font-semibold text-accent-green"
                              : isChosen
                                ? "text-accent-red line-through"
                                : "text-foreground"
                          }`}
                        >
                          {opt.id.toUpperCase()}. {opt.text}
                          {isChosen && (
                            <span className="ml-2 text-xs font-medium">
                              (chosen)
                            </span>
                          )}
                          {isKey && (
                            <span className="ml-2 text-xs font-medium">
                              (key)
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  {!chosen && (
                    <p className="mt-2 text-xs font-medium text-text-secondary">
                      Unanswered
                    </p>
                  )}
                </li>
              );
            })}
          </ol>
        )}
      </section>
    </main>
  );
}
