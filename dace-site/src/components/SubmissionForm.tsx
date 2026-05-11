"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  submitAssignment,
  type SubmissionState,
} from "@/app/actions/submissions";

interface SubmissionFormProps {
  assignmentId: string;
  assignmentLabel: string;
}

export default function SubmissionForm({
  assignmentId,
  assignmentLabel,
}: SubmissionFormProps) {
  const [state, formAction, isPending] = useActionState<
    SubmissionState,
    FormData
  >(submitAssignment, null);

  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state) {
      statusRef.current?.focus();
    }
  }, [state]);

  if (state?.success) {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-lg border-2 border-accent-green bg-accent-green/5 p-6 space-y-2"
      >
        <p className="text-base font-semibold text-foreground">
          Submission received for {assignmentLabel}.
        </p>
        <p className="text-sm text-text-secondary">
          You can resubmit by refreshing this page if you need to update your
          link.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="assignmentId" value={assignmentId} />

      {state && !state.success && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-accent-red/30 bg-accent-red/5 p-4 text-sm text-accent-red"
        >
          {state.message}
        </div>
      )}

      <div className="space-y-2">
        <label
          htmlFor={`name-${assignmentId}`}
          className="block text-sm font-medium text-foreground"
        >
          Your name
        </label>
        <input
          type="text"
          id={`name-${assignmentId}`}
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          placeholder="First Last"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor={`link-${assignmentId}`}
          className="block text-sm font-medium text-foreground"
        >
          Submission link
        </label>
        <input
          type="url"
          id={`link-${assignmentId}`}
          name="linkUrl"
          required
          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          placeholder="https://figma.com/..."
        />
        <p className="text-xs text-text-secondary">
          Paste the URL to your completed work (Figma, Google Doc, etc.)
        </p>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
