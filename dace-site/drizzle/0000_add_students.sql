-- Idempotent migration: adds the students table and links quiz_results +
-- submissions to students via a nullable studentId. Existing rows stay as-is
-- (studentId remains NULL until a backfill is run).

CREATE TABLE IF NOT EXISTS "students" (
	"id" serial PRIMARY KEY NOT NULL,
	"access_token" text NOT NULL,
	"display_name" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "students_access_token_unique" UNIQUE("access_token")
);
--> statement-breakpoint

ALTER TABLE "quiz_results" ADD COLUMN IF NOT EXISTS "student_id" integer;
--> statement-breakpoint

ALTER TABLE "submissions" ADD COLUMN IF NOT EXISTS "student_id" integer;
--> statement-breakpoint

DO $$ BEGIN
	ALTER TABLE "quiz_results"
		ADD CONSTRAINT "quiz_results_student_id_students_id_fk"
		FOREIGN KEY ("student_id") REFERENCES "public"."students"("id")
		ON DELETE no action ON UPDATE no action;
EXCEPTION
	WHEN duplicate_object THEN NULL;
END $$;
--> statement-breakpoint

DO $$ BEGIN
	ALTER TABLE "submissions"
		ADD CONSTRAINT "submissions_student_id_students_id_fk"
		FOREIGN KEY ("student_id") REFERENCES "public"."students"("id")
		ON DELETE no action ON UPDATE no action;
EXCEPTION
	WHEN duplicate_object THEN NULL;
END $$;
--> statement-breakpoint

CREATE INDEX IF NOT EXISTS "quiz_results_student_id_idx" ON "quiz_results" USING btree ("student_id");
--> statement-breakpoint

CREATE INDEX IF NOT EXISTS "submissions_student_id_idx" ON "submissions" USING btree ("student_id");
