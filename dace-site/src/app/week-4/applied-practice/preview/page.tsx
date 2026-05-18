import Link from "next/link";
import Week4PracticeWorkbook from "@/components/week4-practice/Week4PracticeWorkbook";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

export const metadata = {
  title: "Week 4 Practice Preview (Instructor) | DACE Cohort 2",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function Week4PracticePreviewPage({
  searchParams,
}: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 space-y-8">
      <div className="space-y-2">
        <Link
          href={withToken("/week-4/applied-practice", student?.accessToken)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Live applied practice page (unchanged)
        </Link>
      </div>

      <div
        role="status"
        className="rounded-lg border-2 border-amber-500 bg-amber-50 px-4 py-3 text-sm text-foreground"
      >
        <p className="font-semibold m-0 mb-1">Instructor preview — not the student assignment yet</p>
        <p className="m-0 text-text-secondary">
          Review the Northstar Shop mockup and workbook here. The public{" "}
          <Link
            href={withToken("/week-4/applied-practice", student?.accessToken)}
            className="text-primary-text underline"
          >
            applied practice page
          </Link>{" "}
          still uses the Figma workflow until you approve this sample.
        </p>
      </div>

      <header className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900">
            Preview
          </span>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
            Discover Badge
          </span>
          <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">
            20 Points (self-assessed)
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Week 4: Structure &amp; Motion Workbook (sample)
        </h1>
        <p className="text-base text-text-secondary max-w-3xl">
          Landmarks, navigation consistency, skip links, and motion planning on a
          built-in practice site. Export JSON when finished; live submission wiring
          comes after approval.
        </p>
      </header>

      <section className="rounded-lg border border-border bg-surface p-4 text-sm text-text-secondary">
        <h2 className="text-base font-semibold text-foreground mt-0 mb-2">
          What to review before approving
        </h2>
        <ul className="list-disc list-inside space-y-1 m-0">
          <li>Is one footer landmark (links + copyright) clear on all three pages?</li>
          <li>Do skip-link spec and first-Tab focus answers feel like real assessment?</li>
          <li>Are four motion items the right level of difficulty?</li>
          <li>Do coach checks and self-assessment feel fair for your cohort?</li>
        </ul>
      </section>

      <Week4PracticeWorkbook
        accessToken={student?.accessToken}
        studentDisplayName={student?.displayName}
        previewMode
      />
    </div>
  );
}
