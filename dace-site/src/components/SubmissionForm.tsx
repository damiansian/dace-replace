"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  submitAssignment,
  type SubmissionState,
} from "@/app/actions/submissions";
import type { RosterSelectOption } from "@/db/students";

interface SubmissionFormProps {
  assignmentId: string;
  assignmentLabel: string;
  accessToken?: string;
  studentDisplayName?: string;
  /** Cohort roster (same names as the teacher gradebook). Used when not submitting via private link. */
  rosterOptions?: RosterSelectOption[];
}

export default function SubmissionForm({
  assignmentId,
  assignmentLabel,
  accessToken,
  studentDisplayName,
  rosterOptions = [],
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

  const usingToken = Boolean(accessToken);

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="assignmentId" value={assignmentId} />
      {usingToken && (
        <input type="hidden" name="accessToken" value={accessToken} />
      )}

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

      {usingToken ? (
        <p className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground">
          Submitting as <strong>{studentDisplayName}</strong> from your private
          progress link.
        </p>
      ) : rosterOptions.length > 0 ? (
        <div className="space-y-2">
          <label
            htmlFor={`student-${assignmentId}`}
            className="block text-sm font-medium text-foreground"
          >
            Your name
          </label>
          <select
            id={`student-${assignmentId}`}
            name="studentId"
            required
            defaultValue=""
            className="w-full min-h-[2.75rem] rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <option value="" disabled>
              Select your name
            </option>
            {rosterOptions.map((s) => (
              <option key={s.id} value={String(s.id)}>
                {s.displayName}
              </option>
            ))}
          </select>
          <p className="text-xs text-text-secondary">
            Use the same name as in the cohort roster so your submission matches
            the gradebook.
          </p>
        </div>
      ) : (
        <p
          className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground"
          role="status"
        >
          The class roster is not available yet. Ask your instructor, then refresh
          this page.
        </p>
      )}

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
        disabled={isPending || (!usingToken && rosterOptions.length === 0)}
        className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
