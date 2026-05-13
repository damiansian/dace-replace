import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  unique,
  index,
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
  },
  (t) => [index("quiz_results_student_id_idx").on(t.studentId)]
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
