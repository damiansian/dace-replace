import { notFound } from "next/navigation";
import Link from "next/link";
import {
  computePerQuestionStats,
  effectiveScore,
  getExamDefinition,
  loadAttempts,
  loadWeightsMap,
  totalWeightFromMap,
} from "@/lib/exam-scoring";
import { WeightsEditor } from "../WeightsEditor";
import quizDataB1 from "@/data/quizzes/b1-final-assessment.json";

export const metadata = {
  title: "Exam item analysis | DACE Cohort 2",
  robots: "noindex, nofollow",
};

interface PageProps {
  params: Promise<{ quizId: string }>;
  searchParams: Promise<{ token?: string }>;
}

function quizQuestionStem(quizId: string, questionId: string): string {
  if (quizId === quizDataB1.id) {
    const q = quizDataB1.questions.find((x) => x.id === questionId);
    if (q) return q.question;
  }
  return "";
}

export default async function ExamItemAnalysisPage({
  params,
  searchParams,
}: PageProps) {
  const [{ quizId }, { token }] = await Promise.all([params, searchParams]);

  if (!process.env.ADMIN_SECRET || token !== process.env.ADMIN_SECRET) {
    notFound();
  }
  const exam = getExamDefinition(quizId);
  if (!exam) notFound();

  const tokenEnc = encodeURIComponent(token);

  const [weights, attempts] = await Promise.all([
    loadWeightsMap(quizId),
    loadAttempts(quizId),
  ]);

  const stats = computePerQuestionStats(exam, attempts, weights);
  const adjustedTotal = totalWeightFromMap(exam, weights);

  // Sort attempts by submission date desc.
  const sortedAttempts = [...attempts].sort(
    (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
  );

  const weightRows = stats.map((s) => ({
    questionId: s.questionId,
    weight: s.weight,
    percentCorrect: s.percentCorrect,
    attempts: s.attempts,
    correct: s.correct,
  }));

  return (
    <main
      id="main-content"
      className="mx-auto max-w-5xl px-4 py-10 sm:px-6 space-y-8"
    >
      <div>
        <Link
          href={`/teacher?token=${tokenEnc}`}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to teacher portal
        </Link>
      </div>

      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {exam.title} — item analysis
        </h1>
        <p className="text-sm text-text-secondary">
          {attempts.length} attempt{attempts.length === 1 ? "" : "s"} recorded ·{" "}
          {exam.questions.length} questions · current adjusted total{" "}
          <strong className="tabular-nums">{adjustedTotal.toFixed(2)}</strong>{" "}
          points
        </p>
      </header>

      <section aria-labelledby="weights-heading" className="space-y-4">
        <h2
          id="weights-heading"
          className="text-2xl font-semibold text-foreground"
        >
          Question weights
        </h2>
        <WeightsEditor token={token} quizId={quizId} rows={weightRows} />
      </section>

      <section aria-labelledby="distractors-heading" className="space-y-4">
        <h2
          id="distractors-heading"
          className="text-2xl font-semibold text-foreground"
        >
          Distractor analysis
        </h2>
        <p className="text-sm text-text-secondary">
          Counts show how many students picked each option. Use to spot weak
          distractors or ambiguous stems.
        </p>
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
                  Stem
                </th>
                <th
                  scope="col"
                  className="border border-border px-3 py-2 text-center font-semibold text-foreground"
                >
                  A
                </th>
                <th
                  scope="col"
                  className="border border-border px-3 py-2 text-center font-semibold text-foreground"
                >
                  B
                </th>
                <th
                  scope="col"
                  className="border border-border px-3 py-2 text-center font-semibold text-foreground"
                >
                  C
                </th>
                <th
                  scope="col"
                  className="border border-border px-3 py-2 text-center font-semibold text-foreground"
                >
                  D
                </th>
                <th
                  scope="col"
                  className="border border-border px-3 py-2 text-center font-semibold text-foreground"
                >
                  Key
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map((s) => {
                const examQ = exam.questions.find(
                  (q) => q.id === s.questionId
                );
                return (
                  <tr key={s.questionId} className="bg-white">
                    <th
                      scope="row"
                      className="border border-border px-3 py-2 text-left font-medium text-foreground"
                    >
                      {s.questionId.toUpperCase()}
                    </th>
                    <td className="border border-border px-3 py-2 text-text-secondary">
                      <span className="line-clamp-2 block">
                        {quizQuestionStem(quizId, s.questionId)}
                      </span>
                    </td>
                    {["a", "b", "c", "d"].map((letter) => {
                      const count = s.optionCounts[letter] ?? 0;
                      const isCorrect = examQ?.correctAnswer === letter;
                      return (
                        <td
                          key={letter}
                          className={`border border-border px-3 py-2 text-center tabular-nums ${
                            isCorrect ? "bg-accent-green/10 font-semibold" : ""
                          }`}
                        >
                          {count}
                        </td>
                      );
                    })}
                    <td className="border border-border px-3 py-2 text-center font-semibold text-accent-green">
                      {examQ?.correctAnswer.toUpperCase() ?? "?"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="attempts-heading" className="space-y-4">
        <h2
          id="attempts-heading"
          className="text-2xl font-semibold text-foreground"
        >
          Attempts
        </h2>
        {sortedAttempts.length === 0 ? (
          <p className="text-sm text-text-secondary">
            No attempts yet.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="min-w-full border-collapse text-sm">
              <thead className="bg-surface">
                <tr>
                  <th
                    scope="col"
                    className="border border-border px-3 py-2 text-left font-semibold text-foreground"
                  >
                    Student
                  </th>
                  <th
                    scope="col"
                    className="border border-border px-3 py-2 text-left font-semibold text-foreground"
                  >
                    Submitted
                  </th>
                  <th
                    scope="col"
                    className="border border-border px-3 py-2 text-left font-semibold text-foreground"
                  >
                    Raw
                  </th>
                  <th
                    scope="col"
                    className="border border-border px-3 py-2 text-left font-semibold text-foreground"
                  >
                    Adjusted
                  </th>
                  <th
                    scope="col"
                    className="border border-border px-3 py-2 text-left font-semibold text-foreground"
                  >
                    Override
                  </th>
                  <th
                    scope="col"
                    className="border border-border px-3 py-2 text-left font-semibold text-foreground"
                  >
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedAttempts.map((a) => {
                  const eff = effectiveScore({
                    score: a.score,
                    total: a.total,
                    adjustedScore: a.adjustedScore,
                    adjustedTotal: a.adjustedTotal,
                  });
                  return (
                    <tr key={a.id} className="bg-white">
                      <th
                        scope="row"
                        className="border border-border px-3 py-2 text-left font-medium text-foreground"
                      >
                        {a.name}
                      </th>
                      <td className="border border-border px-3 py-2 text-text-secondary">
                        {a.submittedAt.toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="border border-border px-3 py-2 tabular-nums">
                        {a.score}/{a.total}
                      </td>
                      <td className="border border-border px-3 py-2 tabular-nums">
                        {a.adjustedScore !== null && a.adjustedTotal !== null
                          ? `${eff.numerator.toFixed(2)}/${eff.denominator.toFixed(2)}`
                          : "—"}
                      </td>
                      <td className="border border-border px-3 py-2 text-text-secondary">
                        {a.adjustmentNote ? (
                          <span title={a.adjustmentNote}>Yes</span>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="border border-border px-3 py-2">
                        <Link
                          href={`/teacher/exam/${quizId}/attempt/${a.id}?token=${tokenEnc}`}
                          className="text-primary-text underline"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
