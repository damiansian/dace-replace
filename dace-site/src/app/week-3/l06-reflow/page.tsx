import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L06: Reflow & Zoom | DACE Cohort 2",
};

export default function L06ReflowPage() {
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
          Lesson 06: Reflow &amp; Zoom
        </h1>
        <p className="text-base text-text-secondary">
          Zoom accessibility is essential for millions of users with low vision.
          When designs break at high zoom levels, you&apos;re excluding more
          people than screen reader users combined.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
          Discover Badge
        </span>
        <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
          Module 1F
        </span>
      </div>

      {/* Lesson Activities */}
      <div className="space-y-4">
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
              <a
                href="https://www.figma.com/design/mNFDFtVojYP1yvNO20bhfb/DACE---Cohort-2?node-id=775-358"
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
              <Link
                href="/week-3/l06-reflow/quiz"
                className="text-sm text-primary-text underline hover:text-primary-dark"
              >
                Take the quiz
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="space-y-3">
        <h2
          id="video-heading"
          className="text-xl font-semibold text-foreground"
        >
          Lesson Video
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://player.vimeo.com/video/1157686175"
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title="Lesson 06: Reflow & Zoom Explainer"
          />
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="space-y-4">
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
                  1F.01
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Design for 400% zoom without requiring horizontal scrolling,
                  ensuring content reflows into a single column at 320 CSS
                  pixels.
                </td>
              </tr>
              <tr className="bg-surface/50">
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1F.02
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Ensure text spacing adjustments work without loss of content
                  or functionality when users override line height, letter
                  spacing, word spacing, and paragraph spacing.
                </td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1F.03
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Apply orientation requirements, ensuring content is not
                  restricted to a single display orientation unless essential.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Knowledge / Skills / Application */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-surface p-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">
              Knowledge
            </h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>400% zoom = 320px viewport</li>
              <li>SC 1.4.12 text spacing values</li>
              <li>Reflow exceptions</li>
              <li>Orientation requirements</li>
            </ul>
          </div>
          <div className="rounded-lg bg-surface p-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Skills</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Test reflow at 320px width</li>
              <li>Apply text spacing overrides</li>
              <li>Identify fixed-height failures</li>
              <li>Verify orientation support</li>
            </ul>
          </div>
          <div className="rounded-lg bg-surface p-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">
              Application
            </h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Audit a page at 400% zoom</li>
              <li>Spec flexible containers</li>
              <li>Document reflow breakpoints</li>
              <li>Test both orientations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* WCAG Success Criteria */}
      <div className="space-y-4">
        <h2
          id="wcag-heading"
          className="text-xl font-semibold text-foreground"
        >
          WCAG Success Criteria
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              1.3.4 Orientation
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Content does not restrict its view and operation to a single
              display orientation unless essential. Level&nbsp;AA.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              1.4.4 Resize Text
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Text can be resized up to 200% without assistive technology and
              without loss of content or functionality. Level&nbsp;AA.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              1.4.10 Reflow
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Content reflows without loss of information or functionality at
              320 CSS pixels wide (or 256px tall for horizontal content).
              Level&nbsp;AA.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              1.4.12 Text Spacing
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              No loss of content or functionality when users set line height,
              paragraph spacing, letter spacing, and word spacing to specified
              values. Level&nbsp;AA.
            </p>
          </div>
        </div>
      </div>

      {/* Key Concepts */}
      <div className="space-y-6">
        <h2
          id="concepts-heading"
          className="text-xl font-semibold text-foreground"
        >
          Key Concepts
        </h2>

        <div className="space-y-6">
          {/* Why Reflow and Zoom Matter */}
          <div className="rounded-lg border-l-4 border-l-accent-green bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Why Reflow and Zoom Matter
            </h3>
            <p className="text-sm text-text-secondary">
              Low vision is far more common than blindness. Millions of users
              rely on browser zoom, text resizing, or magnification to read
              content. When layouts break at high zoom levels, these users lose
              access to information and functionality. Designing for reflow is
              designing for the largest group of users with visual disabilities.
            </p>
          </div>

          {/* The Reflow Requirement */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              The Reflow Requirement (1F.01)
            </h3>
            <p className="text-sm text-text-secondary">
              SC 1.4.10 is often described as &ldquo;400% zoom,&rdquo; but the
              actual test is:
            </p>
            <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
              <p className="text-sm text-foreground font-medium">
                1280px viewport &times; 400% zoom = 320 CSS pixels effective
                width
              </p>
            </div>
            <p className="text-sm text-text-secondary">
              At this width, content must reflow into a single column without
              horizontal scrolling. What must reflow:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>Navigation should collapse (e.g., hamburger menu)</li>
              <li>Multi-column layouts should stack vertically</li>
              <li>Images should scale down proportionally</li>
              <li>
                All text content must remain readable without side-scrolling
              </li>
            </ul>

            <p className="text-sm text-text-secondary font-medium">
              Exceptions (content requiring two-dimensional layout):
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-1"
              role="list"
            >
              <li>Data tables</li>
              <li>Complex toolbars and editing interfaces</li>
              <li>Maps and diagrams</li>
              <li>Video players</li>
            </ul>

            <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-amber-500">
              <p className="text-sm text-foreground">
                <strong>Common failures:</strong> fixed-width containers that
                cause horizontal scrolling, images with pixel widths that
                overflow, absolutely positioned content that overlaps at narrow
                widths, and navigation that doesn&apos;t collapse.
              </p>
            </div>
          </div>

          {/* Text Spacing Requirements */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Text Spacing Requirements (1F.02)
            </h3>
            <p className="text-sm text-text-secondary">
              SC 1.4.12 requires no content loss when users apply all of the
              following spacing adjustments simultaneously:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th
                      scope="col"
                      className="border border-border px-4 py-2 text-left font-semibold text-foreground"
                    >
                      Property
                    </th>
                    <th
                      scope="col"
                      className="border border-border px-4 py-2 text-left font-semibold text-foreground"
                    >
                      Required Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Line height
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      1.5&times; the font size
                    </td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="border border-border px-4 py-2">
                      Letter spacing
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      0.12&times; the font size
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Word spacing
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      0.16&times; the font size
                    </td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="border border-border px-4 py-2">
                      Paragraph spacing
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      2&times; the font size
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-accent-red">
                <p className="text-sm font-semibold text-accent-red">
                  Fixed-height containers
                </p>
                <p className="text-sm text-foreground mt-1">
                  Text inside containers with{" "}
                  <code className="rounded bg-white px-1 py-0.5 text-sm font-mono">
                    height
                  </code>{" "}
                  or{" "}
                  <code className="rounded bg-white px-1 py-0.5 text-sm font-mono">
                    max-height
                  </code>{" "}
                  combined with{" "}
                  <code className="rounded bg-white px-1 py-0.5 text-sm font-mono">
                    overflow: hidden
                  </code>{" "}
                  will be clipped when spacing increases.
                </p>
              </div>
              <div className="rounded-lg bg-surface p-4 border-l-4 border-l-accent-green">
                <p className="text-sm font-semibold text-accent-green">
                  Flexible height solution
                </p>
                <p className="text-sm text-foreground mt-1">
                  Use{" "}
                  <code className="rounded bg-white px-1 py-0.5 text-sm font-mono">
                    min-height
                  </code>{" "}
                  instead of{" "}
                  <code className="rounded bg-white px-1 py-0.5 text-sm font-mono">
                    height
                  </code>
                  , avoid{" "}
                  <code className="rounded bg-white px-1 py-0.5 text-sm font-mono">
                    overflow: hidden
                  </code>{" "}
                  on text containers, and let content grow naturally.
                </p>
              </div>
            </div>
          </div>

          {/* Orientation Support */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Orientation Support (1F.03)
            </h3>
            <p className="text-sm text-text-secondary">
              SC 1.3.4 requires content to work in both portrait and landscape
              orientations. Users with mounted devices (wheelchair mounts, bed
              mounts) may only have access to one orientation.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-surface p-4 border-l-4 border-l-accent-green">
                <p className="text-sm font-semibold text-accent-green">
                  Valid exceptions
                </p>
                <ul className="list-disc list-inside text-sm text-foreground space-y-1 mt-2">
                  <li>Piano keyboard app (needs landscape)</li>
                  <li>Bank check deposit (camera alignment)</li>
                  <li>Presentation slides in slideshow mode</li>
                </ul>
              </div>
              <div className="rounded-lg bg-surface p-4 border-l-4 border-l-accent-red">
                <p className="text-sm font-semibold text-accent-red">
                  Invalid excuses
                </p>
                <ul className="list-disc list-inside text-sm text-foreground space-y-1 mt-2">
                  <li>&ldquo;Our design looks better in portrait&rdquo;</li>
                  <li>&ldquo;Most users hold phones vertically&rdquo;</li>
                  <li>&ldquo;We only tested in one orientation&rdquo;</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Designer's Role */}
          <div className="rounded-lg border-l-4 border-l-accent-green bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              The Designer&apos;s Role
            </h3>
            <p className="text-sm text-text-secondary">
              Designers directly influence reflow and zoom outcomes through
              layout decisions. Key action items:
            </p>
            <ol className="list-decimal list-inside text-sm text-foreground space-y-2">
              <li>
                <strong>Design mobile-first</strong> &mdash; starting at 320px
                ensures reflow compliance from the beginning
              </li>
              <li>
                <strong>Use flexible layouts</strong> &mdash; percentage widths,
                flexbox, and CSS Grid with{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                  fr
                </code>{" "}
                units instead of fixed pixel widths
              </li>
              <li>
                <strong>Avoid fixed-height text containers</strong> &mdash; use{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                  min-height
                </code>{" "}
                and let text grow
              </li>
              <li>
                <strong>Test at 320px viewport</strong> &mdash; resize your
                browser or use responsive design tools to verify reflow
              </li>
              <li>
                <strong>Apply the text spacing bookmarklet</strong> &mdash;
                verify no content is lost with increased spacing
              </li>
              <li>
                <strong>Specify responsive behavior</strong> &mdash; annotate
                designs with breakpoint behavior for developers
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Assessment */}
      <div className="space-y-4">
        <h2
          id="assessment-heading"
          className="text-xl font-semibold text-foreground"
        >
          Assessment
        </h2>
        <div className="rounded-lg border border-border bg-surface p-6 space-y-3">
          <p className="text-sm text-text-secondary">
            Test your knowledge of reflow, zoom, text spacing, and orientation
            requirements.
          </p>
          <Link
            href="/week-3/l06-reflow/quiz"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Take the L06 Reflow Quiz
          </Link>
        </div>
      </div>

      {/* Up Next */}
      <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
        <p className="text-sm text-foreground">
          <strong>You have completed Week 3 lessons.</strong> Head to the{" "}
          <Link
            href="/week-3/applied-practice"
            className="text-primary-text underline hover:text-primary-dark"
          >
            Week 3 Applied Practice
          </Link>{" "}
          to put your skills to work.
        </p>
      </div>
    </div>
  );
}
