import Link from "next/link";
import type { Metadata } from "next";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

export const metadata: Metadata = {
  title: "L07: Landmarks & Navigation | DACE Cohort 2",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function L07LandmarksPage({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const access = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(access);
  const t = student?.accessToken;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-10">
      <div className="space-y-2">
        <Link
          href={withToken("/week-4", t)}
          className="text-sm text-primary-text underline hover:text-primary-dark"
        >
          &larr; Back to Week 4
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Lesson 07: Landmarks &amp; Navigation
        </h1>
        <p className="text-base text-text-secondary">
          Landmarks, skip links, and consistent navigation give users multiple
          ways to move through your designs efficiently. Screen reader users
          rely on landmarks to jump to major sections. Keyboard users depend on
          skip links to bypass repeated content. Everyone benefits from
          predictable navigation patterns.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
          Discover Badge
        </span>
        <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
          Module 1G
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
                href="https://www.figma.com/design/mNFDFtVojYP1yvNO20bhfb/DACE---Cohort-2?node-id=2332-634"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-text underline hover:text-primary-dark"
              >
                Open in Figma
              </a>
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
                Navigation Accessibility Audit
              </p>
              <Link
                href={withToken("/week-4/applied-practice", t)}
                className="text-sm text-primary-text underline hover:text-primary-dark"
              >
                View assignment
              </Link>
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
                href={withToken("/week-4/l07-landmarks/quiz", t)}
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
            src="https://player.vimeo.com/video/1160540883"
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title="Lesson 07: Landmarks & Navigation Explainer"
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
                  1G.01
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Specify landmark regions appropriately, identifying page
                  sections that should be marked as banner, navigation, main,
                  and complementary landmarks.
                </td>
              </tr>
              <tr className="bg-surface/50">
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1G.02
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Design consistent navigation patterns that appear in the
                  same relative order across pages and states.
                </td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1G.03
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Specify skip links and bypass blocks that allow users to
                  bypass repeated content.
                </td>
              </tr>
              <tr className="bg-surface/50">
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1G.04
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Apply focus order requirements so focus follows logical
                  reading and interaction sequences.
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
              <li>Six ARIA landmark roles</li>
              <li>HTML5 semantic equivalents</li>
              <li>SC 3.2.3 Consistent Navigation</li>
              <li>SC 2.4.1 Bypass Blocks methods</li>
            </ul>
          </div>
          <div className="rounded-lg bg-surface p-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Skills</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Identify all landmark regions</li>
              <li>Name duplicate landmarks uniquely</li>
              <li>Audit navigation across pages</li>
              <li>Specify skip link behavior</li>
            </ul>
          </div>
          <div className="rounded-lg bg-surface p-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">
              Application
            </h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Annotate landmarks in Figma</li>
              <li>Flag consistency issues in reviews</li>
              <li>Document skip link specs for engineering</li>
              <li>Verify focus order matches design</li>
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
              1.3.1 Info and Relationships
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Information, structure, and relationships conveyed through
              presentation can be programmatically determined. Landmarks
              communicate page structure to assistive technology. Level&nbsp;A.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              2.4.1 Bypass Blocks
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              A mechanism is available to bypass blocks of content that are
              repeated on multiple pages. Skip links, landmarks, and headings
              all satisfy this criterion. Level&nbsp;A.
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
              3.2.3 Consistent Navigation
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Navigation mechanisms repeated on multiple pages occur in the
              same relative order each time they appear. Level&nbsp;AA.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4 sm:col-span-2">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              3.2.4 Consistent Identification
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Components with the same functionality are identified
              consistently across pages (same label, same icon, same name).
              Level&nbsp;AA.
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
          {/* Landmark Regions */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Landmark Regions (1G.01)
            </h3>
            <p className="text-sm text-text-secondary">
              Landmarks are structural markers that identify major page
              sections. Screen readers let users jump directly to these
              regions, similar to how chapters work in a book.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th
                      scope="col"
                      className="border border-border px-4 py-2 text-left font-semibold text-foreground"
                    >
                      ARIA Role
                    </th>
                    <th
                      scope="col"
                      className="border border-border px-4 py-2 text-left font-semibold text-foreground"
                    >
                      HTML5 Element
                    </th>
                    <th
                      scope="col"
                      className="border border-border px-4 py-2 text-left font-semibold text-foreground"
                    >
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2 font-mono">
                      banner
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      &lt;header&gt;
                    </td>
                    <td className="border border-border px-4 py-2">
                      Site header, logo, site-wide info
                    </td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="border border-border px-4 py-2 font-mono">
                      navigation
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      &lt;nav&gt;
                    </td>
                    <td className="border border-border px-4 py-2">
                      Navigation links
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-mono">
                      main
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      &lt;main&gt;
                    </td>
                    <td className="border border-border px-4 py-2">
                      Primary page content
                    </td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="border border-border px-4 py-2 font-mono">
                      complementary
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      &lt;aside&gt;
                    </td>
                    <td className="border border-border px-4 py-2">
                      Supporting content, sidebars
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-mono">
                      contentinfo
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      &lt;footer&gt;
                    </td>
                    <td className="border border-border px-4 py-2">
                      Site footer, copyright
                    </td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="border border-border px-4 py-2 font-mono">
                      search
                    </td>
                    <td className="border border-border px-4 py-2 font-mono">
                      &lt;search&gt;
                    </td>
                    <td className="border border-border px-4 py-2">
                      Search functionality
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
              <p className="text-sm text-foreground">
                <strong>Multiple landmarks of the same type:</strong> Each
                must have a unique accessible name. Two nav elements need
                labels like &ldquo;Primary navigation&rdquo; and &ldquo;Footer
                navigation&rdquo;.
              </p>
            </div>
          </div>

          {/* Consistent Navigation */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Consistent Navigation (1G.02)
            </h3>
            <p className="text-sm text-text-secondary">
              Navigation components that appear on multiple pages must
              maintain the same relative order. Users build mental models of
              site structure, and inconsistency forces them to relearn
              navigation on each page.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-surface p-4 border-l-4 border-l-accent-green">
                <p className="text-sm font-semibold text-accent-green">
                  Consistent (correct)
                </p>
                <p className="text-sm text-foreground mt-2">
                  Page 1: Home | Products | About | Contact
                  <br />
                  Page 2: Home | Products | About | Contact
                </p>
              </div>
              <div className="rounded-lg bg-surface p-4 border-l-4 border-l-accent-red">
                <p className="text-sm font-semibold text-accent-red">
                  Inconsistent (failure)
                </p>
                <p className="text-sm text-foreground mt-2">
                  Page 1: Home | Products | About | Contact
                  <br />
                  Page 2: Home | About | Products | Contact
                </p>
              </div>
            </div>
            <p className="text-sm text-text-secondary">
              SC 3.2.4 also requires consistent identification: components
              with the same function should use the same label, icon, and
              name across pages.
            </p>
          </div>

          {/* Skip Links */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Skip Links &amp; Bypass Blocks (1G.03)
            </h3>
            <p className="text-sm text-text-secondary">
              SC 2.4.1 requires mechanisms to bypass repeated content.
              Keyboard users should not have to Tab through 50 navigation
              links on every page. Three methods satisfy this requirement:
            </p>
            <ol
              className="list-decimal list-inside text-sm text-foreground space-y-2"
            >
              <li>
                <strong>Skip links:</strong> &ldquo;Skip to main content&rdquo;
                links at page start
              </li>
              <li>
                <strong>Landmarks:</strong> Enable jumping to page regions
              </li>
              <li>
                <strong>Headings:</strong> Allow navigation via heading
                hierarchy
              </li>
            </ol>
            <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-amber-500">
              <p className="text-sm text-foreground">
                <strong>Skip link placement:</strong> Must be the first
                focusable element on the page. When activated, focus moves to
                the target region (often main content). Specify whether it is
                hidden until focus or always visible.
              </p>
            </div>
          </div>

          {/* Focus Order */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Focus Order (1G.04)
            </h3>
            <p className="text-sm text-text-secondary">
              SC 2.4.3 requires focus order to preserve meaning and
              operability. For left-to-right languages, focus typically
              follows left-to-right, top-to-bottom visual order.
            </p>
            <p className="text-sm text-text-secondary font-medium">
              Dynamic content requires focus management:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>
                <strong>Modal dialogs:</strong> Focus moves in, traps within,
                returns to trigger on close
              </li>
              <li>
                <strong>Accordions:</strong> Focus stays on trigger, expanded
                content becomes available
              </li>
              <li>
                <strong>Tab panels:</strong> Arrow keys navigate within, Tab
                moves out
              </li>
            </ul>
            <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-amber-500">
              <p className="text-sm text-foreground">
                <strong>Common failures:</strong> CSS reordering that breaks
                DOM sequence, dynamically inserted content placed at the end
                of the DOM regardless of visual position, and modals that do
                not return focus to the triggering element.
              </p>
            </div>
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
            Test your knowledge of landmark regions, consistent navigation,
            skip links, and focus order.
          </p>
          <Link
            href={withToken("/week-4/l07-landmarks/quiz", t)}
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Take the L07 Landmarks Quiz
          </Link>
        </div>
      </div>

      {/* Up Next */}
      <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
        <p className="text-sm text-foreground">
          <strong>Up next:</strong>{" "}
          <Link
            href={withToken("/week-4/l08-motion", t)}
            className="text-primary-text underline hover:text-primary-dark"
          >
            L08: Motion &amp; Animation
          </Link>{" "}
          &mdash; Reduced motion preferences, pause controls, flash
          thresholds, and motion alternatives.
        </p>
      </div>
    </div>
  );
}
