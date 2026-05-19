import {
  autoSelfAssessmentScores,
  autoSelfAssessmentTotal,
  computeAutoSelfAssessment,
} from "@/lib/week4-practice-auto-grade";
import {
  needsPauseButtonCoachMessage,
  needsPauseButtonPasses,
  shouldRespectPreferenceCoachMessage,
  shouldRespectPreferencePasses,
} from "@/lib/week4-practice-motion-grade";
import {
  genericLandmarkNameCoachMessage,
  hasGenericLandmarkName,
  isAccessibleNameRequired,
} from "@/lib/week4-practice-landmark-name";
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

      const accessibleName = row.accessibleName.trim();
      const nameRequired = isAccessibleNameRequired(row.role, html);
      if (nameRequired && !accessibleName) {
        checks.push({
          id: `zone-name-required-${page.id}-${zone.id}`,
          pass: false,
          message: `${page.label} / ${zoneDisplayName(zone.id, page.id)}: accessible name is required.`,
        });
      } else if (nameRequired && hasGenericLandmarkName(accessibleName)) {
        checks.push({
          id: `zone-name-generic-${page.id}-${zone.id}`,
          pass: false,
          message: genericLandmarkNameCoachMessage(
            page.label,
            zoneDisplayName(zone.id, page.id)
          ),
        });
      } else if (nameRequired && accessibleName) {
        checks.push({
          id: `zone-name-generic-${page.id}-${zone.id}`,
          pass: true,
          message: `${page.label} / ${zoneDisplayName(zone.id, page.id)}: accessible name looks descriptive.`,
        });
      }
    }
  }

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
      id: `motion-pause-needs-${seed.id}`,
      pass: needsPauseButtonPasses(seed, inv),
      message: needsPauseButtonCoachMessage(seed, inv),
    });
    checks.push({
      id: `motion-reduced-${seed.id}`,
      pass: shouldRespectPreferencePasses(seed, inv),
      message: shouldRespectPreferenceCoachMessage(seed, inv),
    });
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
