"use client";

import { useRef, type KeyboardEvent } from "react";

export type WorkbookStepStatus =
  | "current"
  | "current-complete"
  | "completed"
  | "upcoming";

type WorkbookStepperProps = {
  steps: readonly string[];
  currentStep: number;
  /** When true, the step’s required answers are filled (not only “visited”). */
  stepComplete: readonly boolean[];
  stepHeading: (index: number) => string;
  onStepChange: (index: number) => void;
  stepTabClassName: (index: number) => string;
};

const STATUS_LABEL: Record<WorkbookStepStatus, string> = {
  completed: "Completed",
  "current-complete": "Current step, complete",
  current: "Current step",
  upcoming: "Not yet reached",
};

function stepStatus(
  index: number,
  currentStep: number,
  stepComplete: readonly boolean[]
): WorkbookStepStatus {
  const done = stepComplete[index] ?? false;
  if (index === currentStep) {
    return done ? "current-complete" : "current";
  }
  if (done) return "completed";
  return "upcoming";
}

function StepStatusIcon({ status }: { status: WorkbookStepStatus }) {
  if (status === "completed" || status === "current-complete") {
    return (
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        className="h-3.5 w-3.5 shrink-0"
      >
        <path
          d="M5 10.5l3 3 7-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (status === "current") {
    return (
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        className="h-3.5 w-3.5 shrink-0"
      >
        <circle cx="10" cy="10" r="4" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      className="h-3.5 w-3.5 shrink-0"
    >
      <circle
        cx="10"
        cy="10"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function WorkbookStepper({
  steps,
  currentStep,
  stepComplete,
  stepHeading,
  onStepChange,
  stepTabClassName,
}: WorkbookStepperProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = steps.length - 1;
    let next: number | null = null;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = Math.min(index + 1, last);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = Math.max(index - 1, 0);
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }

    if (next === index) return;
    event.preventDefault();
    onStepChange(next);
    focusTab(next);
  };

  return (
    <div className="space-y-2">
      <nav
        role="tablist"
        aria-label="Stepper"
        className="flex flex-wrap gap-2"
      >
        {steps.map((label, i) => {
          const status = stepStatus(i, currentStep, stepComplete);
          const heading = stepHeading(i);
          return (
            <button
              key={label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`workbook-step-tab-${i}`}
              aria-selected={currentStep === i}
              aria-label={`${heading}, ${STATUS_LABEL[status]}`}
              tabIndex={currentStep === i ? 0 : -1}
              onClick={() => onStepChange(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`inline-flex items-center gap-1.5 ${stepTabClassName(i)}`}
            >
              <StepStatusIcon status={status} />
              <span>{heading}</span>
            </button>
          );
        })}
      </nav>
      <p className="text-xs text-text-secondary m-0">
        <span className="inline-flex items-center gap-1.5 mr-3">
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className="h-3 w-3 text-foreground"
          >
            <path
              d="M5 10.5l3 3 7-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {STATUS_LABEL.completed}
        </span>
        <span className="inline-flex items-center gap-1.5 mr-3">
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className="h-3 w-3 text-primary"
          >
            <circle cx="10" cy="10" r="4" fill="currentColor" />
          </svg>
          {STATUS_LABEL.current}
        </span>
        <span className="inline-flex items-center gap-1.5 mr-3">
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className="h-3 w-3 text-primary"
          >
            <path
              d="M5 10.5l3 3 7-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {STATUS_LABEL["current-complete"]}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className="h-3 w-3 text-text-secondary"
          >
            <circle
              cx="10"
              cy="10"
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            />
          </svg>
          {STATUS_LABEL.upcoming}
        </span>
      </p>
    </div>
  );
}
