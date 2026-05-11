import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Welcome to DACE Cohort 2
        </h1>
        <div className="rounded-lg border-l-4 border-primary bg-surface p-4">
          <p className="text-base text-foreground">
            Canvas is temporarily unavailable. Use this site to access your
            course materials for Weeks 2 and 3.
          </p>
        </div>
      </div>

      <section aria-labelledby="weeks-heading" className="space-y-6">
        <h2 id="weeks-heading" className="text-2xl font-semibold text-foreground">
          Course Weeks
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/week-2"
            className="group bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary transition-all"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                Week 2
              </span>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-text">
                Color &amp; Forms
              </h3>
              <ul className="space-y-1.5 text-sm text-text-secondary" role="list">
                <li>L03: Color</li>
                <li>L04: Forms &amp; Errors</li>
                <li>Applied Practice: Color and Forms Analysis</li>
              </ul>
              <p className="text-sm font-medium text-primary-text underline">
                View week materials &rarr;
              </p>
            </div>
          </Link>

          <Link
            href="/week-3"
            className="group bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary transition-all"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                Week 3
              </span>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-text">
                Keyboard &amp; Reflow
              </h3>
              <ul className="space-y-1.5 text-sm text-text-secondary" role="list">
                <li>L05: Keyboard &amp; Touch</li>
                <li>L06: Reflow &amp; Zoom</li>
                <li>Applied Practice: Blueline Annotations</li>
              </ul>
              <p className="text-sm font-medium text-primary-text underline">
                View week materials &rarr;
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section aria-labelledby="quizzes-heading" className="space-y-4">
        <h2 id="quizzes-heading" className="text-2xl font-semibold text-foreground">
          Knowledge Check Quizzes
        </h2>
        <p className="text-base text-text-secondary">
          Each lesson includes a knowledge check quiz. Navigate to the lesson
          page and follow the quiz link, or use the direct links below.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Week 2</h3>
            <Link
              href="/week-2/l03-color/quiz"
              className="block rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary-text underline hover:bg-surface transition-colors"
            >
              L03 Color Quiz
            </Link>
            <Link
              href="/week-2/l04-forms/quiz"
              className="block rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary-text underline hover:bg-surface transition-colors"
            >
              L04 Forms Quiz
            </Link>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Week 3</h3>
            <Link
              href="/week-3/l05-keyboard/quiz"
              className="block rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary-text underline hover:bg-surface transition-colors"
            >
              L05 Keyboard Quiz
            </Link>
            <Link
              href="/week-3/l06-reflow/quiz"
              className="block rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary-text underline hover:bg-surface transition-colors"
            >
              L06 Reflow Quiz
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="space-y-4">
        <h2 id="projects-heading" className="text-2xl font-semibold text-foreground">
          Applied Skill Projects
        </h2>
        <p className="text-base text-text-secondary">
          Each week includes a hands-on project where you apply the skills from
          that week&apos;s lessons to a real design scenario.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/week-2/applied-practice"
            className="group rounded-lg border border-border bg-white p-6 shadow-sm hover:shadow-md hover:border-primary transition-all"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                  Week 2
                </span>
                <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">
                  24 Points
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-text">
                Color and Forms Analysis
              </h3>
              <p className="text-sm text-text-secondary">
                Written response assessment analyzing a modal dialog design for
                color contrast and form labeling.
              </p>
              <p className="text-sm font-medium text-primary-text underline">
                View project &rarr;
              </p>
            </div>
          </Link>

          <Link
            href="/week-3/applied-practice"
            className="group rounded-lg border border-border bg-white p-6 shadow-sm hover:shadow-md hover:border-primary transition-all"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                  Week 3
                </span>
                <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">
                  28 Points
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-text">
                Blueline Annotations
              </h3>
              <p className="text-sm text-text-secondary">
                Create accessibility annotations for keyboard, touch targets,
                and responsive design on a Figma mockup.
              </p>
              <p className="text-sm font-medium text-primary-text underline">
                View project &rarr;
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section aria-labelledby="submissions-heading" className="space-y-3">
        <h2 id="submissions-heading" className="text-2xl font-semibold text-foreground">
          Submitting Your Work
        </h2>
        <div className="rounded-lg border border-border bg-surface p-5 space-y-2">
          <p className="text-base text-foreground">
            Since Canvas is unavailable, submit your applied practice
            assignments via one of these methods:
          </p>
          <ul className="list-disc list-inside text-base text-foreground space-y-1" role="list">
            <li>Slack DM to your instructor</li>
            <li>
              Email to{" "}
              <a
                href="mailto:dsian@adobe.com"
                className="text-primary-text underline"
              >
                dsian@adobe.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
