import { notFound } from "next/navigation";
import { db } from "@/db";
import { quizResults, submissions, grades, comments } from "@/db/schema";
import { desc, sql, eq } from "drizzle-orm";
import { assignments } from "@/data/assignments";
import { GradeForm } from "./GradeForm";

export const metadata = {
  title: "Teacher Portal | DACE Cohort 2",
  robots: "noindex, nofollow",
};

interface TeacherPageProps {
  searchParams: Promise<{ token?: string }>;
}

export default async function TeacherPage({ searchParams }: TeacherPageProps) {
  const { token } = await searchParams;

  if (!process.env.ADMIN_SECRET || token !== process.env.ADMIN_SECRET) {
    notFound();
  }

  const [allQuizResults, allSubmissions, allGrades, allComments] =
    await Promise.all([
      db.select().from(quizResults).orderBy(desc(quizResults.submittedAt)),
      db.select().from(submissions).orderBy(desc(submissions.submittedAt)),
      db.select().from(grades),
      db
        .select({
          submissionId: comments.submissionId,
          count: sql<number>`count(*)`.as("count"),
        })
        .from(comments)
        .groupBy(comments.submissionId),
    ]);

  const gradeMap = new Map(allGrades.map((g) => [g.submissionId, g]));
  const commentCountMap = new Map(
    allComments.map((c) => [c.submissionId, Number(c.count)])
  );

  const quizGroups = Map.groupBy(allQuizResults, (r) => r.quizId);
  const submissionGroups = Map.groupBy(allSubmissions, (s) => s.assignmentId);

  type BestScore = {
    name: string;
    bestScore: number;
    total: number;
    attempts: number;
  };

  function getBestScores(
    results: (typeof allQuizResults)[number][]
  ): BestScore[] {
    const byStudent = Map.groupBy(results, (r) => r.name);
    return Array.from(byStudent.entries())
      .map(([name, rows]) => ({
        name,
        bestScore: Math.max(...rows.map((r) => r.score)),
        total: rows[0].total,
        attempts: rows.length,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 space-y-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Teacher Portal
        </h1>
        <p className="mt-1 text-base text-text-secondary">
          {allQuizResults.length} quiz attempts, {allSubmissions.length}{" "}
          assignment submissions
        </p>
      </header>

      <div className="space-y-6">
        <h2
          id="quiz-heading"
          className="text-2xl font-semibold text-foreground"
        >
          Quiz Results
        </h2>

        {quizGroups.size === 0 ? (
          <p className="text-sm text-text-secondary">No quiz results yet.</p>
        ) : (
          Array.from(quizGroups.entries()).map(([quizId, results]) => {
            const best = getBestScores(results);
            return (
              <div key={quizId} className="space-y-3">
                <h3 className="text-lg font-medium text-foreground">
                  {quizId}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface">
                        <th
                          scope="col"
                          className="border border-border px-4 py-3 text-left font-semibold"
                        >
                          Student
                        </th>
                        <th
                          scope="col"
                          className="border border-border px-4 py-3 text-left font-semibold"
                        >
                          Best Score
                        </th>
                        <th
                          scope="col"
                          className="border border-border px-4 py-3 text-left font-semibold"
                        >
                          Attempts
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {best.map((s) => (
                        <tr key={s.name}>
                          <td className="border border-border px-4 py-3">
                            {s.name}
                          </td>
                          <td className="border border-border px-4 py-3">
                            {s.bestScore}/{s.total}
                          </td>
                          <td className="border border-border px-4 py-3">
                            {s.attempts}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="space-y-6">
        <h2
          id="submissions-heading"
          className="text-2xl font-semibold text-foreground"
        >
          Assignment Submissions
        </h2>

        {submissionGroups.size === 0 ? (
          <p className="text-sm text-text-secondary">No submissions yet.</p>
        ) : (
          Array.from(submissionGroups.entries()).map(
            ([assignmentId, subs]) => {
              const config = assignments[assignmentId];
              return (
                <div key={assignmentId} className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground">
                    {config?.label ?? assignmentId}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-surface">
                          <th
                            scope="col"
                            className="border border-border px-4 py-3 text-left font-semibold"
                          >
                            Student
                          </th>
                          <th
                            scope="col"
                            className="border border-border px-4 py-3 text-left font-semibold"
                          >
                            Link
                          </th>
                          <th
                            scope="col"
                            className="border border-border px-4 py-3 text-left font-semibold"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="border border-border px-4 py-3 text-left font-semibold"
                          >
                            Grade
                          </th>
                          <th
                            scope="col"
                            className="border border-border px-4 py-3 text-left font-semibold"
                          >
                            Comments
                          </th>
                          <th
                            scope="col"
                            className="border border-border px-4 py-3 text-left font-semibold"
                          >
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {subs.map((s) => {
                          const grade = gradeMap.get(s.id);
                          const commentCount = commentCountMap.get(s.id) ?? 0;
                          const total = config?.totalPoints;

                          return (
                            <tr key={s.id}>
                              <td className="border border-border px-4 py-3">
                                {s.name}
                              </td>
                              <td className="border border-border px-4 py-3">
                                <a
                                  href={s.linkUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary-text underline break-all"
                                >
                                  View
                                </a>
                              </td>
                              <td className="border border-border px-4 py-3 whitespace-nowrap">
                                {s.submittedAt.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </td>
                              <td className="border border-border px-4 py-3">
                                {grade ? (
                                  <span className="font-medium">
                                    {grade.score}/{grade.total}
                                  </span>
                                ) : (
                                  <GradeForm
                                    submissionId={s.id}
                                    defaultTotal={total ?? 0}
                                  />
                                )}
                              </td>
                              <td className="border border-border px-4 py-3 text-center">
                                {commentCount > 0 ? commentCount : "--"}
                              </td>
                              <td className="border border-border px-4 py-3">
                                <a
                                  href={`/teacher/submission/${s.id}?token=${token}`}
                                  className="text-primary-text underline whitespace-nowrap"
                                >
                                  Expand
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            }
          )
        )}
      </div>
    </div>
  );
}
