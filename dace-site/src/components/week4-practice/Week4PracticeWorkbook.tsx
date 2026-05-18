"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  getMotionNumber,
  motionItemsForPage,
  skipTargetSelectOptions,
} from "@/data/week4-practice/practice-overlays";
import {
  HTML_EQUIVALENTS,
  LANDMARK_ROLES,
  MOTION_SEEDS,
  AUTO_GRADE_SCALE,
  PRACTICE_PAGES,
  zoneDisplayName,
  zonesForPage,
  type PracticePageId,
} from "@/data/week4-practice/practice-zones";
import {
  emptyLandmarkRow,
  type MotionInventoryRow,
  type WorkbookState,
} from "@/data/week4-practice/workbook-types";
import {
  autoSelfAssessmentTotal,
  computeAutoSelfAssessment,
} from "@/lib/week4-practice-auto-grade";
import { runCoachChecks } from "@/lib/week4-practice-coach";
import { withToken } from "@/data/progress-catalog";
import {
  WEEK4_WORKBOOK_TOTAL_POINTS,
  loadWorkbookScoreMeta,
  syncWorkbookScore,
} from "@/lib/week4-practice-score";
import {
  mergeWorkbookDraft,
  migrateCurrentStep,
  resetWorkbookDraft,
  saveWorkbookDraft,
} from "@/lib/week4-practice-storage";
import PracticeSite from "./mockup/PracticeSite";
import {
  WorkbookInput,
  WorkbookLabel,
  WorkbookSelect,
  WorkbookTextarea,
  WorkbookYesNoRadio,
} from "./WorkbookField";
import { WorkbookStepper } from "./WorkbookStepper";

const STEPS = [
  "Start",
  "Landmark identification",
  "Skip links",
  "Motion",
  "Review and self-assess",
] as const;

const STEP_TITLE_CLASS = "text-xl font-semibold text-foreground m-0";

function stepNumber(stepIndex: number): number {
  return stepIndex + 1;
}

function stepHeading(stepIndex: number): string {
  return `Step ${stepNumber(stepIndex)}. ${STEPS[stepIndex]}`;
}

function backToStepLabel(targetStepIndex: number): string {
  return `Back to Step ${stepNumber(targetStepIndex)}`;
}

function continueToStepLabel(targetStepIndex: number): string {
  return `Continue to Step ${stepNumber(targetStepIndex)}`;
}

function ensureLandmarks(pageId: PracticePageId, rows: WorkbookState["landmarks"][PracticePageId]) {
  const zones = zonesForPage(pageId);
  return zones.map((z) => {
    const existing = rows.find((r) => r.zoneId === z.id);
    return existing ?? emptyLandmarkRow(z.id);
  });
}

function seedMotionInventory(): MotionInventoryRow[] {
  return MOTION_SEEDS.map((s) => ({
    id: s.id,
    element: s.label,
    intendedMotion: s.defaultDescription,
    pauseRequired: s.pauseRequired ? "yes" : "no",
    pauseControl: s.pauseRequired ? "" : "N/A",
    respectsReducedMotion: "",
    reducedMotionAlt: "",
  }));
}

/** Merge saved motion rows with current schema (drops legacy motionPlans). */
function normalizeMotionInventory(merged: WorkbookState): MotionInventoryRow[] {
  const legacyPlans = (merged as WorkbookState & { motionPlans?: { inventoryId: string; reducedMotionAlt: string }[] }).motionPlans ?? [];
  return MOTION_SEEDS.map((s) => {
    const inv = merged.motionInventory.find((m) => m.id === s.id);
    const plan = legacyPlans.find((p) => p.inventoryId === s.id);
    const legacy = inv as MotionInventoryRow & {
      durationTrigger?: string;
      reducedMotionAlt?: string;
    };
    return {
      id: s.id,
      element: s.label,
      intendedMotion: legacy?.intendedMotion ?? legacy?.durationTrigger ?? s.defaultDescription,
      pauseRequired:
        legacy?.pauseRequired === "yes" || legacy?.pauseRequired === "no"
          ? legacy.pauseRequired
          : s.pauseRequired
            ? "yes"
            : "no",
      pauseControl: (() => {
        const raw = legacy?.pauseControl ?? "";
        if (raw === "yes" || raw === "no" || raw === "N/A") return raw;
        if (!s.pauseRequired) return "N/A";
        if (typeof raw === "string" && raw.trim()) return "yes";
        return "";
      })(),
      respectsReducedMotion:
        legacy?.respectsReducedMotion === "yes" || legacy?.respectsReducedMotion === "no"
          ? legacy.respectsReducedMotion
          : legacy?.reducedMotionAlt?.trim() || plan?.reducedMotionAlt?.trim()
            ? "yes"
            : "",
      reducedMotionAlt: legacy?.reducedMotionAlt ?? plan?.reducedMotionAlt ?? "",
    };
  });
}

