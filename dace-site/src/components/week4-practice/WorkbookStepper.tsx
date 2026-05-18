"use client";

import { useRef, type KeyboardEvent } from "react";

type WorkbookStepperProps = {
  steps: readonly string[];
  currentStep: number;
  stepHeading: (index: number) => string;
  onStepChange: (index: number) => void;
  stepTabClassName: (index: number) => string;
};

export function WorkbookStepper({
  steps,
  currentStep,
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
    <nav
      role="tablist"
      aria-label="Stepper"
      className="flex flex-wrap gap-2"
    >
      {steps.map((label, i) => (
        <button
          key={label}
          ref={(el) => {
            tabRefs.current[i] = el;
          }}
          type="button"
          role="tab"
          id={`workbook-step-tab-${i}`}
          aria-selected={currentStep === i}
          tabIndex={currentStep === i ? 0 : -1}
          onClick={() => onStepChange(i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className={stepTabClassName(i)}
        >
          {stepHeading(i)}
        </button>
      ))}
    </nav>
  );
}
