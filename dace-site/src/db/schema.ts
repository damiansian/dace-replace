import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  unique,
  index,
  jsonb,
  numeric,
} from "drizzle-orm/pg-core";

export const students = pgTable(
  "students",
  {
    id: serial("id").primaryKey(),
    accessToken: text("access_token").notNull(),
    displayName: text("display_name").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [unique("students_access_token_unique").on(t.accessToken)]
);

export const quizResults = pgTable(
  "quiz_results",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    quizId: text("quiz_id").notNull(),
    score: integer("score").notNull(),
    total: integer("total").notNull(),
    submittedAt: timestamp("submitted_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    studentId: integer("student_id").references(() => students.id),
    /** Per-question student answer map, e.g. `{ "b1-q1": "b", ... }`. Exam mode only. */
    responses: jsonb("responses").$type<Record<string, string>>(),
    /** Instructor-adjusted score for the attempt. Null until an instructor sets weights or override. */
    adjustedScore: numeric("adjusted_score", { precision: 8, scale: 2 }),
    /** Sum of active weights at the time `adjustedScore` was last computed. */
    adjustedTotal: numeric("adjusted_total", { precision: 8, scale: 2 }),
    /** Optional note explaining a manual override on this attempt. */
    adjustmentNote: text("adjustment_note"),
  },
  (t) => [index("quiz_results_student_id_idx").on(t.studentId)]
);

/**
 * Per-question point weights for a quiz. Default weight is 1.0; instructor can
 * lower (e.g. 0.5, 0) after item analysis. `adjustedScore` on `quiz_results`
 * is derived from the matching rows here plus any per-attempt override.
 */
export const quizQuestionWeights = pgTable(
  "quiz_question_weights",
  {
    id: serial("id").primaryKey(),
    quizId: text("quiz_id").notNull(),
    questionId: text("question_id").notNull(),
    pointWeight: numeric("point_weight", { precision: 6, scale: 2 })
      .notNull()
      .default("1.00"),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    unique("quiz_question_weights_quiz_question_unique").on(
      t.quizId,
      t.questionId
    ),
  ]
);

export const submissions = pgTable(
  "submissions",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    assignmentId: text("assignment_id").notNull(),
    linkUrl: text("link_url").notNull(),
    submittedAt: timestamp("submitted_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    studentId: integer("student_id").references(() => students.id),
  },
  (t) => [index("submissions_student_id_idx").on(t.studentId)]
);

export const grades = pgTable(
  "grades",
  {
    id: serial("id").primaryKey(),
    submissionId: integer("submission_id")
      .notNull()
      .references(() => submissions.id),
    score: integer("score").notNull(),
    total: integer("total").notNull(),
    gradedAt: timestamp("graded_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [unique().on(t.submissionId)]
);

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  submissionId: integer("submission_id")
    .notNull()
    .references(() => submissions.id),
  author: text("author").notNull().default("instructor"),
  body: text("body").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
