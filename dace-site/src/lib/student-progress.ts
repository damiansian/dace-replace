import { db } from "@/db";
import { quizResults, submissions, grades } from "@/db/schema";
import { progressCatalog, type CatalogItem } from "@/data/progress-catalog";
import { WEEK4_WORKBOOK_QUIZ_ID } from "@/lib/week4-practice-score";
import { desc, eq, inArray } from "drizzle-orm";

export type QuizRow = typeof quizResults.$inferSelect;
export type SubmissionRow = typeof submissions.$inferSelect;
export type GradeRow = typeof grades.$inferSelect;

export function bestQuiz(rows: QuizRow[]): QuizRow | null {
  if (rows.length === 0) return null;
  return rows.reduce((best, r) => (r.score > best.score ? r : best), rows[0]);
}

export function latestSubmission(rows: SubmissionRow[]): SubmissionRow | null {
  if (rows.length === 0) return null;
  return rows.reduce((latest, r) =>
    r.submittedAt > latest.submittedAt ? r : latest
  );
}

export type StudentProgressSnapshot = {
  completeItems: number;
  totalItems: number;
  /** Keyed by catalog item `id` (e.g. l03-color, week-2-practice). */
  itemComplete: Map<string, boolean>;
  quizzesById: Map<string, QuizRow[]>;
  submissionsById: Map<string, SubmissionRow[]>;
  gradeBySubmission: Map<number, GradeRow>;
};

function catalogItemCompleteFromMaps(
  item: CatalogItem,
  quizzesById: Map<string, QuizRow[]>,
  submissionsById: Map<string, SubmissionRow[]>
): boolean {
  if (item.kind === "quiz") {
    return Boolean(bestQuiz(quizzesById.get(item.id) ?? []));
  }
  if (item.id === "week-4-practice") {
    return (
      Boolean(bestQuiz(quizzesById.get(WEEK4_WORKBOOK_QUIZ_ID) ?? [])) ||
      Boolean(latestSubmission(submissionsById.get(item.id) ?? []))
    );
  }
  return Boolean(latestSubmission(submissionsById.get(item.id) ?? []));
}

export function isCatalogItemComplete(
  item: CatalogItem,
  snapshot: StudentProgressSnapshot
): boolean {
  return catalogItemCompleteFromMaps(
    item,
    snapshot.quizzesById,
    snapshot.submissionsById
  );
}

export function countWeekComplete(
  weekId: string,
  snapshot: StudentProgressSnapshot
): { complete: number; total: number } {
  const week = progressCatalog.find((w) => w.id === weekId);
  if (!week) return { complete: 0, total: 0 };
  let complete = 0;
  for (const item of week.items) {
    if (
      catalogItemCompleteFromMaps(
        item,
        snapshot.quizzesById,
        snapshot.submissionsById
      )
    ) {
      complete++;
    }
  }
  return { complete, total: week.items.length };
}

export async function loadStudentProgressSnapshot(
  studentId: number
): Promise<StudentProgressSnapshot> {
  const [studentQuizzes, studentSubmissions] = await Promise.all([
    db
      .select()
      .from(quizResults)
      .where(eq(quizResults.studentId, studentId))
      .orderBy(desc(quizResults.submittedAt)),
    db
      .select()
      .from(submissions)
      .where(eq(submissions.studentId, studentId))
      .orderBy(desc(submissions.submittedAt)),
  ]);

  const submissionIds = studentSubmissions.map((s) => s.id);
  const studentGrades: GradeRow[] =
    submissionIds.length === 0
      ? []
      : await db
          .select()
          .from(grades)
          .where(inArray(grades.submissionId, submissionIds));

  const gradeBySubmission = new Map(
    studentGrades.map((g) => [g.submissionId, g])
  );
  const quizzesById = new Map<string, QuizRow[]>();
  for (const q of studentQuizzes) {
    const arr = quizzesById.get(q.quizId) ?? [];
    arr.push(q);
    quizzesById.set(q.quizId, arr);
  }
  const submissionsById = new Map<string, SubmissionRow[]>();
  for (const s of studentSubmissions) {
    const arr = submissionsById.get(s.assignmentId) ?? [];
    arr.push(s);
    submissionsById.set(s.assignmentId, arr);
  }

  const itemComplete = new Map<string, boolean>();
  let totalItems = 0;
  let completeItems = 0;

  for (const week of progressCatalog) {
    for (const item of week.items) {
      totalItems++;
      const done = catalogItemCompleteFromMaps(
        item,
        quizzesById,
        submissionsById
      );
      itemComplete.set(item.id, done);
      if (done) completeItems++;
    }
  }

  return {
    completeItems,
    totalItems,
    itemComplete,
    quizzesById,
    submissionsById,
    gradeBySubmission,
  };
}
