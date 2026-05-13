import Link from "next/link";
import SubmissionForm from "@/components/SubmissionForm";
import { findStudentByToken, listRosterSelectOptions } from "@/db/students";
import { withToken } from "@/data/progress-catalog";

export const metadata = {
  title: "Week 3 Applied Practice | DACE Cohort 2",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function Week3Practice({ searchParams }: PageProps) {
  const { t: token } = await searchParams;
  const [student, rosterOptions] = await Promise.all([
    token ? findStudentByToken(token) : Promise.resolve(null),
    listRosterSelectOptions(),
  ]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-2">
        <Link
          href={withToken("/week-3", student?.accessToken)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to Week 3
        </Link>
      </div>

      <header className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">Discover Badge</span>
          <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">Modules 1E + 1F</span>
          <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">28 Points</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Week 3 Applied Practice: Blueline Annotations</h1>
        <p className="text-base text-text-secondary">Keyboard, Touch &amp; Responsive Design Combined Project</p>
      </header>

      <div className="rounded-lg border-2 border-primary bg-primary/5 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="space-y-1 flex-1">
          <p className="text-base font-semibold text-foreground">Start here: open the design file</p>
          <p className="text-sm text-text-secondary">Duplicate this Figma file, then create your Blueline accessibility annotations.</p>
        </div>
        <a
          href="https://www.figma.com/design/mNFDFtVojYP1yvNO20bhfb/DACE---Cohort-2?node-id=775-359"
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
          <p className="text-sm text-text-secondary">Due before the Week 4 session (L07: Landmarks &amp; Navigation). Late submissions accepted with communication to instructor.</p>
          <SubmissionForm
            assignmentId="week-3-practice"
            assignmentLabel="Week 3 Applied Practice"
            accessToken={student?.accessToken}
            studentDisplayName={student?.displayName}
            rosterOptions={rosterOptions}
          />
        </div>
      </div>

      <div className="rounded-lg border-l-4 border-l-primary bg-surface p-5 space-y-2">
        <p className="text-base text-foreground">
          This applied practice project brings together the skills you learned in Week 3: keyboard accessibility, focus indicators, touch target sizing, and responsive design requirements. You will receive a design mockup and create a complete set of accessibility annotations.
        </p>
      </div>

      <div className="space-y-4">
        <h2 id="demonstrate-heading" className="text-2xl font-semibold text-foreground">What You&apos;ll Demonstrate</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-white p-5 space-y-2">
            <h3 className="text-base font-semibold text-foreground">Keyboard &amp; Focus (L05)</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Identify all interactive elements that need keyboard access</li>
              <li>Design focus indicators meeting WCAG 2.2 SC 2.4.11 (2px perimeter, 3:1 contrast)</li>
              <li>Annotate focus indicator specifications (color, thickness, contrast ratio)</li>
              <li>Identify potential keyboard traps or focus order issues</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-white p-5 space-y-2">
            <h3 className="text-base font-semibold text-foreground">Touch Targets (L05)</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Measure touch targets using Stark&apos;s touch target checker</li>
              <li>Identify targets below 24x24 pixel minimum (SC 2.5.8)</li>
              <li>Annotate touch target dimensions and recommend fixes</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-white p-5 space-y-2">
            <h3 className="text-base font-semibold text-foreground">Reflow &amp; Responsive (L06)</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Identify components that need flexible sizing (min-height vs fixed height)</li>
              <li>Document expected reflow behavior at narrow viewports</li>
              <li>Flag potential text spacing issues in fixed-height containers</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="deliverables-heading" className="text-2xl font-semibold text-foreground">What You Deliver</h2>
        <div className="rounded-lg border border-border bg-white p-6">
          <p className="text-sm text-text-secondary">An annotated Figma file with Stark Blueline annotations covering:</p>
          <ol className="list-decimal list-inside text-sm text-foreground mt-2 space-y-2">
            <li><strong>Focus Indicator Annotations:</strong> All interactive elements with focus state specs (color, thickness, contrast ratio)</li>
            <li><strong>Touch Target Annotations:</strong> All targets measured, sub-24px targets flagged with recommended fixes</li>
            <li><strong>Responsive &amp; Flexibility Notes:</strong> min-height recommendations, reflow behavior, text spacing risks</li>
          </ol>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="rubric-heading" className="text-2xl font-semibold text-foreground">Rubric</h2>
        <p className="text-sm text-text-secondary">28 points total | 7 criteria at 4 points each | Rubric-graded by instructor</p>
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
              <tr><td className="border border-border px-4 py-3">Interactive Element Identification</td><td className="border border-border px-4 py-3 font-mono">1E.01</td><td className="border border-border px-4 py-3 text-center">4</td></tr>
              <tr className="bg-surface/50"><td className="border border-border px-4 py-3">Focus Indicator Design</td><td className="border border-border px-4 py-3 font-mono">1E.02</td><td className="border border-border px-4 py-3 text-center">4</td></tr>
              <tr><td className="border border-border px-4 py-3">Touch Target Compliance</td><td className="border border-border px-4 py-3 font-mono">1E.03</td><td className="border border-border px-4 py-3 text-center">4</td></tr>
              <tr className="bg-surface/50"><td className="border border-border px-4 py-3">Reflow Documentation</td><td className="border border-border px-4 py-3 font-mono">1F.01</td><td className="border border-border px-4 py-3 text-center">4</td></tr>
              <tr><td className="border border-border px-4 py-3">Text Spacing Flexibility</td><td className="border border-border px-4 py-3 font-mono">1F.02</td><td className="border border-border px-4 py-3 text-center">4</td></tr>
              <tr className="bg-surface/50"><td className="border border-border px-4 py-3">Annotation Clarity</td><td className="border border-border px-4 py-3 font-mono">All</td><td className="border border-border px-4 py-3 text-center">4</td></tr>
              <tr><td className="border border-border px-4 py-3">Completeness</td><td className="border border-border px-4 py-3 font-mono">All</td><td className="border border-border px-4 py-3 text-center">4</td></tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-lg bg-accent-green/5 border border-accent-green/20 p-4 text-sm">
          <p className="text-foreground"><strong>Passing:</strong> 15+ points (average of Meets Mastery across criteria). Scores below 15 require revision and resubmission.</p>
        </div>
      </div>

    </div>
  );
}
