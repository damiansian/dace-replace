import Link from "next/link";
import SubmissionForm from "@/components/SubmissionForm";

export const metadata = {
  title: "Week 2 Applied Practice | DACE Cohort 2",
};

export default function Week2Practice() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-2">
        <Link href="/week-2" className="text-sm text-primary-text underline hover:text-primary-dark">
          &larr; Back to Week 2
        </Link>
      </div>

      <header className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">Discover Badge</span>
          <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">Modules 1C + 1D</span>
          <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">24 Points</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Week 2 Applied Practice: Color and Forms Analysis</h1>
        <p className="text-base text-text-secondary">Written Response Assessment: Analyzing a Modal Dialog Design</p>
      </header>

      <section aria-labelledby="submit-heading" className="space-y-3">
        <h2 id="submit-heading" className="text-2xl font-semibold text-foreground">Submission</h2>
        <div className="rounded-lg border-2 border-primary bg-primary/5 p-6 space-y-4">
          <p className="text-sm text-text-secondary">Due before the Week 3 session. Late submissions accepted with communication to instructor.</p>
          <SubmissionForm
            assignmentId="week-2-practice"
            assignmentLabel="Week 2 Applied Practice"
          />
        </div>
      </section>

      <div className="rounded-lg border-l-4 border-l-primary bg-surface p-5 space-y-2">
        <p className="text-base text-foreground">
          This applied practice assessment brings together the two skills you learned in Week 2: evaluating color contrast requirements and specifying form field labels. You will analyze a single design stimulus for multiple accessibility concerns.
        </p>
        <p className="text-base text-foreground">
          You will receive a design mockup (an &quot;Invite people to project&quot; modal dialog) and answer six questions about color contrast and form labeling.
        </p>
      </div>

      <section aria-labelledby="demonstrate-heading" className="space-y-4">
        <h2 id="demonstrate-heading" className="text-2xl font-semibold text-foreground">What You&apos;ll Demonstrate</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-white p-5 space-y-2">
            <h3 className="text-base font-semibold text-foreground">Color Contrast (L03)</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Apply WCAG color contrast requirements to real design scenarios</li>
              <li>Distinguish between real contrast issues and false positives</li>
              <li>Understand when UI component contrast (3:1) is required vs. incidental</li>
              <li>Apply the &quot;required for identification&quot; test from SC 1.4.11</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-white p-5 space-y-2">
            <h3 className="text-base font-semibold text-foreground">Forms and Labels (L04)</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Evaluate form field labeling against SC 3.3.2 requirements</li>
              <li>Recognize when contextual labels provide sufficient identification</li>
              <li>Identify the placeholder-only label problem and explain why it fails</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="outcomes-heading" className="space-y-4">
        <h2 id="outcomes-heading" className="text-2xl font-semibold text-foreground">Learning Outcomes Covered</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="border border-border px-4 py-3 text-left font-semibold">ID</th>
                <th scope="col" className="border border-border px-4 py-3 text-left font-semibold">Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-4 py-3 font-mono">1C.01</td><td className="border border-border px-4 py-3">Apply WCAG color contrast requirements to text and non-text elements</td></tr>
              <tr className="bg-surface/50"><td className="border border-border px-4 py-3 font-mono">1C.02</td><td className="border border-border px-4 py-3">Identify color-only information failures and specify accessible alternatives</td></tr>
              <tr><td className="border border-border px-4 py-3 font-mono">1D.01</td><td className="border border-border px-4 py-3">Specify form field labels and instructions</td></tr>
              <tr className="bg-surface/50"><td className="border border-border px-4 py-3 font-mono">1D.02</td><td className="border border-border px-4 py-3">Design accessible error identification</td></tr>
              <tr><td className="border border-border px-4 py-3 font-mono">1D.03</td><td className="border border-border px-4 py-3">Apply input purpose requirements</td></tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
