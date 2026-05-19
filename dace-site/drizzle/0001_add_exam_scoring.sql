-- Idempotent migration: adds per-question response storage and adjustable
-- scoring fields to quiz_results, and introduces a per-question weight table
-- used by the Badge 1 exam (and any future weighted assessment).

ALTER TABLE "quiz_results" ADD COLUMN IF NOT EXISTS "responses" jsonb;
--> statement-breakpoint

ALTER TABLE "quiz_results" ADD COLUMN IF NOT EXISTS "adjusted_score" numeric(8, 2);
--> statement-breakpoint

ALTER TABLE "quiz_results" ADD COLUMN IF NOT EXISTS "adjusted_total" numeric(8, 2);
--> statement-breakpoint

ALTER TABLE "quiz_results" ADD COLUMN IF NOT EXISTS "adjustment_note" text;
--> statement-breakpoint

CREATE TABLE IF NOT EXISTS "quiz_question_weights" (
	"id" serial PRIMARY KEY NOT NULL,
	"quiz_id" text NOT NULL,
	"question_id" text NOT NULL,
	"point_weight" numeric(6, 2) NOT NULL DEFAULT 1.00,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "quiz_question_weights_quiz_question_unique" UNIQUE("quiz_id", "question_id")
);
