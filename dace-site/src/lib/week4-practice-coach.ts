import {
  autoSelfAssessmentScores,
  autoSelfAssessmentTotal,
  computeAutoSelfAssessment,
} from "@/lib/week4-practice-auto-grade";
import { matchesSkipLinkFirstTab } from "@/data/week4-practice/practice-overlays";
import {
  EXPECTED_HTML_EQUIVALENTS,
  EXPECTED_LANDMARK_ROLES,
  MOTION_SEEDS,
  PRACTICE_PAGES,
  zoneDisplayName,
  zonesForPage,
} from "@/data/week4-practice/practice-zones";
import type { WorkbookState } from "@/data/week4-practice/workbook-types";

export interface CoachCheck {
  id: string;
  pass: boolean;
  message: string;
}

export function runCoachChecks(state: WorkbookState): CoachCheck[] {
  const checks: CoachCheck[] = [];

  for (const page of PRACTICE_PAGES) {
    const rows = state.landmarks[page.id] ?? [];
    const mainCount = rows.filter((r) => r.role === "main").length;
    checks.push({
      id: `main-count-${page.id}`,
      pass: mainCount === 1,
      message:
        mainCount === 1
          ? `${page.label}: exactly one main landmark.`
          : `${page.label}: expected one main landmark, found ${mainCount}.`,
    });

    for (const zone of zonesForPage(page.id)) {
      const row = rows.find((r) => r.zoneId === zone.id);
      const expected = EXPECTED_LANDMARK_ROLES[zone.id];
      if (!row || !row.role || row.role === "none") {
        checks.push({
          id: `zone-${page.id}-${zone.id}`,
          pass: false,
          message: `${page.label}: assign a role for ${zoneDisplayName(zone.id, page.id)}.`,
        });
        continue;
      }
      const roleOk = row.role === expected;
      checks.push({
        id: `zone-role-${page.id}-${zone.id}`,
        pass: roleOk,
        message: roleOk
          ? `${page.label} / ${zoneDisplayName(zone.id, page.id)}: role "${row.role}" looks correct.`
          : `${page.label} / ${zoneDisplayName(zone.id, page.id)}: expected role "${expected}", you chose "${row.role}".`,
      });

      const expectedHtml = EXPECTED_HTML_EQUIVALENTS[zone.id];
      const html = row.htmlEquivalent.trim();
      const htmlOk = html === expectedHtml;
      checks.push({
        id: `zone-html-${page.id}-${zone.id}`,
        pass: htmlOk,
        message: htmlOk
          ? `${page.label} / ${zoneDisplayName(zone.id, page.id)}: HTML "${html}" looks correct.`
          : html
            ? `${page.label} / ${zoneDisplayName(zone.id, page.id)}: expected HTML "${expectedHtml}", you chose "${html}".`
            : `${page.label} / ${zoneDisplayName(zone.id, page.id)}: select an HTML equivalent.`,
      });

      if (zone.nameRequired && !row.accessibleName.trim()) {
        checks.push({
          id: `nav-name-${page.id}-${zone.id}`,
          pass: false,
          message: `${page.label} / ${zoneDisplayName(zone.id, page.id)}: accessible name is required.`,
        });
      }
    }
  }

  const skip = state.skipLink;
  const skipOk =
    skip.placement.trim() &&
    skip.targetId.trim() &&
    skip.visibility &&
    skip.rationale.trim();
  checks.push({
    id: "skip-link",
    pass: Boolean(skipOk),
    message: skipOk
      ? "Skip link specification looks complete."
      : "Fill in skip link placement, target, visibility, and rationale.",
  });

  for (const page of PRACTICE_PAGES) {
    const navRow = state.landmarks[page.id]?.find((r) => r.zoneId === "primary-nav");
    const navRole = navRow?.role?.trim() ?? "";
    const navHtml = navRow?.htmlEquivalent?.trim() ?? "";
    const navOk = navRole === "navigation" && navHtml === "nav";
    checks.push({
      id: `nav-consistency-${page.id}`,
      pass: navOk,
      message: navOk
        ? `${page.label}: primary nav uses navigation + nav (consistent with other pages).`
        : `${page.label}: set primary nav to role navigation and HTML nav on every page.`,
    });
  }

  for (const page of PRACTICE_PAGES) {
    const answer = state.skipLinkFirstTab[page.id] ?? "";
    const pass = matchesSkipLinkFirstTab(page.id, answer);
    checks.push({
      id: `skip-first-tab-${page.id}`,
      pass,
      message: pass
        ? `${page.label}: first Tab after skip link matches the mockup.`
        : `${page.label}: name the first control in main after skip link + one Tab (check the mockup).`,
    });
  }

  for (const seed of MOTION_SEEDS) {
    const inv = state.motionInventory.find((m) => m.id === seed.id);
    checks.push({
      id: `motion-reduced-${seed.id}`,
      pass: Boolean(inv?.reducedMotionAlt.trim()),
      message: inv?.reducedMotionAlt.trim()
        ? `${seed.label}: prefers-reduced-motion static alternative documented.`
        : `${seed.label}: describe the static version when prefers-reduced-motion is enabled.`,
    });

    if (seed.pauseRequired) {
      const pauseControl = inv?.pauseControl.trim() ?? "";
      const pauseOk = Boolean(pauseControl) && pauseControl !== "N/A";
      checks.push({
        id: `motion-pause-${seed.id}`,
        pass: pauseOk,
        message: pauseOk
          ? `${seed.label}: pause/stop/hide control specified.`
          : `${seed.label}: specify how users pause or stop auto-play.`,
      });
    }
  }

  return checks;
}

export function selfAssessmentTotal(scores: WorkbookState["selfAssessment"]): number {
  return (
    scores.landmarks +
    scores.navConsistency +
    scores.skipLinks +
    scores.motionInventory +
    scores.reducedMotion
  );
}

export function buildExportPayload(
  state: WorkbookState,
  studentDisplayName?: string
) {
  const coachChecks = runCoachChecks(state);
  const autoGrades = computeAutoSelfAssessment(state);
  const scores = autoSelfAssessmentScores(autoGrades);
  const total = autoSelfAssessmentTotal(autoGrades);
  return {
    assignmentId: "week-4-practice",
    submittedAt: new Date().toISOString(),
    preview: true,
    student: { displayName: studentDisplayName ?? "Unknown" },
    audit: {
      landmarks: state.landmarks,
      skipLinks: {
        spec: state.skipLink,
        firstTabAfterSkip: state.skipLinkFirstTab,
      },
      motionInventory: state.motionInventory,
    },
    coachChecks,
    selfAssessment: {
      ...scores,
      total,
      passing: total >= 10,
      autoGraded: true,
      criteria: autoGrades.map((g) => ({
        id: g.criterionId,
        score: g.score,
        explanation: g.explanation,
        passedCount: g.passedCount,
        totalCount: g.totalCount,
        omittedCount: g.omittedCount,
      })),
    },
  };
}
