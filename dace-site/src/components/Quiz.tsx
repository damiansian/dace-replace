"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  imageSrc?: string;
  imageAlt?: string;
  options: QuizOption[];
  correctAnswer: string;
  feedback: Record<string, string>;
}

export interface QuizData {
  id: string;
  title: string;
  lessonPath: string;
  questions: QuizQuestion[];
}

function QuizStimulusImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <p className="mb-4 rounded-md border border-border bg-white p-3 text-sm text-text-secondary">
        Image description: {alt}
      </p>
    );
  }
  return (
    <figure className="mb-5">
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className="block max-w-full h-auto rounded-md border border-border bg-white"
      />
    </figure>
  );
}

function seededShuffle<T>(array: T[], seed: string): T[] {
  const shuffled = [...array];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  for (let i = shuffled.length - 1; i > 0; i--) {
    hash = (hash * 1103515245 + 12345) & 0x7fffffff;
    const j = hash % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Quiz({
  data,
  accessToken,
  studentDisplayName,
}: {
  data: QuizData;
  accessToken?: string;
  studentDisplayName?: string;
}) {
  const [name, setName] = useState(studentDisplayName ?? "");
  const [started, setStarted] = useState(Boolean(studentDisplayName));
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptNumber, setAttemptNumber] = useState(1);
  const [bestScore, setBestScore] = useState<number | null>(null);

  const resultsRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(`dace-quiz-${data.id}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (typeof parsed.bestScore === "number") {
          setBestScore(parsed.bestScore);
        } else if (typeof parsed.score === "number") {
          setBestScore(parsed.score);
        }
      }
    } catch {
      // localStorage unavailable
    }
  }, [data.id]);

  const shuffledQuestions = useMemo(() => {
    if (!started) return data.questions;
    return data.questions.map((q) => ({
      ...q,
      options: seededShuffle(q.options, name + q.id + attemptNumber),
    }));
  }, [started, data.questions, name, attemptNumber]);

  const handleStart = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (name.trim()) {
        setStarted(true);
      }
    },
    [name]
  );

  const handleOptionChange = useCallback(
    (questionId: string, optionId: string) => {
      if (submitted) return;
      setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    },
    [submitted]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (submitted) return;

      let correct = 0;
      for (const q of data.questions) {
        if (answers[q.id] === q.correctAnswer) correct++;
      }

      setScore(correct);
      setSubmitted(true);

      const newBest =
        bestScore !== null ? Math.max(bestScore, correct) : correct;
      setBestScore(newBest);

      const timestamp = new Date().toISOString();
      try {
        localStorage.setItem(
          `dace-quiz-${data.id}`,
          JSON.stringify({
            name: name.trim(),
            score: correct,
            bestScore: newBest,
            total: data.questions.length,
            timestamp,
          })
        );
      } catch {
        // localStorage unavailable
      }

      fetch("/api/quiz-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          quizId: data.id,
          score: correct,
          total: data.questions.length,
          timestamp,
          ...(accessToken ? { accessToken } : {}),
        }),
      }).catch(() => {
        // fire-and-forget
      });
    },
    [submitted, answers, data, name, bestScore, accessToken]
  );

  const handleRetake = useCallback(() => {
    setAttemptNumber((n) => n + 1);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  }, []);

  useEffect(() => {
    if (submitted && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      resultsRef.current.focus();
    }
  }, [submitted]);

  if (!started) {
    return (
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-foreground">{data.title}</h2>
        <p className="mt-2 text-base text-text-secondary">
          {data.questions.length} questions
        </p>
        <form onSubmit={handleStart} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="quiz-name"
              className="block text-base font-medium text-foreground"
            >
              Enter your name to begin
            </label>
            <input
              ref={nameInputRef}
              id="quiz-name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-text-secondary"
              placeholder="Your full name"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Start Quiz
          </button>
        </form>
      </div>
    );
  }

  const allAnswered = data.questions.every((q) => answers[q.id]);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground">{data.title}</h2>
        <p className="mt-1 text-base text-text-secondary">
          Taking as: <strong>{name}</strong>
        </p>
      </div>

      {submitted && (
        <div
          ref={resultsRef}
          tabIndex={-1}
          className="mb-8 rounded-lg border-2 border-primary bg-primary/5 p-6"
          aria-live="polite"
        >
          <h3 className="text-xl font-bold text-foreground">
            Your Score: {score} / {data.questions.length}
          </h3>
          {bestScore !== null && bestScore !== score && (
            <p className="mt-1 text-sm font-medium text-text-secondary">
              Best score: {bestScore}/{data.questions.length}
            </p>
          )}
          <p className="mt-2 text-base text-text-secondary">
            {score === data.questions.length
              ? "Perfect score! Great work."
              : score >= data.questions.length * 0.8
                ? "Well done! Review the feedback below for any you missed."
                : "Review the feedback below to strengthen your understanding."}
          </p>
          <p className="mt-1 text-xs text-text-secondary">
            Attempt {attemptNumber}
          </p>
          <button
            type="button"
            onClick={handleRetake}
            className="mt-4 rounded-lg border-2 border-primary bg-white px-6 py-2 text-base font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} aria-label={`${data.title} quiz`}>
        <ol className="space-y-10 list-none p-0">
          {shuffledQuestions.map((q, qIndex) => {
            const selectedAnswer = answers[q.id];
            const isCorrect = selectedAnswer === q.correctAnswer;

            return (
              <li key={q.id}>
                <fieldset
                  className={`rounded-lg border p-6 ${
                    submitted
                      ? isCorrect
                        ? "border-accent-green bg-accent-green/5"
                        : "border-accent-red bg-accent-red/5"
                      : "border-border bg-white"
                  }`}
                  disabled={submitted}
                >
                  <legend className="sr-only">
                    Question {qIndex + 1} of {data.questions.length}
                  </legend>
                  <p className="text-base font-semibold text-foreground mb-1">
                    Question {qIndex + 1} of {data.questions.length}
                  </p>
                  {q.imageSrc && q.imageAlt && (
                    <QuizStimulusImage
                      key={`${q.id}-${attemptNumber}`}
                      src={q.imageSrc}
                      alt={q.imageAlt}
                    />
                  )}
                  <p className="text-base text-foreground whitespace-pre-line mb-5">
                    {q.question}
                  </p>

                  <div className="space-y-3" role="radiogroup" aria-label={`Question ${qIndex + 1}`}>
                    {q.options.map((opt) => {
                      const isSelected = selectedAnswer === opt.id;
                      const isThisCorrect = opt.id === q.correctAnswer;
                      const inputId = `${q.id}-${opt.id}`;

                      return (
                        <div key={opt.id} className="flex items-start gap-3">
                          <input
                            type="radio"
                            id={inputId}
                            name={q.id}
                            value={opt.id}
                            checked={isSelected}
                            onChange={() =>
                              handleOptionChange(q.id, opt.id)
                            }
                            disabled={submitted}
                            className="mt-1 h-5 w-5 shrink-0 accent-primary"
                            aria-describedby={
                              submitted && isSelected
                                ? `${q.id}-feedback`
                                : undefined
                            }
                          />
                          <label
                            htmlFor={inputId}
                            className={`text-base leading-relaxed ${
                              submitted && isThisCorrect
                                ? "font-semibold text-accent-green"
                                : submitted && isSelected && !isThisCorrect
                                  ? "text-accent-red line-through"
                                  : "text-foreground"
                            }`}
                          >
                            {opt.text}
                            {submitted && isThisCorrect && (
                              <span className="ml-2 text-sm font-medium text-accent-green">
                                (Correct answer)
                              </span>
                            )}
                          </label>
                        </div>
                      );
                    })}
                  </div>

                  {submitted && selectedAnswer && (
                    <div
                      id={`${q.id}-feedback`}
                      className={`mt-5 rounded-md p-4 text-sm leading-relaxed ${
                        isCorrect
                          ? "bg-accent-green/10 text-foreground"
                          : "bg-accent-red/10 text-foreground"
                      }`}
                      role="note"
                    >
                      <p className="font-semibold mb-1">
                        {isCorrect ? "Correct" : "Incorrect"}
                      </p>
                      <p>{q.feedback[selectedAnswer]}</p>
                    </div>
                  )}
                </fieldset>
              </li>
            );
          })}
        </ol>

        {!submitted && (
          <div className="mt-8">
            <button
              type="submit"
              disabled={!allAnswered}
              className="rounded-lg bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-disabled={!allAnswered}
            >
              Submit Quiz
            </button>
            {!allAnswered && (
              <p className="mt-3 text-sm text-text-secondary">
                Answer all {data.questions.length} questions to submit.
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
