import { notFound } from "next/navigation";
import { db } from "@/db";
import { submissions, grades, comments } from "@/db/schema";
import { eq, asc } from "drizzle-orm";
import { assignments } from "@/data/assignments";
import { GradeForm } from "../../GradeForm";
import { CommentForm } from "./CommentForm";

export const metadata = {
  title: "Submission Detail | DACE Cohort 2",
  robots: "noindex, nofollow",
};

interface SubmissionDetailProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
}

export default async function SubmissionDetailPage({
  params,
  searchParams,
}: SubmissionDetailProps) {
  const [{ id }, { token }] = await Promise.all([params, searchParams]);
  const submissionId = Number(id);

  if (!process.env.ADMIN_SECRET || token !== process.env.ADMIN_SECRET) {
    notFound();
  }

  if (Number.isNaN(submissionId)) {
    notFound();
  }

  const [sub] = await db
    .select()
    .from(submissions)
    .where(eq(submissions.id, submissionId))
    .limit(1);

  if (!sub) notFound();

  const [gradeRows, commentRows] = await Promise.all([
    db.select().from(grades).where(eq(grades.submissionId, submissionId)),
    db
      .select()
      .from(comments)
      .where(eq(comments.submissionId, submissionId))
      .orderBy(asc(comments.createdAt)),
  ]);

  const grade = gradeRows[0] ?? null;
  const config = assignments[sub.assignmentId];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div>
        <a
          href={`/teacher?token=${token}`}
          className="text-sm text-primary-text underline"
        >
          &larr; Back to dashboard
        </a>
      </div>

      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">
          {sub.name} &mdash; {config?.label ?? sub.assignmentId}
        </h1>
        <p className="text-sm text-text-secondary">
          Submitted{" "}
          {sub.submittedAt.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>
        <p>
          <a
            href={sub.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-text underline break-all"
          >
            {sub.linkUrl}
          </a>
        </p>
      </header>

      <div className="space-y-4">
        <h2
          id="grade-heading"
          className="text-xl font-semibold text-foreground"
        >
          Grade
        </h2>
        {grade ? (
          <p className="text-lg font-medium text-foreground">
            {grade.score}/{grade.total}
            <span className="ml-2 text-sm text-text-secondary">
              Graded{" "}
              {grade.gradedAt.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </p>
        ) : (
          <GradeForm
            submissionId={sub.id}
            defaultTotal={config?.totalPoints ?? 0}
          />
        )}
      </div>

      <div className="space-y-4">
        <h2
          id="comments-heading"
          className="text-xl font-semibold text-foreground"
        >
          Comments ({commentRows.length})
        </h2>

        {commentRows.length === 0 ? (
          <p className="text-sm text-text-secondary">No comments yet.</p>
        ) : (
          <ol className="space-y-4 list-none p-0">
            {commentRows.map((c) => (
              <li
                key={c.id}
                className="rounded-lg border border-border bg-surface p-4"
              >
                <p className="text-sm font-medium text-foreground capitalize">
                  {c.author}
                </p>
                <p className="mt-1 text-base text-foreground whitespace-pre-line">
                  {c.body}
                </p>
                <p className="mt-2 text-xs text-text-secondary">
                  {c.createdAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
              </li>
            ))}
          </ol>
        )}

        <CommentForm submissionId={sub.id} />
      </div>
    </div>
  );
}
