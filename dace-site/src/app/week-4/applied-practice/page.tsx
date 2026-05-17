import Link from "next/link";
import SubmissionForm from "@/components/SubmissionForm";
import { findStudentByToken, listRosterSelectOptions } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

export const metadata = {
  title: "Week 4 Applied Practice | DACE Cohort 2",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function Week4Practice({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const [student, rosterOptions] = await Promise.all([
    findStudentByToken(token),
    listRosterSelectOptions(),
  ]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-2">
        <Link
          href={withToken("/week-4", student?.accessToken)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to Week 4
        </Link>
      </div>

      <header className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">Discover Badge</span>
          <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">Module 1G</span>
          <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">16 Points</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Week 4 Applied Practice: Navigation Accessibility Audit</h1>
        <p className="text-base text-text-secondary">Landmarks, Navigation Consistency &amp; Skip Links Project</p>
      </header>

      <div className="rounded-lg border-2 border-primary bg-primary/5 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="space-y-1 flex-1">
          <p className="text-base font-semibold text-foreground">Start here: open the design file</p>
          <p className="text-sm text-text-secondary">Duplicate this Figma file, then create your navigation accessibility audit with Stark Blueline annotations.</p>
        </div>
        <a
          href="https://www.figma.com/design/mNFDFtVojYP1yvNO20bhfb/DACE---Cohort-2?node-id=2332-636"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors whitespace-nowrap"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 38 57" fill="currentColor" aria-hidden="true"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>
          Open in Figma
        </a>
      </div>

      <div className="space-y-3">
        <h2 id="submit-heading" className="text-2xl font-semibold text-foreground">Submission</h2>
        <div className="rounded-lg border-2 border-primary bg-primary/5 p-6 space-y-4">
          <p className="text-sm text-text-secondary">Due before the Discover Badge Assessment. Late submissions accepted with communication to instructor.</p>
          <SubmissionForm
            assignmentId="week-4-practice"
            assignmentLabel="Week 4 Applied Practice"
            accessToken={student?.accessToken}
            studentDisplayName={student?.displayName}
            rosterOptions={rosterOptions}
          />
        </div>
      </div>

      <div className="rounded-lg border-l-4 border-l-primary bg-surface p-5 space-y-2">
        <p className="text-base text-foreground">
          This applied practice project brings together the navigation skills you learned in Week 4: landmark regions, consistent navigation, and skip links. These skills ensure users can navigate efficiently with screen readers and keyboards, jumping directly to major page sections and bypassing repeated content.
        </p>
        <p className="text-sm text-text-secondary">
          You will receive a multi-page design mockup and create a complete navigation accessibility audit with Blueline annotations. This mirrors real-world design handoff where navigation structure specifications are delivered to engineering.
        </p>
      </div>

      <div className="space-y-4">
        <h2 id="demonstrate-heading" className="text-2xl font-semibold text-foreground">What You&apos;ll Demonstrate</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-white p-5 space-y-2">
            <h3 className="text-base font-semibold text-foreground">Landmarks &amp; Structure (L07)</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Identify all landmark regions (banner, navigation, main, complementary, contentinfo, search)</li>
              <li>Assign unique accessible names when multiple landmarks of the same type exist</li>
              <li>Document landmark structure using Stark Blueline annotations</li>
              <li>Note HTML5 semantic equivalents for each landmark</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-white p-5 space-y-2">
            <h3 className="text-base font-semibold text-foreground">Navigation Consistency (L07)</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Audit navigation consistency across all pages</li>
              <li>Document the order of navigation items on each page</li>
              <li>Flag any inconsistencies where order changes between pages</li>
              <li>Provide specific recommendations for fixing issues</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-white p-5 space-y-2">
            <h3 className="text-base font-semibold text-foreground">Skip Links &amp; Bypass Blocks (L07)</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Identify repeated content blocks that users need to bypass</li>
              <li>Specify skip link placement as the first focusable element</li>
              <li>Document skip link destination targets (e.g., #main-content)</li>
              <li>Specify visibility behavior (hidden until focus or always visible)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="deliverables-heading" className="text-2xl font-semibold text-foreground">What You Deliver</h2>
        <div className="rounded-lg border border-border bg-white p-6">
          <p className="text-sm text-text-secondary">An annotated Figma file with Stark Blueline annotations covering:</p>
          <ol className="list-decimal list-inside text-sm text-foreground mt-2 space-y-2">
            <li><strong>Landmark Annotations:</strong> All landmark regions with correct ARIA roles, unique accessible names for duplicates, and HTML5 semantic equivalents noted</li>
            <li><strong>Navigation Consistency Audit:</strong> Cross-page comparison documenting navigation order on each page, with consistency issues flagged and recommendations</li>
            <li><strong>Skip Link Specifications:</strong> Placement, destination target, and visibility behavior for each skip link</li>
          </ol>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="rubric-heading" className="text-2xl font-semibold text-foreground">Rubric</h2>
        <p className="text-sm text-text-secondary">16 points total | 4 criteria at 4 points each | Rubric-graded by instructor</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="border border-border px-4 py-3 text-left font-semibold">Criterion</th>
                <th scope="col" className="border border-border px-4 py-3 text-left font-semibold">Outcomes</th>
                <th scope="col" className="border border-border px-4 py-3 text-center font-semibold w-16">Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-4 py-3">Landmark Identification</td><td className="border border-border px-4 py-3 font-mono">1G.01</td><td className="border border-border px-4 py-3 text-center">4</td></tr>
              <tr className="bg-surface/50"><td className="border border-border px-4 py-3">Navigation Consistency</td><td className="border border-border px-4 py-3 font-mono">1G.02</td><td className="border border-border px-4 py-3 text-center">4</td></tr>
              <tr><td className="border border-border px-4 py-3">Skip Link Specifications</td><td className="border border-border px-4 py-3 font-mono">1G.03</td><td className="border border-border px-4 py-3 text-center">4</td></tr>
              <tr className="bg-surface/50"><td className="border border-border px-4 py-3">Completeness &amp; Clarity</td><td className="border border-border px-4 py-3 font-mono">All</td><td className="border border-border px-4 py-3 text-center">4</td></tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-lg bg-accent-green/5 border border-accent-green/20 p-4 text-sm">
          <p className="text-foreground"><strong>Passing:</strong> 9+ points (average of Meets Mastery across criteria). Scores below 9 require revision and resubmission.</p>
        </div>
      </div>

    </div>
  );
}
