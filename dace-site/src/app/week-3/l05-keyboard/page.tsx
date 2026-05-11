import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L05: Keyboard, Touch & Reading Order | DACE Cohort 2",
};

export default function L05KeyboardPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-2">
        <Link
          href="/week-3"
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to Week 3
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Lesson 05: Keyboard, Touch &amp; Reading Order
        </h1>
        <p className="text-base text-text-secondary">
          Keyboard accessibility is essential for millions of users who rely on
          keyboard navigation, including screen reader users, voice control
          users, people with motor disabilities, and power users.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
          Discover Badge
        </span>
        <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
          Module 1E
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
                Interactive lesson in Figma
              </p>
            </div>
          </div>
          <div className="p-4 flex items-start gap-3">
            <span className="mt-0.5 text-accent-green" aria-hidden="true">
              ◆
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">
                Applied Skill Project
              </p>
              <p className="text-sm text-text-secondary">
                Keyboard &amp; Touch Accessibility Audit
              </p>
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
              <Link
                href="/week-3/l05-keyboard/quiz"
                className="text-sm text-primary-text underline hover:text-primary-dark"
              >
                Take the quiz
              </Link>
            </div>
          </div>
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
                  1E.01
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Ensure all functionality is keyboard accessible, verifying
                  that every interactive element is reachable and operable
                  without a mouse.
                </td>
              </tr>
              <tr className="bg-surface/50">
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1E.02
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Design visible focus indicators meeting WCAG 2.2 requirements
                  for minimum area, contrast, and visibility.
                </td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1E.03
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Apply touch target size requirements, ensuring interactive
                  targets meet the 24&times;24px minimum.
                </td>
              </tr>
              <tr className="bg-surface/50">
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1E.04
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Understand reading order fundamentals and the relationship
                  between DOM order, visual layout, and focus sequence.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Knowledge / Skills / Application breakdown */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-surface p-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">
              Knowledge
            </h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Standard keyboard commands</li>
              <li>SC 2.4.11 focus appearance rules</li>
              <li>SC 2.5.8 target size minimum</li>
              <li>Reading order vs. tab order</li>
            </ul>
          </div>
          <div className="rounded-lg bg-surface p-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Skills</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Keyboard-test interactive components</li>
              <li>Evaluate focus indicator compliance</li>
              <li>Measure touch target dimensions</li>
              <li>Verify reading order matches intent</li>
            </ul>
          </div>
          <div className="rounded-lg bg-surface p-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">
              Application
            </h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Audit a page for keyboard traps</li>
              <li>Spec compliant focus indicators</li>
              <li>Annotate touch targets in design</li>
              <li>Document reading order issues</li>
            </ul>
          </div>
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
              1.3.2 Meaningful Sequence
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              A correct reading sequence can be programmatically determined when
              sequence affects meaning. Level&nbsp;A.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              2.1.1 Keyboard
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              All functionality is operable through a keyboard interface without
              requiring specific timings. Level&nbsp;A.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              2.4.3 Focus Order
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Focusable components receive focus in an order that preserves
              meaning and operability. Level&nbsp;A.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              2.4.7 Focus Visible
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              The keyboard focus indicator is visible on all operable elements.
              Level&nbsp;AA.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              2.4.11 Focus Appearance
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Focus indicators meet minimum area (2px perimeter) and 3:1
              contrast between focused and unfocused states. Level&nbsp;AA
              (WCAG&nbsp;2.2).
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              2.5.8 Target Size (Minimum)
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Pointer input targets are at least 24&times;24 CSS pixels, with
              exceptions for inline targets and user agent controls.
              Level&nbsp;AA (WCAG&nbsp;2.2).
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
          {/* Keyboard Accessibility Fundamentals */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Keyboard Accessibility Fundamentals (1E.01)
            </h3>
            <p className="text-sm text-text-secondary">
              Standard keyboard interactions that all interactive web content
              must support:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th
                      scope="col"
                      className="border border-border px-4 py-2 text-left font-semibold text-foreground"
                    >
                      Key
                    </th>
                    <th
                      scope="col"
                      className="border border-border px-4 py-2 text-left font-semibold text-foreground"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2 font-mono">
                      Tab
                    </td>
                    <td className="border border-border px-4 py-2">
                      Move focus to the next interactive element
                    </td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="border border-border px-4 py-2 font-mono">
                      Shift + Tab
                    </td>
                    <td className="border border-border px-4 py-2">
                      Move focus to the previous interactive element
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-mono">
                      Enter / Space
                    </td>
                    <td className="border border-border px-4 py-2">
                      Activate buttons and links (Enter also submits forms)
                    </td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="border border-border px-4 py-2 font-mono">
                      Arrow keys
                    </td>
                    <td className="border border-border px-4 py-2">
                      Navigate within composite widgets (tabs, menus, radio
                      groups, listboxes)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-mono">
                      Escape
                    </td>
                    <td className="border border-border px-4 py-2">
                      Close modals, menus, popups; return focus to trigger
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-amber-500">
              <p className="text-sm text-foreground">
                <strong>Common failures:</strong> click-only handlers without
                keyboard equivalents, custom controls missing keyboard support,
                hover-only interactions with no keyboard alternative, and drag
                operations without a keyboard path.
              </p>
            </div>
          </div>

          {/* Focus Order */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Focus Order Must Be Logical (1E.01)
            </h3>
            <p className="text-sm text-text-secondary">
              SC 2.4.3 requires focus order to follow a meaningful sequence.
              Focus should generally move left-to-right, top-to-bottom in LTR
              languages, matching the visual reading order.
            </p>
            <p className="text-sm text-text-secondary">
              <strong>Intentional focus traps vs. keyboard traps:</strong>{" "}
              Modal dialogs <em>should</em> trap focus within them while open
              (an intentional focus trap). A keyboard trap is when a user{" "}
              <em>cannot</em> leave a component at all, which is always a
              failure of SC 2.1.2. The key distinction: intentional traps have
              a clear exit mechanism (Escape key, close button).
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>
                Avoid{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                  tabindex
                </code>{" "}
                values greater than 0
              </li>
              <li>
                CSS{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                  order
                </code>
                ,{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                  grid-area
                </code>
                , and{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                  position
                </code>{" "}
                can cause visual order to diverge from DOM order
              </li>
              <li>
                Return focus to the triggering element when closing modals,
                menus, or popovers
              </li>
            </ul>
          </div>

          {/* Focus Indicators */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Focus Indicators Must Be Visible (1E.02)
            </h3>
            <p className="text-sm text-text-secondary">
              WCAG 2.2 introduced SC 2.4.11 (Focus Appearance) with specific
              measurable requirements:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>
                Focus indicator must be at least <strong>2px</strong> thick on
                the perimeter (or equivalent area)
              </li>
              <li>
                Must have at least <strong>3:1 contrast</strong> between the
                focused and unfocused states
              </li>
              <li>
                The indicator must not be entirely obscured by other content
                (sticky headers, cookie banners, etc.)
              </li>
            </ul>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-lg bg-surface p-4 border-l-4 border-l-accent-green">
                <p className="text-sm font-semibold text-accent-green">
                  Best practices
                </p>
                <ul className="list-disc list-inside text-sm text-foreground space-y-1 mt-2">
                  <li>3px solid outline with offset</li>
                  <li>High-contrast color (e.g., #5151D3)</li>
                  <li>Visible on all backgrounds</li>
                  <li>Consistent across all elements</li>
                </ul>
              </div>
              <div className="rounded-lg bg-surface p-4 border-l-4 border-l-accent-red">
                <p className="text-sm font-semibold text-accent-red">
                  Common failures
                </p>
                <ul className="list-disc list-inside text-sm text-foreground space-y-1 mt-2">
                  <li>
                    <code className="rounded bg-white px-1 py-0.5 text-sm font-mono">
                      outline: none
                    </code>{" "}
                    without replacement
                  </li>
                  <li>Low-contrast dotted outlines</li>
                  <li>Focus hidden by overlapping content</li>
                  <li>Only visible on some elements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Touch Targets */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Touch Targets Must Be Large Enough (1E.03)
            </h3>
            <p className="text-sm text-text-secondary">
              SC 2.5.8 (WCAG 2.2) requires pointer input targets to be at least{" "}
              <strong>24&times;24 CSS pixels</strong>:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>
                Applies to buttons, links, form controls, and other tappable
                elements
              </li>
              <li>
                Spacing around a smaller target can contribute: if there is
                24px of clear space around the target, it may still pass
              </li>
              <li>
                Best practice is 44&times;44px (the AAA-level SC 2.5.5 Target
                Size requirement)
              </li>
            </ul>
            <p className="text-sm text-text-secondary font-medium">
              Exceptions:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-1"
              role="list"
            >
              <li>Inline links within a sentence or paragraph</li>
              <li>User agent default controls (browser-rendered checkboxes)</li>
              <li>
                Targets where specific size is essential (map pins, piano keys)
              </li>
              <li>
                Targets with an equivalent control elsewhere on the page that
                meets the size requirement
              </li>
            </ul>
          </div>

          {/* Reading Order */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Reading Order Fundamentals (1E.04)
            </h3>
            <p className="text-sm text-text-secondary">
              <strong>Reading order</strong> is the sequence in which a screen
              reader or other assistive technology traverses all content on a
              page. <strong>Tab order</strong> is the subset that includes only
              interactive (focusable) elements.
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>
                The DOM source order determines reading order; CSS can
                reposition elements visually without changing the DOM
              </li>
              <li>
                Flexbox{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                  order
                </code>
                , CSS Grid placement, and absolute positioning are common
                sources of order mismatches
              </li>
              <li>
                Disabled controls remain in reading order (screen readers
                announce them) but are removed from tab order
              </li>
              <li>
                Test by using Tab to navigate and comparing with a screen
                reader&apos;s content traversal
              </li>
            </ul>
            <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-amber-500">
              <p className="text-sm text-foreground">
                <strong>Common failures:</strong> sidebar content reads before
                main content due to source order, visually reordered grid items
                that confuse linear navigation, and dynamically inserted content
                placed at the end of the DOM regardless of visual position.
              </p>
            </div>
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
          <p className="text-sm text-text-secondary">
            Test your knowledge of keyboard accessibility, focus indicators,
            touch targets, and reading order.
          </p>
          <Link
            href="/week-3/l05-keyboard/quiz"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Take the L05 Keyboard Quiz
          </Link>
        </div>
      </section>

      {/* Up Next */}
      <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
        <p className="text-sm text-foreground">
          <strong>Up next:</strong>{" "}
          <Link
            href="/week-3/l06-reflow"
            className="text-primary-text underline hover:text-primary-dark"
          >
            L06: Reflow &amp; Zoom
          </Link>{" "}
          &mdash; Designing for 400% zoom, text spacing, and orientation
          requirements.
        </p>
      </div>
    </div>
  );
}
