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
  /** Optional link to the source stimulus (e.g. a Figma frame) for this question. */
  figmaUrl?: string;
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

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export interface QuizProps {
  data: QuizData;
  accessToken?: string;
  studentDisplayName?: string;
  /** Enables exam behaviors: question shuffle, timer, single attempt, neutral results copy. */
  examMode?: boolean;
  /** Shuffle question order in addition to option order. Defaults to true in exam mode. */
  shuffleQuestions?: boolean;
  /** Optional countdown in minutes. When elapsed, the exam auto-submits with current answers. */
  timeLimitMinutes?: number;
  /** Max number of attempts. Hides retake after this many attempts. */
  maxAttempts?: number;
}

export default function Quiz({
  data,
  accessToken,
  studentDisplayName,
  examMode = false,
  shuffleQuestions,
  timeLimitMinutes,
  maxAttempts,
}: QuizProps) {
  const shouldShuffleQuestions = shuffleQuestions ?? examMode;

  const [name, setName] = useState(studentDisplayName ?? "");
  const [started, setStarted] = useState(Boolean(studentDisplayName));
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptNumber, setAttemptNumber] = useState(1);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState<number | null>(
    typeof timeLimitMinutes === "number" ? timeLimitMinutes * 60 : null
  );
  const [autoSubmitted, setAutoSubmitted] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const answersRef = useRef(answers);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    if (examMode) return;
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
  }, [data.id, examMode]);

  const renderedQuestions = useMemo(() => {
    if (!started) return data.questions;
    const seedBase = name + data.id + attemptNumber;
    const ordered = shouldShuffleQuestions
      ? seededShuffle(data.questions, `${seedBase}-questions`)
      : data.questions;
    return ordered.map((q) => ({
      ...q,
      options: seededShuffle(q.options, name + q.id + attemptNumber),
    }));
  }, [
    started,
    data.questions,
    data.id,
    name,
    attemptNumber,
    shouldShuffleQuestions,
  ]);

  const handleStart = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (name.trim()) {
        setStarted(true);
        setStartedAt(Date.now());
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

  const submitAttempt = useCallback(
    (opts?: { auto?: boolean }) => {
      if (submitted) return;
      const currentAnswers = answersRef.current;

      let correct = 0;
      for (const q of data.questions) {
        if (currentAnswers[q.id] === q.correctAnswer) correct++;
      }

      setScore(correct);
      setSubmitted(true);
      if (opts?.auto) setAutoSubmitted(true);

      const newBest =
        bestScore !== null ? Math.max(bestScore, correct) : correct;
      setBestScore(newBest);

      const timestamp = new Date().toISOString();
      if (!examMode) {
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
          responses: currentAnswers,
          ...(accessToken ? { accessToken } : {}),
        }),
      }).catch(() => {
        // fire-and-forget
      });
    },
    [submitted, data, name, bestScore, accessToken, examMode]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      submitAttempt();
    },
    [submitAttempt]
  );

  const handleRetake = useCallback(() => {
    setAttemptNumber((n) => n + 1);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setAutoSubmitted(false);
    if (typeof timeLimitMinutes === "number") {
      setSecondsLeft(timeLimitMinutes * 60);
    }
    setStartedAt(Date.now());
  }, [timeLimitMinutes]);

  useEffect(() => {
    if (submitted && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      resultsRef.current.focus();
    }
  }, [submitted]);

  // Exam countdown timer.
  useEffect(() => {
    if (!started || submitted || startedAt === null) return;
    if (typeof timeLimitMinutes !== "number") return;

    const total = timeLimitMinutes * 60;
    const tick = () => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      const remaining = Math.max(0, total - elapsed);
      setSecondsLeft(remaining);
      if (remaining === 0) {
        submitAttempt({ auto: true });
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [started, submitted, startedAt, timeLimitMinutes, submitAttempt]);

  if (!started) {
    return (
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-foreground">{data.title}</h2>
        <p className="mt-2 text-base text-text-secondary">
          {data.questions.length} questions
          {typeof timeLimitMinutes === "number"
            ? ` · ${timeLimitMinutes}-minute time limit`
            : ""}
        </p>
        {examMode && (
          <p className="mt-2 text-sm text-text-secondary">
            Open book. You may reference the Adobe Design Accessibility Checklist,
            WCAG documentation, and course materials.
            {typeof maxAttempts === "number" && maxAttempts === 1
              ? " You have one attempt."
              : ""}
          </p>
        )}
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
            {examMode ? "Start Exam" : "Start Quiz"}
          </button>
        </form>
      </div>
    );
  }

  const answeredCount = data.questions.reduce(
    (n, q) => n + (answers[q.id] ? 1 : 0),
    0
  );
  const allAnswered = answeredCount === data.questions.length;
  const canRetake =
    !examMode &&
    (typeof maxAttempts !== "number" || attemptNumber < maxAttempts);
  const timerLow =
    typeof secondsLeft === "number" && secondsLeft <= 5 * 60 && !submitted;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">{data.title}</h2>
          <p className="mt-1 text-base text-text-secondary">
            Taking as: <strong>{name}</strong>
          </p>
        </div>
        {typeof secondsLeft === "number" && (
          <div
            className={`rounded-lg border px-4 py-2 text-base font-semibold tabular-nums ${
              submitted
                ? "border-border bg-white text-text-secondary"
                : timerLow
                  ? "border-accent-red bg-accent-red/10 text-accent-red"
                  : "border-primary bg-primary/5 text-primary-text"
            }`}
            role="timer"
            aria-live={timerLow ? "assertive" : "off"}
            aria-label={`Time remaining: ${formatTime(secondsLeft)}`}
          >
            {submitted ? "Time" : "Time left"}: {formatTime(secondsLeft)}
          </div>
        )}
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
          {!examMode && bestScore !== null && bestScore !== score && (
            <p className="mt-1 text-sm font-medium text-text-secondary">
              Best score: {bestScore}/{data.questions.length}
            </p>
          )}
          {examMode ? (
            <p className="mt-2 text-base text-text-secondary">
              Your responses have been recorded. Review the feedback below for any
              you missed. Your instructor may adjust the final score after item
              analysis.
            </p>
          ) : (
            <p className="mt-2 text-base text-text-secondary">
              {score === data.questions.length
                ? "Perfect score! Great work."
                : score >= data.questions.length * 0.8
                  ? "Well done! Review the feedback below for any you missed."
                  : "Review the feedback below to strengthen your understanding."}
            </p>
          )}
          {autoSubmitted && (
            <p className="mt-2 text-sm font-medium text-accent-red">
              Time expired. The exam was submitted automatically with your
              current answers.
            </p>
          )}
          <p className="mt-1 text-xs text-text-secondary">
            Attempt {attemptNumber}
          </p>
          {canRetake && (
            <button
              type="button"
              onClick={handleRetake}
              className="mt-4 rounded-lg border-2 border-primary bg-white px-6 py-2 text-base font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              Retake Quiz
            </button>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} aria-label={`${data.title} quiz`}>
        <ol className="space-y-10 list-none p-0">
          {renderedQuestions.map((q, qIndex) => {
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
                    <QuizStimulusImage src={q.imageSrc} alt={q.imageAlt} />
                  )}
                  {q.figmaUrl && (
                    <p className="mb-4 text-sm">
                      <a
                        href={q.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-text underline hover:text-primary-dark"
                      >
                        View stimulus in Figma (opens in new tab)
                      </a>
                    </p>
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
              disabled={!examMode && !allAnswered}
              className="rounded-lg bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-disabled={!examMode && !allAnswered}
            >
              {examMode ? "Submit Exam" : "Submit Quiz"}
            </button>
            {!examMode && !allAnswered && (
              <p className="mt-3 text-sm text-text-secondary">
                Answer all {data.questions.length} questions to submit.
              </p>
            )}
            {examMode && !allAnswered && (
              <p className="mt-3 text-sm text-text-secondary">
                {answeredCount} of {data.questions.length} answered. You may submit
                with unanswered questions, but they will be marked incorrect.
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
