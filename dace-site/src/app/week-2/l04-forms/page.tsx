import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L04: Forms and Errors | DACE Cohort 2",
};

export default function L04FormsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-2">
        <Link
          href="/week-2"
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to Week 2
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Lesson 04: Forms and Errors
        </h1>
        <p className="text-base text-text-secondary">
          Forms are where users provide information to complete tasks. When
          forms are inaccessible, users cannot sign up, purchase, submit
          requests, or accomplish their goals.
        </p>
      </div>

      {/* Badges */}
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

      {/* Lesson Activities */}
      <section aria-labelledby="activities-heading" className="space-y-4">
        <h2
          id="activities-heading"
          className="text-xl font-semibold text-foreground"
        >
          Lesson Activities
        </h2>
        <div className="bg-white border border-border rounded-lg shadow-sm divide-y divide-border">
          <div className="p-4 flex items-start gap-3">
            <span className="mt-0.5 text-primary" aria-hidden="true">
              ◆
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">
                Figma Lesson
              </p>
              <p className="text-sm text-text-secondary">
                Self-paced &middot; 30 minutes
              </p>
              <span
                className="text-sm text-text-secondary cursor-not-allowed"
                aria-disabled="true"
              >
                Figma link coming soon
              </span>
            </div>
          </div>
          <div className="p-4 flex items-start gap-3">
            <span className="mt-0.5 text-primary" aria-hidden="true">
              ◆
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">
                Knowledge Check Quiz
              </p>
              <p className="text-sm text-text-secondary">
                5 questions &middot; Auto-graded &middot; 5 points
              </p>
              <Link
                href="/week-2/l04-forms/quiz"
                className="text-sm text-primary-text underline hover:text-primary-dark"
              >
                Take the quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section aria-labelledby="video-heading" className="space-y-3">
        <h2
          id="video-heading"
          className="text-xl font-semibold text-foreground"
        >
          Lesson Video
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://player.vimeo.com/video/1154372812"
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title="Lesson 04: Forms and Errors Explainer"
          />
        </div>
      </section>

      {/* Learning Objectives */}
      <section aria-labelledby="objectives-heading" className="space-y-4">
        <h2
          id="objectives-heading"
          className="text-xl font-semibold text-foreground"
        >
          Learning Objectives
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th
                  scope="col"
                  className="border border-border px-4 py-3 text-left font-semibold text-foreground"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="border border-border px-4 py-3 text-left font-semibold text-foreground"
                >
                  Objective
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1D.01
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Specify form field labels and instructions that are visible,
                  persistent, and programmatically associated with their inputs.
                </td>
              </tr>
              <tr className="bg-surface/50">
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1D.02
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Design accessible error identification that describes errors
                  in text and suggests corrections when possible.
                </td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1D.03
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Apply input purpose requirements using autocomplete attributes
                  to support users who benefit from personalized input
                  assistance.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
          <p className="text-sm text-foreground">
            <strong>Connection to L01:</strong> Form labels are the accessible
            names for form controls. The naming concepts from Lesson 01 apply
            directly here.
          </p>
        </div>
      </section>

      {/* WCAG Success Criteria */}
      <section aria-labelledby="wcag-heading" className="space-y-4">
        <h2
          id="wcag-heading"
          className="text-xl font-semibold text-foreground"
        >
          WCAG Success Criteria
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              3.3.2 Labels or Instructions
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Labels or instructions are provided when content requires user
              input. Level&nbsp;A.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              3.3.1 Error Identification
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              If an input error is automatically detected, the item in error is
              identified and the error described in text. Level&nbsp;A.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              3.3.3 Error Suggestion
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              If an input error is detected and suggestions are known, they are
              provided to the user unless it would jeopardize security.
              Level&nbsp;AA.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              1.3.5 Identify Input Purpose
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              The purpose of each input field collecting user information can be
              programmatically determined. Level&nbsp;AA.
            </p>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section aria-labelledby="concepts-heading" className="space-y-6">
        <h2
          id="concepts-heading"
          className="text-xl font-semibold text-foreground"
        >
          Key Concepts
        </h2>

        <div className="space-y-6">
          {/* Why Form Accessibility Matters */}
          <div className="rounded-lg border-l-4 border-l-accent-green bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Why Form Accessibility Matters
            </h3>
            <p className="text-sm text-text-secondary">
              Forms are task-blocking UI. If a user cannot complete a form, they
              cannot complete their goal. Inaccessible forms prevent people from
              creating accounts, making purchases, booking appointments, or
              submitting support requests.
            </p>
            <p className="text-sm text-text-secondary">
              Form labels are the accessible names for form controls. Everything
              from Lesson 01 about accessible naming applies directly to form
              fields: every interactive control needs a clear, descriptive name
              that assistive technology can announce.
            </p>
          </div>

          {/* Labels and Instructions */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Labels and Instructions (1D.01)
            </h3>

            <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-amber-500">
              <p className="text-sm text-foreground">
                <strong>The placeholder problem:</strong> Placeholder text is
                not a label. It disappears on input, often has insufficient
                contrast, and is inconsistently announced by screen readers.
              </p>
            </div>

            <p className="text-sm text-text-secondary">
              SC 3.3.2 requires that labels or instructions are provided for
              all user inputs. Effective labels must be:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>
                <strong>Visible</strong> &mdash; always displayed, not hidden or
                replaced by placeholder text
              </li>
              <li>
                <strong>Persistent</strong> &mdash; remain visible while the
                user types, so they can verify they are in the correct field
              </li>
              <li>
                <strong>Associated</strong> &mdash; programmatically linked via{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                  for
                </code>
                /
                <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                  id
                </code>{" "}
                or by nesting the input inside the label
              </li>
              <li>
                <strong>Descriptive</strong> &mdash; clearly communicate what
                information is expected
              </li>
            </ul>
            <p className="text-sm text-text-secondary">
              Instructions are needed when input requires a specific format
              (dates, phone numbers), when fields are conditionally required, or
              when group context is needed (use{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                &lt;fieldset&gt;
              </code>{" "}
              and{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                &lt;legend&gt;
              </code>
              ).
            </p>
          </div>

          {/* Error Identification */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Error Identification (1D.02)
            </h3>
            <p className="text-sm text-text-secondary">
              SC 3.3.1 and SC 3.3.3 work together to ensure users can find and
              fix errors. Every error message must answer two questions:
            </p>
            <ol className="list-decimal list-inside text-sm text-foreground space-y-2">
              <li>
                <strong>What went wrong?</strong> &mdash; Identify the specific
                field and describe the error
              </li>
              <li>
                <strong>How do I fix it?</strong> &mdash; Suggest a valid input
                or format when possible
              </li>
            </ol>

            <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-amber-500">
              <p className="text-sm text-foreground">
                <strong>Color-only errors fail two criteria:</strong> Using only
                a red border or red text to indicate errors violates both SC
                1.4.1 (Use of Color) and SC 3.3.1 (Error Identification). Pair
                color with text descriptions, icons, or both.
              </p>
            </div>

            <p className="text-sm text-text-secondary">
              Best practices for error handling:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>
                Associate error messages with inputs using{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                  aria-describedby
                </code>{" "}
                or{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                  aria-errormessage
                </code>
              </li>
              <li>
                Provide an error summary at the top of the form using a live
                region
              </li>
              <li>
                Move focus to the error summary or first invalid field after
                submission
              </li>
              <li>
                Use inline validation to catch errors before form submission
                when appropriate
              </li>
            </ul>
          </div>

          {/* Input Purpose and Autocomplete */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Input Purpose and Autocomplete (1D.03)
            </h3>
            <p className="text-sm text-text-secondary">
              SC 1.3.5 requires that input fields collecting user information
              identify their purpose programmatically using the HTML{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                autocomplete
              </code>{" "}
              attribute. This enables browsers and assistive technology to
              pre-fill fields, add icons, or provide personalized assistance.
            </p>
            <p className="text-sm text-text-secondary">
              Common autocomplete values:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "name",
                "given-name",
                "family-name",
                "email",
                "tel",
                "street-address",
                "postal-code",
                "country",
                "bday",
                "cc-number",
                "username",
                "new-password",
                "current-password",
              ].map((value) => (
                <code
                  key={value}
                  className="rounded bg-surface px-2 py-1 text-sm font-mono text-foreground"
                >
                  {value}
                </code>
              ))}
            </div>
          </div>

          {/* Annotating Forms */}
          <div className="rounded-lg border-l-4 border-l-accent-green bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Annotating Forms for Development
            </h3>
            <p className="text-sm text-text-secondary">
              When handing off form designs to developers, annotate:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>Tab order through all interactive controls</li>
              <li>Label text and its programmatic association method</li>
              <li>
                Error states showing the error message text, placement, and
                visual treatment
              </li>
              <li>
                Required vs. optional fields and how each is communicated
                visually and programmatically
              </li>
              <li>
                Accessible names for any controls where the visible label is
                insufficient or absent (icon buttons, etc.)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section aria-labelledby="assessment-heading" className="space-y-4">
        <h2
          id="assessment-heading"
          className="text-xl font-semibold text-foreground"
        >
          Assessment
        </h2>
        <div className="rounded-lg border border-border bg-surface p-6 space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Knowledge Check Quiz
          </h3>
          <p className="text-sm text-text-secondary">
            5 multiple-choice questions covering form labeling, error
            handling, and input purpose. Auto-graded, worth 5 points.
          </p>
          <Link
            href="/week-2/l04-forms/quiz"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Take the L04 Forms Quiz
          </Link>
        </div>
      </section>

      {/* Resources */}
      <section aria-labelledby="resources-heading" className="space-y-4">
        <h2
          id="resources-heading"
          className="text-xl font-semibold text-foreground"
        >
          Resources
        </h2>
        <div className="bg-white border border-border rounded-lg p-6 shadow-sm space-y-3">
          <ul className="space-y-2 text-sm" role="list">
            <li>
              <a
                href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text underline hover:text-primary-dark"
              >
                Understanding SC 3.3.2: Labels or Instructions
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text underline hover:text-primary-dark"
              >
                Understanding SC 3.3.1: Error Identification
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text underline hover:text-primary-dark"
              >
                Understanding SC 3.3.3: Error Suggestion
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text underline hover:text-primary-dark"
              >
                Understanding SC 1.3.5: Identify Input Purpose
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/tutorials/forms/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text underline hover:text-primary-dark"
              >
                WAI Web Accessibility Tutorials: Forms
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Up Next */}
      <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
        <p className="text-sm text-foreground">
          <strong>Up next:</strong>{" "}
          <Link
            href="/week-3/l05-keyboard"
            className="text-primary-text underline hover:text-primary-dark"
          >
            L05: Keyboard, Touch &amp; Reading Order
          </Link>{" "}
          &mdash; Keyboard accessibility, focus indicators, touch targets, and
          reading order fundamentals.
        </p>
      </div>
    </div>
  );
}
