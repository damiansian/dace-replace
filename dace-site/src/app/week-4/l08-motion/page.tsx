import Link from "next/link";
import type { Metadata } from "next";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

export const metadata: Metadata = {
  title: "L08: Motion & Animation | DACE Cohort 2",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function L08MotionPage({ searchParams }: PageProps) {
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
          Lesson 08: Motion &amp; Animation
        </h1>
        <p className="text-base text-text-secondary">
          Motion and animation can enhance user experience, but they can also
          cause real harm. Users with vestibular disorders experience
          dizziness and nausea from parallax effects. Flashing content can
          trigger seizures. Auto-playing videos and carousels distract users
          with attention-related disabilities.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
          Discover Badge
        </span>
        <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
          Module 1H
        </span>
        <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-medium text-text-secondary">
          Online / Self-paced
        </span>
      </div>

      {/* Format note */}
      <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
        <p className="text-sm text-foreground">
          <strong>This is an online, self-paced lesson with quiz-only
            assessment.</strong>{" "}
          Watch the video, work through the lesson in Figma, and complete the
          knowledge check. There is no separate applied skill project for
          L08; the Week 4 applied practice covers L07 only.
        </p>
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
                href="https://www.figma.com/design/mNFDFtVojYP1yvNO20bhfb/DACE---Cohort-2?node-id=2332-635"
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
                href={withToken("/week-4/l08-motion/quiz", t)}
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
            src="https://player.vimeo.com/video/1160545371"
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title="Lesson 08: Motion & Animation Explainer"
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
                  1H.01
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Apply reduced motion requirements by designing alternatives
                  that respect user motion preferences.
                </td>
              </tr>
              <tr className="bg-surface/50">
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1H.02
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Identify pause, stop, and hide requirements for moving or
                  auto-updating content, including flash safety thresholds.
                </td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3 font-mono text-sm text-text-secondary">
                  1H.03
                </td>
                <td className="border border-border px-4 py-3 text-foreground">
                  Design motion alternatives that preserve essential meaning
                  when animations are disabled or reduced.
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
              <li>prefers-reduced-motion media query</li>
              <li>5-second rule (SC 2.2.2)</li>
              <li>3 flashes per second limit</li>
              <li>Essential vs. decorative motion</li>
            </ul>
          </div>
          <div className="rounded-lg bg-surface p-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Skills</h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Identify auto-playing content</li>
              <li>Spot unsafe flash rates</li>
              <li>Classify motion as essential or decorative</li>
              <li>Test with reduced motion enabled</li>
            </ul>
          </div>
          <div className="rounded-lg bg-surface p-4 space-y-2">
            <h3 className="text-sm font-semibold text-foreground">
              Application
            </h3>
            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
              <li>Annotate pause controls in designs</li>
              <li>Document reduced-motion alternatives</li>
              <li>Flag motion issues in reviews</li>
              <li>Communicate seizure risks clearly</li>
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
              2.2.2 Pause, Stop, Hide
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Moving, blinking, or auto-updating content that starts
              automatically, lasts more than 5 seconds, and is presented
              alongside other content must have a mechanism to pause, stop,
              or hide it. Level&nbsp;A.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              2.3.1 Three Flashes or Below Threshold
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Web pages do not contain anything that flashes more than three
              times in any one second period. Level&nbsp;A.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4 sm:col-span-2">
            <p className="font-mono text-sm font-semibold text-primary-dark">
              2.3.3 Animation from Interactions
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Motion animation triggered by interaction can be disabled,
              unless the animation is essential to the functionality or
              information being conveyed. Level&nbsp;AAA.
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
          {/* Why Motion Accessibility Matters */}
          <div className="rounded-lg border-l-4 border-l-accent-red bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Why Motion Accessibility Matters
            </h3>
            <p className="text-sm text-text-secondary">
              Motion on screen can cause real physical harm. Unlike many
              accessibility issues that create inconvenience, motion problems
              can trigger medical conditions.
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-2"
              role="list"
            >
              <li>
                <strong>Vestibular disorders:</strong> Parallax scrolling and
                animated transitions cause dizziness, nausea, and
                disorientation
              </li>
              <li>
                <strong>Seizure disorders:</strong> Flashing content can
                trigger photosensitive epileptic seizures
              </li>
              <li>
                <strong>Attention disabilities:</strong> Auto-playing videos
                and carousels distract from primary content
              </li>
              <li>
                <strong>Cognitive disabilities:</strong> Complex animations
                increase cognitive load and confusion
              </li>
            </ul>
            <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-accent-red">
              <p className="text-sm text-foreground">
                <strong>Critical:</strong> Motion-triggered seizures can be
                life-threatening. This is not about user preference. It is
                about safety.
              </p>
            </div>
          </div>

          {/* The 5-Second Rule */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              The 5-Second Rule (1H.02)
            </h3>
            <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
              <p className="text-sm text-foreground font-medium">
                Any automatic movement that lasts more than 5 seconds must
                have a mechanism to pause, stop, or hide it.
              </p>
            </div>
            <p className="text-sm text-text-secondary">
              SC 2.2.2 applies to content that:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-1"
              role="list"
            >
              <li>
                <strong>Starts automatically</strong> (not triggered by user
                action)
              </li>
              <li>
                <strong>Lasts more than 5 seconds</strong>
              </li>
              <li>
                <strong>Appears alongside other content</strong> (not the only
                thing on screen)
              </li>
            </ul>
            <p className="text-sm text-text-secondary font-medium">
              Common examples requiring pause controls:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-1"
              role="list"
            >
              <li>Auto-playing video backgrounds</li>
              <li>Carousels and slideshows</li>
              <li>Animated illustrations or mascots</li>
              <li>Parallax scrolling effects</li>
              <li>Loading animations longer than 5 seconds</li>
            </ul>
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-lg bg-surface p-4 border-l-4 border-l-accent-green">
                <p className="text-sm font-semibold text-accent-green">
                  Compliant
                </p>
                <ul className="list-disc list-inside text-sm text-foreground space-y-1 mt-2">
                  <li>Visible pause/play button</li>
                  <li>Animation stops within 5 seconds</li>
                  <li>User-initiated animation only</li>
                </ul>
              </div>
              <div className="rounded-lg bg-surface p-4 border-l-4 border-l-accent-red">
                <p className="text-sm font-semibold text-accent-red">
                  Failure
                </p>
                <ul className="list-disc list-inside text-sm text-foreground space-y-1 mt-2">
                  <li>Infinite looping with no controls</li>
                  <li>Pause only works for current page</li>
                  <li>Controls hidden or hard to find</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reduced Motion */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Reduced Motion Preferences (1H.01)
            </h3>
            <p className="text-sm text-text-secondary">
              Users can set a &ldquo;reduce motion&rdquo; preference in their
              operating system settings. Designs must honor this preference
              using the{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">
                prefers-reduced-motion
              </code>{" "}
              media query.
            </p>
            <p className="text-sm text-text-secondary font-medium">
              When reduced motion is enabled:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-1"
              role="list"
            >
              <li>Replace animations with instant state changes</li>
              <li>Disable parallax scrolling effects</li>
              <li>Stop auto-playing videos (or show static poster)</li>
              <li>Use simple fades instead of complex transitions</li>
            </ul>
            <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
              <p className="text-sm text-foreground">
                <strong>Designer&apos;s role:</strong> Document in your specs
                how each animation should behave when prefers-reduced-motion
                is enabled. Do not leave this for engineering to guess.
              </p>
            </div>
          </div>

          {/* Flash Thresholds */}
          <div className="rounded-lg border-l-4 border-l-accent-red bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Seizure Risk and Flash Thresholds (1H.02)
            </h3>
            <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-accent-red">
              <p className="text-sm text-foreground">
                <strong>Hard limit:</strong> Content must not flash more than
                3 times per second. This threshold exists because flashing
                can trigger seizures in people with photosensitive epilepsy.
              </p>
            </div>
            <p className="text-sm text-text-secondary font-medium">
              What counts as a flash:
            </p>
            <ul
              className="list-disc list-inside text-sm text-foreground space-y-1"
              role="list"
            >
              <li>Rapid alternation between light and dark</li>
              <li>Strobe effects or blinking elements</li>
              <li>Video content with rapid scene changes</li>
              <li>Animated GIFs with quick frame transitions</li>
            </ul>
            <p className="text-sm text-text-secondary">
              The flash threshold applies when the flashing area is large
              enough: more than 25% of 10 degrees of visual field (roughly
              341&times;256 pixels at typical viewing distance). Small,
              isolated flashing elements may be acceptable, but always err on
              the side of caution.
            </p>
            <div className="rounded-lg bg-amber-50 p-4 border-l-4 border-l-amber-500">
              <p className="text-sm text-foreground">
                <strong>Red flash is especially dangerous.</strong>{" "}
                Saturated red flashing is particularly likely to trigger
                seizures. Avoid red strobing effects entirely.
              </p>
            </div>
          </div>

          {/* Motion Alternatives */}
          <div className="rounded-lg border-l-4 border-l-primary bg-white border border-border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Designing Motion Alternatives (1H.03)
            </h3>
            <p className="text-sm text-text-secondary">
              When animation communicates meaning, you need a reduced-motion
              alternative that preserves that meaning without the motion.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
                <p className="text-sm font-semibold text-foreground">
                  Essential motion
                </p>
                <p className="text-sm text-text-secondary mt-2">
                  Progress indicators, state changes, drag-and-drop feedback.
                  These communicate function, so a reduced-motion alternative
                  must preserve the same information (for example, a static
                  progress bar with a percentage label).
                </p>
              </div>
              <div className="rounded-lg bg-surface p-4 border-l-4 border-l-accent-green">
                <p className="text-sm font-semibold text-accent-green">
                  Decorative motion
                </p>
                <p className="text-sm text-text-secondary mt-2">
                  Hover effects, page transitions, background animations.
                  These can be disabled entirely when reduced motion is
                  active without losing functionality.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-surface p-4 border-l-4 border-l-accent-green">
              <p className="text-sm text-foreground">
                <strong>Document alternatives in specs.</strong> For each
                animation, specify: &ldquo;When prefers-reduced-motion is
                enabled, replace this animation with [alternative
                approach].&rdquo;
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
            Test your knowledge of reduced motion preferences, the 5-second
            rule, flash thresholds, and motion alternatives.
          </p>
          <Link
            href={withToken("/week-4/l08-motion/quiz", t)}
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Take the L08 Motion Quiz
          </Link>
        </div>
      </div>

      {/* Up Next */}
      <div className="rounded-lg bg-surface p-4 border-l-4 border-l-primary">
        <p className="text-sm text-foreground">
          <strong>You have completed the Discover Badge lessons.</strong>{" "}
          Finish the{" "}
          <Link
            href={withToken("/week-4/applied-practice", t)}
            className="text-primary-text underline hover:text-primary-dark"
          >
            Week 4 Applied Practice
          </Link>{" "}
          before the{" "}
          <Link
            href={withToken("/badge-1/exam", t)}
            className="text-primary-text underline hover:text-primary-dark"
          >
            Discover Badge Final Assessment
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