function prepareWorkbookState(merged: WorkbookState): WorkbookState {
  const landmarks = { ...merged.landmarks };
  for (const p of PRACTICE_PAGES) {
    landmarks[p.id] = ensureLandmarks(p.id, landmarks[p.id] ?? []);
  }
  const motionInventory =
    merged.motionInventory.length > 0
      ? normalizeMotionInventory(merged)
      : seedMotionInventory();
  return {
    ...merged,
    landmarks,
    motionInventory,
    currentStep: migrateCurrentStep(merged.currentStep),
  };
}

export default function Week4PracticeWorkbook({
  accessToken,
  studentDisplayName,
  previewMode = true,
  livePracticeHref,
}: {
  accessToken?: string;
  studentDisplayName?: string;
  previewMode?: boolean;
  /** Instructor preview: link to unchanged live applied practice page. */
  livePracticeHref?: string;
}) {
  const [state, setState] = useState<WorkbookState>(() =>
    prepareWorkbookState(mergeWorkbookDraft(accessToken))
  );

  const [landmarkPage, setLandmarkPage] = useState<PracticePageId>("home");
  const [skipTabPage, setSkipTabPage] = useState<PracticePageId>("home");
  const [motionPage, setMotionPage] = useState<PracticePageId>("home");
  const [attemptNumber, setAttemptNumber] = useState(
    () => loadWorkbookScoreMeta(accessToken).attemptNumber
  );
  const [bestScore, setBestScore] = useState<number | null>(() => {
    const meta = loadWorkbookScoreMeta(accessToken);
    return meta.bestScore > 0 ? meta.bestScore : null;
  });
  const [scoreSyncStatus, setScoreSyncStatus] = useState<string | null>(null);

  const persist = useCallback(
    (next: WorkbookState) => {
      setState(next);
      saveWorkbookDraft(next, accessToken);
    },
    [accessToken]
  );

  useEffect(() => {
    saveWorkbookDraft(state, accessToken);
  }, [state, accessToken]);

  const coachChecks = useMemo(() => runCoachChecks(state), [state]);
  const coachPassCount = coachChecks.filter((c) => c.pass).length;
  const autoGrades = useMemo(() => computeAutoSelfAssessment(state), [state]);
  const selfTotal = autoSelfAssessmentTotal(autoGrades);

  useEffect(() => {
    if (!studentDisplayName?.trim()) return;
    const timer = window.setTimeout(() => {
      void syncWorkbookScore({
        score: selfTotal,
        studentDisplayName,
        accessToken,
        attemptNumber,
      }).then((meta) => {
        setBestScore(meta.bestScore > 0 ? meta.bestScore : null);
        setScoreSyncStatus(
          `Score saved to course home (${meta.bestScore}/${WEEK4_WORKBOOK_TOTAL_POINTS} best)`
        );
      });
    }, 500);
    return () => window.clearTimeout(timer);
  }, [selfTotal, state, studentDisplayName, accessToken, attemptNumber]);

  const handleRetake = useCallback(() => {
    resetWorkbookDraft(accessToken);
    const fresh = prepareWorkbookState(mergeWorkbookDraft(accessToken));
    setAttemptNumber((n) => n + 1);
    setState({ ...fresh, currentStep: 0 });
    setScoreSyncStatus(null);
    setLandmarkPage("home");
    setSkipTabPage("home");
    setMotionPage("home");
  }, [accessToken]);

  const step = state.currentStep;

  const goStep = (n: number) => {
    persist({ ...state, currentStep: Math.max(0, Math.min(n, STEPS.length - 1)) });
  };

  const updateLandmark = (
    pageId: PracticePageId,
    zoneId: string,
    field: keyof WorkbookState["landmarks"]["home"][0],
    value: string
  ) => {
    const rows = state.landmarks[pageId].map((r) =>
      r.zoneId === zoneId ? { ...r, [field]: value } : r
    );
    persist({
      ...state,
      landmarks: { ...state.landmarks, [pageId]: rows },
    });
  };

  const copyLandmarksFromHome = (target: PracticePageId) => {
    const homeByZone = new Map(state.landmarks.home.map((r) => [r.zoneId, r]));
    const rows = ensureLandmarks(target, []).map((row) => {
      const fromHome = homeByZone.get(row.zoneId);
      return fromHome ? { ...fromHome } : row;
    });
    persist({
      ...state,
      landmarks: { ...state.landmarks, [target]: rows },
    });
  };

  return (
    <div className="space-y-8">
      <WorkbookStepper
        steps={STEPS}
        currentStep={step}
        stepHeading={stepHeading}
        onStepChange={goStep}
        stepTabClassName={(i) =>
          `rounded-full px-3 py-1.5 text-xs font-medium border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
            step === i
              ? "bg-primary text-white border-primary"
              : i < step
                ? "bg-accent-green/10 text-accent-green border-accent-green/30"
                : "bg-white text-text-secondary border-border"
          }`
        }
      />

      <div aria-live="polite" className="sr-only">
        {stepHeading(step)} ({stepNumber(step)} of {STEPS.length})
      </div>

      {step === 0 && (
        <section className="space-y-6" aria-labelledby="workbook-title">
          {previewMode ? (
            <div
              role="status"
              className="rounded-lg border-2 border-amber-500 bg-amber-50 px-4 py-3 text-sm text-foreground"
            >
              <p className="font-semibold m-0 mb-1">
                Instructor preview — not the student assignment yet
              </p>
              <p className="m-0 text-text-secondary">
                Review the Northstar Shop mockup and workbook here. The public{" "}
                {livePracticeHref ? (
                  <Link href={livePracticeHref} className="text-primary-text underline">
                    applied practice page
                  </Link>
                ) : (
                  "applied practice page"
                )}{" "}
                still uses the Figma workflow until you approve this sample.
              </p>
            </div>
          ) : null}

          <header className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {previewMode ? (
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900">
                  Preview
                </span>
              ) : null}
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                Discover Badge
              </span>
              <span className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-sm font-medium text-accent-green">
                20 Points (auto-graded)
              </span>
            </div>
            <h1 id="workbook-title" className="text-3xl font-bold tracking-tight text-foreground m-0">
              Week 4: Structure &amp; Motion Workbook
              {previewMode ? " (sample)" : ""}
            </h1>
            <p className="text-base text-text-secondary max-w-3xl m-0">
              Landmarks, navigation consistency, skip links, and motion planning on a
              built-in practice site. Your score updates on the course home table as you
              work, like a quiz.
              {previewMode ? " (instructor preview of the student workbook.)" : ""}
            </p>
          </header>

          {previewMode ? (
            <section
              className="rounded-lg border border-border bg-surface p-4 text-sm text-text-secondary"
              aria-labelledby="review-heading"
            >
              <h2 id="review-heading" className="text-base font-semibold text-foreground mt-0 mb-2">
                What to review before approving
              </h2>
              <ul className="list-disc list-inside space-y-1 m-0">
                <li>Is one footer landmark (links + copyright) clear on all three pages?</li>
                <li>Do first-Tab focus answers after skip link feel like real assessment?</li>
                <li>Does the single Motion step (spec + prefers-reduced-motion) assess enough?</li>
                <li>Does auto-grading match the rubric (4 / 3 / 2 / 1) fairly for your cohort?</li>
              </ul>
            </section>
          ) : null}

          <button
            type="button"
            onClick={() => goStep(1)}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
          >
            {continueToStepLabel(1)}
          </button>
        </section>
      )}

      {step === 1 && (
        <section className="space-y-4" aria-labelledby="step-page-heading">
          <h1 id="step-page-heading" className={STEP_TITLE_CLASS}>
            {stepHeading(1)}
          </h1>
          <p className="text-sm text-text-secondary">
            Use the numbered regions on the mockup below. For each zone, choose the
            ARIA role and HTML equivalent (required for auto-grading). Add an accessible
            name only when the pattern requires one. Zone numbers match the dashed borders.
          </p>
          <PracticeSite
            overlayMode="landmark"
            showLegend
            pageId={landmarkPage}
            onPageChange={setLandmarkPage}
          />
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-foreground">Page:</span>
            {PRACTICE_PAGES.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setLandmarkPage(p.id)}
                className={`rounded-lg px-3 py-1.5 text-sm border ${
                  landmarkPage === p.id
                    ? "bg-primary text-white border-primary"
                    : "border-border bg-white"
                }`}
              >
                {p.label}
              </button>
            ))}
            {landmarkPage !== "home" && (
              <button
                type="button"
                onClick={() => copyLandmarksFromHome(landmarkPage)}
                className="text-sm text-primary-text underline"
              >
                Copy landmark roles from Home
              </button>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-surface">
                  <th scope="col" className="border border-border px-2 py-2 text-left">
                    Zone
                  </th>
                  <th scope="col" className="border border-border px-2 py-2 text-left">
                    ARIA role <span className="text-accent-green">*</span>
                  </th>
                  <th scope="col" className="border border-border px-2 py-2 text-left">
                    Accessible name
                  </th>
                  <th scope="col" className="border border-border px-2 py-2 text-left">
                    HTML <span className="text-accent-green">*</span>
                  </th>
                  <th scope="col" className="border border-border px-2 py-2 text-left">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {state.landmarks[landmarkPage].map((row) => {
                  const zone = zonesForPage(landmarkPage).find((z) => z.id === row.zoneId)!;
                  const zoneName = zoneDisplayName(row.zoneId, landmarkPage);
                  return (
                    <tr key={row.zoneId}>
                      <td className="border border-border px-2 py-2">
                        <span className="font-medium text-foreground">{zoneName}</span>
                        <span className="block text-xs text-text-secondary">{zone.description}</span>
                      </td>
                      <td className="border border-border px-2 py-2">
                        <WorkbookSelect
                          id={`role-${landmarkPage}-${row.zoneId}`}
                          value={row.role}
                          onChange={(e) =>
                            updateLandmark(landmarkPage, row.zoneId, "role", e.target.value)
                          }
                          aria-label={`ARIA role for ${zoneName}`}
                        >
                          <option value="">Select…</option>
                          {LANDMARK_ROLES.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </WorkbookSelect>
                      </td>
                      <td className="border border-border px-2 py-2">
                        <WorkbookInput
                          id={`name-${landmarkPage}-${row.zoneId}`}
                          value={row.accessibleName}
                          onChange={(e) =>
                            updateLandmark(
                              landmarkPage,
                              row.zoneId,
                              "accessibleName",
                              e.target.value
                            )
                          }
                          aria-label={`Accessible name for ${zoneName}`}
                          placeholder="If needed"
                        />
                      </td>
                      <td className="border border-border px-2 py-2">
                        <WorkbookSelect
                          id={`html-${landmarkPage}-${row.zoneId}`}
                          value={row.htmlEquivalent}
                          onChange={(e) =>
                            updateLandmark(
                              landmarkPage,
                              row.zoneId,
                              "htmlEquivalent",
                              e.target.value
                            )
                          }
                          aria-label={`HTML equivalent for ${zoneName}`}
                        >
                          <option value="">Select…</option>
                          {HTML_EQUIVALENTS.map((h) => (
                            <option key={h} value={h}>
                              {h}
                            </option>
                          ))}
                        </WorkbookSelect>
                      </td>
                      <td className="border border-border px-2 py-2">
                        <WorkbookInput
                          id={`notes-${landmarkPage}-${row.zoneId}`}
                          value={row.notes}
                          onChange={(e) =>
                            updateLandmark(landmarkPage, row.zoneId, "notes", e.target.value)
                          }
                          aria-label={`Notes for ${zoneName}`}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => goStep(0)} className="text-sm underline text-primary-text">
              {backToStepLabel(0)}
            </button>
            <button
              type="button"
              onClick={() => goStep(2)}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
            >
              {continueToStepLabel(2)}
            </button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="space-y-4" aria-labelledby="step-page-heading">
          <h1 id="step-page-heading" className={STEP_TITLE_CLASS}>
            {stepHeading(2)}
          </h1>
          <p className="text-sm text-text-secondary">
            Trace where focus lands in the mockup after skip link activation and one Tab
            press on each page.
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            First Tab stop after skip link
          </h2>
          <p className="text-sm text-text-secondary">
            Assume your skip link moves focus to the main content region (
            <code className="text-xs">#main-content</code>). On each page, what is the
            first element that receives focus when you press Tab once from there? Choose
            the matching numbered target from the mockup (amber outlines).
          </p>
          <PracticeSite
            overlayMode="skipNav"
            showLegend
            pageId={skipTabPage}
            onPageChange={setSkipTabPage}
          />
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="border border-border px-3 py-2 text-left">
                  Page
                </th>
                <th scope="col" className="border border-border px-3 py-2 text-left w-px whitespace-nowrap">
                  First element after one Tab <span className="text-accent-green">*</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {PRACTICE_PAGES.map((p) => (
                <tr key={p.id}>
                  <td className="border border-border px-3 py-2 font-medium">{p.label}</td>
                  <td className="border border-border px-3 py-2 w-px">
                    <WorkbookSelect
                      id={`skip-first-tab-${p.id}`}
                      value={state.skipLinkFirstTab[p.id]}
                      onChange={(e) =>
                        persist({
                          ...state,
                          skipLinkFirstTab: {
                            ...state.skipLinkFirstTab,
                            [p.id]: e.target.value,
                          },
                        })
                      }
                      aria-label={`First Tab stop on ${p.label} after skip link`}
                    >
                      <option value="">Select target…</option>
                      {skipTargetSelectOptions(p.id).map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </WorkbookSelect>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex gap-3">
            <button type="button" onClick={() => goStep(1)} className="text-sm underline text-primary-text">
              {backToStepLabel(1)}
            </button>
            <button
              type="button"
              onClick={() => goStep(3)}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
            >
              {continueToStepLabel(3)}
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="space-y-4" aria-labelledby="step-page-heading">
          <h1 id="step-page-heading" className={STEP_TITLE_CLASS}>
            {stepHeading(3)}
          </h1>
          <p className="text-sm text-text-secondary">
            The mockup is static (no animation plays). Switch pages to answer each
            motion target; numbering starts at 1 on every page. Describe how the live
            site respects{" "}
            <code className="text-xs">prefers-reduced-motion</code> with a static
            alternative.
          </p>
          <PracticeSite
            overlayMode="motion"
            showLegend
            pageId={motionPage}
            onPageChange={setMotionPage}
          />
          {motionItemsForPage(motionPage).map((seed) => {
            const row = state.motionInventory.find((m) => m.id === seed.id);
            if (!row) return null;
            const i = state.motionInventory.findIndex((m) => m.id === seed.id);
            return (
              <div
                key={row.id}
                className="rounded-lg border border-border p-4 space-y-3"
              >
                <div>
                  <p className="font-medium text-foreground m-0">
                    {getMotionNumber(row.id, motionPage)}. {row.element}
                  </p>
                  <p className="text-xs text-text-secondary m-0 mt-1">{seed.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground m-0 mb-1">
                    Intended motion (from spec)
                  </p>
                  <p className="text-sm text-text-secondary m-0 rounded-md bg-surface border border-border px-3 py-2">
                    {row.intendedMotion}
                  </p>
                </div>
                {seed?.pauseRequired ? (
                  <WorkbookYesNoRadio
                    name={`pause-choice-${row.id}`}
                    legend="Pause, stop, or hide control"
                    required
                    hint="Auto-playing content must provide a user control (WCAG 2.2.2)."
                    value={row.pauseControl === "yes" || row.pauseControl === "no" ? row.pauseControl : ""}
                    onChange={(pauseControl) => {
                      const motionInventory = [...state.motionInventory];
                      motionInventory[i] = { ...row, pauseControl };
                      persist({ ...state, motionInventory });
                    }}
                  />
                ) : null}
                <WorkbookYesNoRadio
                  name={`rm-choice-${row.id}`}
                  legend="Respects prefers-reduced-motion"
                  required
                  hint="Does the live site disable or replace this motion when the user has reduced motion enabled?"
                  value={row.respectsReducedMotion}
                  onChange={(respectsReducedMotion) => {
                    const motionInventory = [...state.motionInventory];
                    motionInventory[i] = { ...row, respectsReducedMotion };
                    persist({ ...state, motionInventory });
                  }}
                />
              </div>
            );
          })}
          <div className="flex gap-3">
            <button type="button" onClick={() => goStep(2)} className="text-sm underline text-primary-text">
              {backToStepLabel(2)}
            </button>
            <button
              type="button"
              onClick={() => goStep(4)}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
            >
              {continueToStepLabel(4)}
            </button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="space-y-6" aria-labelledby="step-page-heading">
          <h1 id="step-page-heading" className={STEP_TITLE_CLASS}>
            {stepHeading(4)}
          </h1>

          <div className="rounded-lg border border-border p-4 space-y-2">
            <h2 className="text-base font-semibold text-foreground m-0">Coach checks</h2>
            <p className="text-sm text-text-secondary m-0">
              {coachPassCount} of {coachChecks.length} checks passing. Item-level feedback
              below drives your auto-graded score.
            </p>
            <ul className="list-none m-0 p-0 space-y-2 max-h-64 overflow-y-auto">
              {coachChecks.map((c) => (
                <li
                  key={c.id}
                  className={`text-sm pl-3 border-l-4 ${
                    c.pass ? "border-accent-green" : "border-amber-500"
                  }`}
                >
                  {c.message}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-base font-semibold text-foreground">Auto-graded score</h2>
            <p className="text-sm text-text-secondary m-0">
              20 points total (5 categories × 4 points). Passing is 10+. Scores update
              automatically from your answers.
            </p>
            <div className="rounded-lg border border-border bg-surface p-3 text-xs text-text-secondary">
              <p className="font-semibold text-foreground m-0 mb-2">Scoring scale</p>
              <ul className="list-none m-0 p-0 space-y-1">
                {AUTO_GRADE_SCALE.map((level) => (
                  <li key={level.score}>
                    <span className="font-mono text-foreground">{level.score}</span> —{" "}
                    {level.label}: {level.description}
                  </li>
                ))}
              </ul>
            </div>
            {autoGrades.map((grade) => (
              <div
                key={grade.criterionId}
                className="rounded-lg border border-border p-4 space-y-3"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground m-0">
                    {grade.label} ({grade.outcome})
                  </p>
                  <p className="text-lg font-bold text-foreground m-0">
                    {grade.score}{" "}
                    <span className="text-sm font-normal text-text-secondary">/ 4</span>
                  </p>
                </div>
                <p className="text-sm text-foreground m-0">{grade.explanation}</p>
                <p className="text-xs text-text-secondary m-0">
                  {grade.passedCount} of {grade.totalCount} items correct
                  {grade.omittedCount > 0 ? ` · ${grade.omittedCount} omitted` : ""}
                </p>
                <ul className="list-none m-0 p-0 space-y-1 max-h-40 overflow-y-auto">
                  {grade.items.map((item) => (
                    <li
                      key={item.id}
                      className={`text-xs pl-3 border-l-4 ${
                        !item.answered
                          ? "border-amber-500"
                          : item.pass
                            ? "border-accent-green"
                            : "border-amber-500"
                      }`}
                    >
                      {item.label}
                      {!item.answered
                        ? " — omitted"
                        : item.pass
                          ? " — correct"
                          : " — needs fix"}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-lg font-semibold text-foreground">
              Your total: {selfTotal} / {WEEK4_WORKBOOK_TOTAL_POINTS}
              {selfTotal >= 10 ? (
                <span className="text-accent-green text-base font-normal ml-2">
                  (meets passing threshold)
                </span>
              ) : (
                <span className="text-text-secondary text-base font-normal ml-2">
                  (passing is 10+)
                </span>
              )}
            </p>
            {bestScore !== null && bestScore !== selfTotal && (
              <p className="text-sm text-text-secondary m-0">
                Best score: {bestScore}/{WEEK4_WORKBOOK_TOTAL_POINTS}
              </p>
            )}
            <p className="text-sm text-text-secondary m-0">
              Attempt {attemptNumber}. Retake as often as you like; your best score is
              kept on the course home table, like a quiz.
            </p>
            {studentDisplayName ? (
              <p className="text-sm text-foreground m-0" role="status">
                {scoreSyncStatus ?? "Saving score to course home…"}
              </p>
            ) : (
              <p className="text-sm text-text-secondary m-0">
                Open this workbook from your personal course home link so your score can
                be saved.
              </p>
            )}
            {studentDisplayName ? (
              <p className="text-sm m-0">
                <Link
                  href={withToken("/", accessToken)}
                  className="text-primary-text underline hover:text-primary-dark"
                >
                  View course home
                </Link>
              </p>
            ) : null}
          </div>

          {previewMode ? (
            <p className="text-sm text-text-secondary m-0 rounded-lg border border-border bg-surface px-4 py-3">
              <strong className="text-foreground">Instructor preview.</strong> Scores
              still post to the course home table when you use a student access token,
              same as the live workbook.
            </p>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleRetake}
              className="rounded-lg border-2 border-primary bg-white px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary/10"
            >
              Retake workbook
            </button>
            <button type="button" onClick={() => goStep(3)} className="text-sm underline text-primary-text py-2.5">
              {backToStepLabel(3)}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
