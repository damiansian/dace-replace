import Link from "next/link";

export default function Week2Hub() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-2">
        <Link
          href="/"
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Week 2: Color &amp; Forms
        </h1>
        <p className="text-base text-text-secondary">
          This week covers color accessibility (contrast ratios, color as
          information, color vision simulation) and accessible forms (labels,
          error identification, input purpose). Complete both lessons, take each
          quiz, and submit the applied practice.
        </p>
      </div>

      <section aria-labelledby="lessons-heading" className="space-y-6">
        <h2 id="lessons-heading" className="text-2xl font-semibold text-foreground">
          Lessons
        </h2>

        <div className="space-y-4">
          <div className="bg-white border border-border rounded-lg p-6 shadow-sm border-l-4 border-l-primary">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                  Discover Badge
                </span>
                <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
                  Module 1C
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                L03: Color
              </h3>
              <p className="text-sm text-text-secondary">
                WCAG color contrast requirements, color as information, and
                color vision simulation techniques.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/week-2/l03-color"
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  View lesson
                </Link>
                <Link
                  href="/week-2/l03-color/quiz"
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  Take quiz
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-lg p-6 shadow-sm border-l-4 border-l-primary">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                  Discover Badge
                </span>
                <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
                  Module 1D
                </span>
                <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">
                  Self-Paced
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                L04: Forms and Errors
              </h3>
              <p className="text-sm text-text-secondary">
                Accessible form labels and instructions, error identification
                and suggestions, and input purpose for autocomplete.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/week-2/l04-forms"
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  View lesson
                </Link>
                <Link
                  href="/week-2/l04-forms/quiz"
                  className="text-sm font-medium text-primary-text underline hover:text-primary-dark"
                >
                  Take quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="practice-heading" className="space-y-4">
        <h2 id="practice-heading" className="text-2xl font-semibold text-foreground">
          Applied Practice
        </h2>
        <div className="bg-white border border-border rounded-lg p-6 shadow-sm border-l-4 border-l-accent-green">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">
              Written Response
            </span>
            <h3 className="text-xl font-semibold text-foreground">
              Color and Forms Analysis
            </h3>
            <p className="text-sm text-text-secondary">
              Analyze a web page or app for color and forms accessibility
              issues. Identify failures, cite WCAG criteria, and suggest
              remediation. Worth 24 points total.
            </p>
            <p className="text-sm text-text-secondary">
              Due before the Week 3 session.
            </p>
            <Link
              href="/week-2/applied-practice"
              className="inline-block text-sm font-medium text-primary-text underline hover:text-primary-dark"
            >
              View assignment details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
