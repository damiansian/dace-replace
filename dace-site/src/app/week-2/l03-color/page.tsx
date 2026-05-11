import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L03: Color | DACE Cohort 2",
};

export default function L03ColorPage() {
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
          Lesson 03: Color
        </h1>
        <p className="text-base text-text-secondary">
          Color is one of the most powerful and most commonly misused tools in
          design. When used well, color enhances understanding and guides
          attention. When used poorly, it creates barriers.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
          Discover Badge
        </span>
        <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
          Module 1C
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
              <a
                href="https://www.figma.com/design/mNFDFtVojYP1yvNO20bhfb/DACE---Cohort-2?node-id=307-2476"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-text underline hover:text-primary-dark"
              >
                Open in Figma
              </a>
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
                href="/week-2/l03-color/quiz"
                className="text-sm text-primary-text underline hover:text-primary-dark"
              >
                Take the quiz
              </Link>
            </div>
          </div>
          <div className="p-4 flex items-start gap-3">
            <span className="mt-0.5 text-accent-green" aria-hidden="true">
              ◆
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">
                Applied Practice
              </p>
              <p className="text-sm text-text-secondary">
                Written response &middot; 24 points
              </p>
              <Link
                href="/week-2/applied-practice"
                className="text-sm text-primary-text underline hover:text-primary-dark"
              >
                View assignment
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
            src="https://player.vimeo.com/video/1146014372"
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title="Lesson 03: Color Explainer"
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
                  1C.01
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Apply WCAG color contrast requirements to test and specify
                  contrast ratios meeting WCAG 2.2 AA for text, images of text,
                  and user interface components.
                </td>
              </tr>
              <tr className="bg-surface/50">
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1C.02
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Identify color-only information failures by recognizing when
                  color is used as the only visual means of conveying information
                  and propose non-color alternatives.
                </td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1C.03
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Test designs with color vision simulation using grayscale
                  simulation to verify that information conveyed with color
                  remains perceivable.
                </td>
              </tr>
            </tbody>
          </table>
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
              1.4.1 Use of Color
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Color is not used as the only visual means of conveying
              information, indicating an action, prompting a response, or
              distinguishing a visual element. Level&nbsp;A.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              1.4.3 Contrast (Minimum)
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Text and images of text have a contrast ratio of at least 4.5:1
              (3:1 for large text). Level&nbsp;AA.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              1.4.11 Non-text Contrast
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              User interface components and graphical objects have a contrast
              ratio of at least 3:1 against adjacent colors. Level&nbsp;AA.
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
          {/* The Three WCAG Color Requirements */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              The Three WCAG Color Requirements
            </h3>
            <p className="text-sm text-text-secondary">
              WCAG defines three distinct requirements related to color. Each
              addresses a different barrier:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>
                <strong>SC 1.4.3 Contrast (Minimum):</strong> Normal text needs
                4.5:1 contrast; large text (18pt or 14pt bold) needs 3:1.
              </li>
              <li>
                <strong>SC 1.4.11 Non-text Contrast:</strong> UI components and
                meaningful graphics need at least 3:1 contrast against adjacent
                colors.
              </li>
              <li>
                <strong>SC 1.4.1 Use of Color:</strong> Color must never be the{" "}
                <em>only</em> visual means of conveying information, indicating
                an action, or distinguishing an element.
              </li>
            </ul>
          </div>

          {/* Who's Affected */}
          <div className="rounded-lg border-l-4 border-l-accent-green bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Who Is Affected
            </h3>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>
                <strong>15%</strong> of working-age adults have a vision
                impairment
              </li>
              <li>
                <strong>300 million</strong> people globally have color vision
                deficiency (CVD)
              </li>
              <li>
                <strong>Everyone</strong> is affected situationally: bright
                sunlight, aging eyes, dirty screens, and poor displays all reduce
                effective contrast
              </li>
            </ul>
          </div>

          {/* Contrast Requirements Explained */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Contrast Requirements Explained
            </h3>
            <p className="text-sm text-text-secondary">
              Different elements require different contrast ratios because of how
              the human visual system processes size and context:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th
                      scope="col"
                      className="border border-border px-4 py-2 text-left font-semibold text-foreground"
                    >
                      Element
                    </th>
                    <th
                      scope="col"
                      className="border border-border px-4 py-2 text-left font-semibold text-foreground"
                    >
                      Ratio (AA)
                    </th>
                    <th
                      scope="col"
                      className="border border-border px-4 py-2 text-left font-semibold text-foreground"
                    >
                      Criterion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Normal text
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      4.5:1
                    </td>
                    <td className="border border-border px-4 py-2">
                      SC 1.4.3
                    </td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="border border-border px-4 py-2">
                      Large text (18pt / 14pt bold)
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      3:1
                    </td>
                    <td className="border border-border px-4 py-2">
                      SC 1.4.3
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      UI components &amp; graphics
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      3:1
                    </td>
                    <td className="border border-border px-4 py-2">
                      SC 1.4.11
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-text-secondary">
              Disabled buttons and inactive controls are exempt from contrast
              requirements. To measure UI component contrast, compare the
              component boundary against its adjacent background.
            </p>
            <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-amber-500">
              <p className="text-sm text-foreground">
                <strong>Common failures:</strong> light-gray placeholder text,
                low-contrast icons without labels, focus indicators that blend
                into the background, and thin borders that serve as the only
                visual boundary for inputs.
              </p>
            </div>
          </div>

          {/* Color as Information */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Color as Information
            </h3>
            <p className="text-sm text-text-secondary">
              SC 1.4.1 fails when color alone communicates meaning. Common
              failures:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>
                Required fields indicated only by a red label or red asterisk
                without text explanation
              </li>
              <li>
                Links in body text distinguished from surrounding text only by
                color (no underline)
              </li>
              <li>
                Status indicators (error, success, warning) conveyed through
                color alone without icons or text
              </li>
              <li>
                Charts or graphs using color-coding without patterns, labels, or
                direct annotations
              </li>
            </ul>
            <p className="text-sm text-foreground font-medium">
              Non-color indicators you can add:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-1"
              role="list"
            >
              <li>Text labels and descriptions</li>
              <li>Icons with accessible names</li>
              <li>Underlines for links</li>
              <li>Patterns or textures in data visualizations</li>
              <li>Shape differences (e.g., triangle for warning, circle for info)</li>
              <li>Size or weight changes</li>
            </ul>
          </div>

          {/* Grayscale Simulation */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Grayscale Simulation
            </h3>
            <p className="text-sm text-text-secondary">
              Grayscale simulation is a quick, effective way to test for
              color-only information. If your interface is still understandable
              in grayscale, it will work for users with any type of color vision
              deficiency.
            </p>
            <p className="text-sm text-text-secondary">
              While specific CVD simulations (protanopia, deuteranopia,
              tritanopia) are useful for detailed analysis, grayscale catches the
              vast majority of SC 1.4.1 failures in a single pass.
            </p>
          </div>

          {/* Testing Workflow */}
          <div className="rounded-lg border-l-4 border-l-accent-green bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Testing Workflow with Stark
            </h3>
            <ol className="list-decimal list-inside text-sm text-foreground space-y-2">
              <li>
                <strong>Check text contrast</strong> &mdash; Use the Stark
                contrast checker on all text elements against their backgrounds
              </li>
              <li>
                <strong>Check non-text contrast</strong> &mdash; Measure UI
                component boundaries and meaningful graphics against adjacent
                colors
              </li>
              <li>
                <strong>Run grayscale simulation</strong> &mdash; Toggle
                grayscale to find information conveyed only through color
              </li>
              <li>
                <strong>Review links in body text</strong> &mdash; Verify links
                have a non-color indicator (underline) or 3:1 contrast with
                surrounding text
              </li>
              <li>
                <strong>Document findings</strong> &mdash; Record the element,
                measured ratio, required ratio, and applicable SC
              </li>
            </ol>
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
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-surface p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Knowledge Check Quiz
            </h3>
            <p className="text-sm text-text-secondary">
              5 multiple-choice questions covering contrast ratios, SC 1.4.1,
              and color vision simulation. Auto-graded, worth 5 points.
            </p>
            <Link
              href="/week-2/l03-color/quiz"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
            >
              Take the L03 Color Quiz
            </Link>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Applied Practice
            </h3>
            <p className="text-sm text-text-secondary">
              Written response analyzing color accessibility in a real
              interface. Worth 24 points.
            </p>
            <Link
              href="/week-2/applied-practice"
              className="inline-flex items-center rounded-lg bg-accent-green px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-green/90 transition-colors"
            >
              View Applied Practice
            </Link>
          </div>
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
                href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text underline hover:text-primary-dark"
              >
                Understanding SC 1.4.1: Use of Color
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text underline hover:text-primary-dark"
              >
                Understanding SC 1.4.3: Contrast (Minimum)
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text underline hover:text-primary-dark"
              >
                Understanding SC 1.4.11: Non-text Contrast
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/WCAG22/Techniques/general/G183"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text underline hover:text-primary-dark"
              >
                G183: Using contrast ratio of 3:1 and additional visual cues for
                links
              </a>
            </li>
            <li>
              <a
                href="https://color.adobe.com/create/color-accessibility"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text underline hover:text-primary-dark"
              >
                Adobe Color Accessibility Tools
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
            href="/week-2/l04-forms"
            className="text-primary-text underline hover:text-primary-dark"
          >
            L04: Forms &amp; Errors
          </Link>{" "}
          &mdash; Accessible form labels, error identification, and input purpose.
        </p>
      </div>
    </div>
  );
}
