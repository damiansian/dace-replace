"use client";

import { useActionState, useRef } from "react";
import { addComment } from "@/app/actions/grading";

interface CommentFormProps {
  submissionId: number;
}

type FormState = { error?: string; sent?: boolean };

export function CommentForm({ submissionId }: CommentFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    async (_prev, formData) => {
      const body = formData.get("body") as string;
      try {
        await addComment(submissionId, body);
        formRef.current?.reset();
        return { sent: true };
      } catch (e) {
        return { error: e instanceof Error ? e.message : "Failed to post" };
      }
    },
    {}
  );

  return (
    <form ref={formRef} action={formAction} className="space-y-3">
      <label
        htmlFor={`comment-${submissionId}`}
        className="block text-sm font-medium text-foreground"
      >
        Add a comment
      </label>
      <textarea
        id={`comment-${submissionId}`}
        name="body"
        required
        rows={3}
        className="block w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-text-secondary"
        placeholder="Write your feedback..."
      />
      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isPending ? "Posting..." : "Post Comment"}
      </button>
      {state.error && (
        <p className="text-sm text-accent-red" role="alert">
          {state.error}
        </p>
      )}
      {state.sent && (
        <p className="text-sm text-accent-green" role="status">
          Comment posted.
        </p>
      )}
    </form>
  );
}
