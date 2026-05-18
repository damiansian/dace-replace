"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  HTML_EQUIVALENTS,
  LANDMARK_ROLES,
  MOTION_SEEDS,
  MASTERY_SCALE,
  PRACTICE_PAGES,
  SELF_ASSESSMENT_CRITERIA,
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
  buildExportPayload,
  runCoachChecks,
  selfAssessmentTotal,
} from "@/lib/week4-practice-coach";
import {
  mergeWorkbookDraft,
  saveWorkbookDraft,
} from "@/lib/week4-practice-storage";
import PracticeSite from "./mockup/PracticeSite";
import {
  WorkbookInput,
  WorkbookLabel,
  WorkbookSelect,
  WorkbookTextarea,
} from "./WorkbookField";

const STEPS = [
  "Explore practice site",
  "Landmark identification",
  "Skip links",
  "Motion",
  "Review and self-assess",
] as const;

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
      pauseControl: legacy?.pauseControl ?? (s.pauseRequired ? "" : "N/A"),
      reducedMotionAlt: legacy?.reducedMotionAlt ?? plan?.reducedMotionAlt ?? "",
    };
  });
}

export default function Week4PracticeWorkbook({
  accessToken,
  studentDisplayName,
  previewMode = true,
}: {
  accessToken?: string;
  studentDisplayName?: string;
  previewMode?: boolean;
}) {
  const [state, setState] = useState<WorkbookState>(() => {
    const merged = mergeWorkbookDraft(accessToken);
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
    };
  });

  const [previewPage, setPreviewPage] = useState<PracticePageId>("home");
  const [landmarkPage, setLandmarkPage] = useState<PracticePageId>("home");
  const [skipTabPage, setSkipTabPage] = useState<PracticePageId>("home");
  const [exportStatus, setExportStatus] = useState<string | null>(null);

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
  const selfTotal = selfAssessmentTotal(state.selfAssessment);

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

  const handleExport = () => {
    const payload = buildExportPayload(state, studentDisplayName);
    const json = JSON.stringify(payload, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "week-4-practice-audit.json";
    a.click();
    URL.revokeObjectURL(url);
    setExportStatus("Downloaded week-4-practice-audit.json");
    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(json);
      setExportStatus("Downloaded JSON and copied to clipboard.");
    }
  };

  return (
    <div className="space-y-8">
      <nav aria-label="Workbook progress">
        <ol className="flex flex-wrap gap-2 list-none m-0 p-0">
          {STEPS.map((label, i) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => goStep(i)}
                aria-current={step === i ? "step" : undefined}
                className={`rounded-full px-3 py-1.5 text-xs font-medium border ${
                  step === i
                    ? "bg-primary text-white border-primary"
                    : i < step
                      ? "bg-accent-green/10 text-accent-green border-accent-green/30"
                      : "bg-white text-text-secondary border-border"
                }`}
              >
                {i + 1}. {label}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div aria-live="polite" className="sr-only">
        Step {step + 1} of {STEPS.length}: {STEPS[step]}
      </div>

      {step === 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Explore the practice site</h2>
          <p className="text-sm text-text-secondary">
            Northstar Shop is a simplified three-page mockup. Numbered dashed borders
            mark regions you will identify in the next step (roles are not labeled).
            Motion is described in text only (nothing auto-plays).
          </p>
          <PracticeSite
            showZoneLegend
            pageId={previewPage}
            onPageChange={setPreviewPage}
          />
          <button
            type="button"
            onClick={() => goStep(1)}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
          >
            Continue to landmarks
          </button>
        </section>
      )}

      {step === 1 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Landmark identification</h2>
          <p className="text-sm text-text-secondary">
            Use the numbered regions on the mockup below. For each zone, choose the
            ARIA role, accessible name (only when the pattern requires one), and
            HTML equivalent. Zone numbers match the dashed borders on the site.
          </p>
          <PracticeSite
            showZoneLegend={false}
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
                    ARIA role
                  </th>
                  <th scope="col" className="border border-border px-2 py-2 text-left">
                    Accessible name
                  </th>
                  <th scope="col" className="border border-border px-2 py-2 text-left">
                    HTML
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
              Back
            </button>
            <button
              type="button"
              onClick={() => goStep(2)}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Continue
            </button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Skip links</h2>
          <p className="text-sm text-text-secondary">
            Specify how the skip link works, then trace where focus lands in the mockup
            after skip link activation and one Tab press.
          </p>
          <h3 className="text-lg font-semibold text-foreground">Skip link specification</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <WorkbookLabel htmlFor="skip-label">Link text</WorkbookLabel>
              <WorkbookInput
                id="skip-label"
                value={state.skipLink.label}
                onChange={(e) =>
                  persist({
                    ...state,
                    skipLink: { ...state.skipLink, label: e.target.value },
                  })
                }
              />
            </div>
            <div>
              <WorkbookLabel htmlFor="skip-target">Destination id</WorkbookLabel>
              <WorkbookInput
                id="skip-target"
                value={state.skipLink.targetId}
                onChange={(e) =>
                  persist({
                    ...state,
                    skipLink: { ...state.skipLink, targetId: e.target.value },
                  })
                }
              />
            </div>
            <div className="sm:col-span-2">
              <WorkbookLabel htmlFor="skip-placement">Placement</WorkbookLabel>
              <WorkbookInput
                id="skip-placement"
                value={state.skipLink.placement}
                onChange={(e) =>
                  persist({
                    ...state,
                    skipLink: { ...state.skipLink, placement: e.target.value },
                  })
                }
              />
            </div>
            <div>
              <WorkbookLabel htmlFor="skip-vis">Visibility</WorkbookLabel>
              <WorkbookSelect
                id="skip-vis"
                value={state.skipLink.visibility}
                onChange={(e) =>
                  persist({
                    ...state,
                    skipLink: {
                      ...state.skipLink,
                      visibility: e.target.value as typeof state.skipLink.visibility,
                    },
                  })
                }
              >
                <option value="">Select…</option>
                <option value="hidden-until-focus">Hidden until focus</option>
                <option value="always-visible">Always visible</option>
              </WorkbookSelect>
            </div>
            <div className="sm:col-span-2">
              <WorkbookLabel htmlFor="skip-rationale">Rationale</WorkbookLabel>
              <WorkbookTextarea
                id="skip-rationale"
                value={state.skipLink.rationale}
                onChange={(e) =>
                  persist({
                    ...state,
                    skipLink: { ...state.skipLink, rationale: e.target.value },
                  })
                }
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-foreground mt-6">
            First Tab stop after skip link
          </h3>
          <p className="text-sm text-text-secondary">
            Assume your skip link moves focus to the main content region (
            <code className="text-xs">#main-content</code>). On each page, what is the
            first element that receives focus when you press Tab once from there? Use the
            mockup to trace focus order.
          </p>
          <PracticeSite
            showZoneLegend={false}
            pageId={skipTabPage}
            onPageChange={setSkipTabPage}
          />
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="border border-border px-3 py-2 text-left">
                  Page
                </th>
                <th scope="col" className="border border-border px-3 py-2 text-left">
                  First element after one Tab
                </th>
              </tr>
            </thead>
            <tbody>
              {PRACTICE_PAGES.map((p) => (
                <tr key={p.id}>
                  <td className="border border-border px-3 py-2 font-medium">{p.label}</td>
                  <td className="border border-border px-3 py-2">
                    <WorkbookInput
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
                      placeholder="Name or describe the control"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex gap-3">
            <button type="button" onClick={() => goStep(1)} className="text-sm underline text-primary-text">
              Back
            </button>
            <button
              type="button"
              onClick={() => goStep(3)}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Continue
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Motion</h2>
          <p className="text-sm text-text-secondary">
            The mockup is static (no animation plays). Each card quotes the written
            spec for intended motion. Describe how the live site respects{" "}
            <code className="text-xs">prefers-reduced-motion</code> with a static
            alternative.
          </p>
          {state.motionInventory.map((row, i) => {
            const seed = MOTION_SEEDS.find((s) => s.id === row.id);
            return (
              <div
                key={row.id}
                className="rounded-lg border border-border p-4 space-y-3"
              >
                <div>
                  <p className="font-medium text-foreground m-0">{row.element}</p>
                  {seed ? (
                    <p className="text-xs text-text-secondary m-0 mt-1">{seed.location}</p>
                  ) : null}
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
                  <div>
                    <WorkbookLabel htmlFor={`pause-${i}`} required>
                      Pause, stop, or hide control
                    </WorkbookLabel>
                    <p className="text-xs text-text-secondary m-0 mb-2">
                      Auto-playing content must provide a user control (WCAG 2.2.2).
                    </p>
                    <WorkbookTextarea
                      id={`pause-${i}`}
                      value={row.pauseControl}
                      onChange={(e) => {
                        const motionInventory = [...state.motionInventory];
                        motionInventory[i] = { ...row, pauseControl: e.target.value };
                        persist({ ...state, motionInventory });
                      }}
                      placeholder="e.g. Visible Pause button that stops auto-advance"
                    />
                  </div>
                ) : null}
                <div>
                  <WorkbookLabel htmlFor={`rm-${i}`} required>
                    Respects prefers-reduced-motion
                  </WorkbookLabel>
                  <p className="text-xs text-text-secondary m-0 mb-2">
                    Describe the static version supplied when the user prefers reduced
                    motion (no animation).
                  </p>
                  <WorkbookTextarea
                    id={`rm-${i}`}
                    value={row.reducedMotionAlt}
                    onChange={(e) => {
                      const motionInventory = [...state.motionInventory];
                      motionInventory[i] = { ...row, reducedMotionAlt: e.target.value };
                      persist({ ...state, motionInventory });
                    }}
                    placeholder="e.g. Show slide 1 only; no auto-advance or cross-fade"
                  />
                </div>
              </div>
            );
          })}
          <div className="flex gap-3">
            <button type="button" onClick={() => goStep(2)} className="text-sm underline text-primary-text">
              Back
            </button>
            <button
              type="button"
              onClick={() => goStep(4)}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Review
            </button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Review and self-assess</h2>

          <div className="rounded-lg border border-border p-4 space-y-2">
            <h3 className="text-base font-semibold text-foreground m-0">Coach checks</h3>
            <p className="text-sm text-text-secondary m-0">
              {coachPassCount} of {coachChecks.length} checks passing. These are hints
              only; your self-score is what counts.
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
            <h3 className="text-base font-semibold text-foreground">Self-assessment</h3>
            <p className="text-sm text-text-secondary">
              Score yourself honestly against the rubric (20 points total, passing 10+).
            </p>
            {SELF_ASSESSMENT_CRITERIA.map((crit) => {
              const key = crit.id as keyof WorkbookState["selfAssessment"];
              return (
                <fieldset
                  key={crit.id}
                  className="rounded-lg border border-border p-4 space-y-3"
                >
                  <legend className="text-sm font-semibold text-foreground px-1">
                    {crit.label} ({crit.outcome}) — up to 4 points
                  </legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {MASTERY_SCALE.map((level) => (
                      <label
                        key={level.score}
                        className={`flex gap-2 rounded-md border p-3 cursor-pointer text-sm ${
                          state.selfAssessment[key] === level.score
                            ? "border-primary bg-primary/5"
                            : "border-border"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`self-${crit.id}`}
                          checked={state.selfAssessment[key] === level.score}
                          onChange={() =>
                            persist({
                              ...state,
                              selfAssessment: {
                                ...state.selfAssessment,
                                [key]: level.score,
                              },
                            })
                          }
                          className="mt-1"
                        />
                        <span>
                          <span className="font-semibold text-foreground">
                            {level.score} — {level.label}
                          </span>
                          <span className="block text-text-secondary text-xs mt-1">
                            {level.description}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              );
            })}
            <p className="text-lg font-semibold text-foreground">
              Your self-reported total: {selfTotal} / 20
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
          </div>

          <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-foreground">
            {previewMode ? (
              <>
                <strong>Preview mode:</strong> Export works for testing. Server submit
                will be enabled on the live assignment page after you approve this
                sample.
              </>
            ) : (
              <>Submit your export on the applied practice page.</>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleExport}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Export audit JSON
            </button>
            <button type="button" onClick={() => goStep(3)} className="text-sm underline text-primary-text py-2.5">
              Back
            </button>
          </div>
          {exportStatus && (
            <p role="status" className="text-sm text-accent-green">
              {exportStatus}
            </p>
          )}
        </section>
      )}
    </div>
  );
}
