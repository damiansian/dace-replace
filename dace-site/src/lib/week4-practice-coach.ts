import {
  EXPECTED_LANDMARK_ROLES,
  MOTION_SEEDS,
  NAV_ORDER_BY_PAGE,
  matchesSkipLinkFirstTab,
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

      if (zone.nameRequired && !row.accessibleName.trim()) {
        checks.push({
          id: `nav-name-${page.id}-${zone.id}`,
          pass: false,
          message: `${page.label} / ${zoneDisplayName(zone.id, page.id)}: accessible name is required.`,
        });
      }
    }
  }

  const navMatrixComplete = state.navMatrix.every(
    (row) =>
      row.homeOrder.trim() &&
      row.productsOrder.trim() &&
      row.aboutOrder.trim()
  );

  const navOrdersDocumented = PRACTICE_PAGES.every((page) => {
    const expected = NAV_ORDER_BY_PAGE[page.id];
    return state.navMatrix.every((row) => {
      const col =
        page.id === "home"
          ? row.homeOrder
          : page.id === "products"
            ? row.productsOrder
            : row.aboutOrder;
      const idx = parseInt(col, 10);
      if (Number.isNaN(idx)) return false;
      return expected[idx - 1] === row.item;
    });
  });

  checks.push({
    id: "nav-matrix",
    pass: navMatrixComplete && navOrdersDocumented,
    message:
      navMatrixComplete && navOrdersDocumented
        ? "Navigation order documented consistently (Home, Products, About on every page)."
        : "Enter position 1–3 for each nav item on Home, Products, and About.",
  });

  checks.push({
    id: "nav-inconsistency",
    pass: !state.navInconsistent,
    message: state.navInconsistent
      ? "The practice site keeps the same nav order on every page; uncheck unless you found another issue."
      : "Navigation order is consistent across pages (matches the mockup).",
  });

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
    const inv = state.motionInventory.find(
      (m) => m.id === seed.id || m.element.includes(seed.label)
    );
    checks.push({
      id: `motion-inv-${seed.id}`,
      pass: Boolean(inv?.motionType && inv.durationTrigger.trim()),
      message: inv?.motionType
        ? `Motion inventory includes ${seed.label}.`
        : `Add inventory details for ${seed.label}.`,
    });

    const plan = state.motionPlans.find((p) => p.inventoryId === seed.id);
    checks.push({
      id: `motion-plan-${seed.id}`,
      pass: Boolean(plan?.reducedMotionAlt.trim()),
      message: plan?.reducedMotionAlt.trim()
        ? `Reduced-motion alternative documented for ${seed.label}.`
        : `Document a prefers-reduced-motion alternative for ${seed.label}.`,
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
  const total = selfAssessmentTotal(state.selfAssessment);
  return {
    assignmentId: "week-4-practice",
    submittedAt: new Date().toISOString(),
    preview: true,
    student: { displayName: studentDisplayName ?? "Unknown" },
    audit: {
      landmarks: state.landmarks,
      nav: {
        matrix: state.navMatrix,
        inconsistent: state.navInconsistent,
        recommendation: state.navRecommendation,
      },
      skipLinks: {
        spec: state.skipLink,
        firstTabAfterSkip: state.skipLinkFirstTab,
      },
      motionInventory: state.motionInventory,
      motionPlans: state.motionPlans,
    },
    coachChecks,
    selfAssessment: {
      ...state.selfAssessment,
      total,
      passing: total >= 10,
    },
  };
}
