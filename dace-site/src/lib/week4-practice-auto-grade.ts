import {
  hasGenericLandmarkName,
  isAccessibleNameRequired,
} from "@/lib/week4-practice-landmark-name";
import { matchesSkipLinkFirstTab } from "@/data/week4-practice/practice-overlays";
import {
  needsPauseButtonAnswered,
  needsPauseButtonPasses,
  shouldRespectPreferenceAnswered,
  shouldRespectPreferencePasses,
} from "@/lib/week4-practice-motion-grade";
import {
  EXPECTED_HTML_EQUIVALENTS,
  EXPECTED_LANDMARK_ROLES,
  MOTION_SEEDS,
  PRACTICE_PAGES,
  SELF_ASSESSMENT_CRITERIA,
  zonesForPage,
} from "@/data/week4-practice/practice-zones";
import type { SelfAssessmentScores, WorkbookState } from "@/data/week4-practice/workbook-types";

export interface GradeItem {
  id: string;
  label: string;
  answered: boolean;
  pass: boolean;
}

export interface CriterionGrade {
  criterionId: keyof SelfAssessmentScores;
  label: string;
  outcome: string;
  score: 1 | 2 | 3 | 4;
  explanation: string;
  items: GradeItem[];
  passedCount: number;
  totalCount: number;
  omittedCount: number;
}

function isAnsweredText(value: string | undefined): boolean {
  return Boolean(value?.trim());
}

export function scoreItems(items: GradeItem[]): Pick<
  CriterionGrade,
  "score" | "explanation" | "passedCount" | "totalCount" | "omittedCount"
> {
  const totalCount = items.length;
  const omittedCount = items.filter((i) => !i.answered).length;
  const passedCount = items.filter((i) => i.answered && i.pass).length;

  if (omittedCount > 0) {
    return {
      score: 1,
      explanation: `Score 1 (Omitted): ${omittedCount} of ${totalCount} required item${
        omittedCount === 1 ? "" : "s"
      } left blank. Complete every field in this category.`,
      passedCount,
      totalCount,
      omittedCount,
    };
  }

  if (passedCount === totalCount) {
    return {
      score: 4,
      explanation: `Score 4 (Totally correct): all ${totalCount} required items are correct.`,
      passedCount,
      totalCount,
      omittedCount: 0,
    };
  }

  const missed = totalCount - passedCount;
  if (passedCount >= Math.ceil(totalCount / 2)) {
    return {
      score: 3,
      explanation: `Score 3 (Missed some): ${passedCount} of ${totalCount} correct; ${missed} item${
        missed === 1 ? "" : "s"
      } need fixes. See coach checks for details.`,
      passedCount,
      totalCount,
      omittedCount: 0,
    };
  }

  return {
    score: 2,
    explanation: `Score 2 (Missed most): only ${passedCount} of ${totalCount} correct; review and revise most items in this category.`,
    passedCount,
    totalCount,
    omittedCount: 0,
  };
}

function landmarkItems(state: WorkbookState): GradeItem[] {
  const items: GradeItem[] = [];
  for (const page of PRACTICE_PAGES) {
    const rows = state.landmarks[page.id] ?? [];
    const mainRow = rows.find((r) => r.zoneId === "main-content");
    const mainRows = rows.filter((r) => r.role === "main");
    items.push({
      id: `main-${page.id}`,
      label: `${page.label}: one main landmark`,
      answered: isAnsweredText(mainRow?.role) && mainRow?.role !== "none",
      pass: mainRows.length === 1,
    });

    for (const zone of zonesForPage(page.id)) {
      const row = rows.find((r) => r.zoneId === zone.id);
      const role = row?.role?.trim() ?? "";
      const answered = Boolean(role && role !== "none");
      const rolePass = answered && role === EXPECTED_LANDMARK_ROLES[zone.id];
      const accessibleName = row?.accessibleName?.trim() ?? "";
      const html = row?.htmlEquivalent?.trim() ?? "";
      const nameRequired = isAccessibleNameRequired(role, html);
      const namePass =
        !nameRequired ||
        (isAnsweredText(accessibleName) && !hasGenericLandmarkName(accessibleName));
      const htmlPass =
        isAnsweredText(row?.htmlEquivalent) &&
        row?.htmlEquivalent === EXPECTED_HTML_EQUIVALENTS[zone.id];
      items.push({
        id: `zone-${page.id}-${zone.id}`,
        label: `${page.label} / ${zone.description}`,
        answered,
        pass: rolePass && namePass && htmlPass,
      });
    }
  }
  return items;
}

function navConsistencyItems(state: WorkbookState): GradeItem[] {
  return PRACTICE_PAGES.map((page) => {
    const row = state.landmarks[page.id]?.find((r) => r.zoneId === "primary-nav");
    const role = row?.role?.trim() ?? "";
    const html = row?.htmlEquivalent?.trim() ?? "";
    return {
      id: `nav-${page.id}`,
      label: `${page.label}: primary nav role and HTML`,
      answered: Boolean(role && html),
      pass: role === "navigation" && html === "nav",
    };
  });
}

function skipLinkItems(state: WorkbookState): GradeItem[] {
  return PRACTICE_PAGES.map((page) => {
    const answer = state.skipLinkFirstTab[page.id] ?? "";
    return {
      id: `skip-tab-${page.id}`,
      label: `${page.label}: first Tab after skip link`,
      answered: isAnsweredText(answer),
      pass: isAnsweredText(answer) && matchesSkipLinkFirstTab(page.id, answer),
    };
  });
}

function motionPauseItems(state: WorkbookState): GradeItem[] {
  return MOTION_SEEDS.map((seed) => {
    const row = state.motionInventory.find((m) => m.id === seed.id);
    return {
      id: `pause-needs-${seed.id}`,
      label: `${seed.label}: needs a pause button`,
      answered: needsPauseButtonAnswered(row),
      pass: needsPauseButtonPasses(seed, row),
    };
  });
}

function reducedMotionItems(state: WorkbookState): GradeItem[] {
  return MOTION_SEEDS.map((seed) => {
    const row = state.motionInventory.find((m) => m.id === seed.id);
    return {
      id: `reduced-${seed.id}`,
      label: `${seed.label}: should respect prefers-reduced-motion`,
      answered: shouldRespectPreferenceAnswered(row),
      pass: shouldRespectPreferencePasses(seed, row),
    };
  });
}

const ITEM_BUILDERS: Record<
  keyof SelfAssessmentScores,
  (state: WorkbookState) => GradeItem[]
> = {
  landmarks: landmarkItems,
  navConsistency: navConsistencyItems,
  skipLinks: skipLinkItems,
  motionInventory: motionPauseItems,
  reducedMotion: reducedMotionItems,
};

export function computeAutoSelfAssessment(state: WorkbookState): CriterionGrade[] {
  return SELF_ASSESSMENT_CRITERIA.map((crit) => {
    const criterionId = crit.id as keyof SelfAssessmentScores;
    const items = ITEM_BUILDERS[criterionId](state);
    const scored = scoreItems(items);
    return {
      criterionId,
      label: crit.label,
      outcome: crit.outcome,
      items,
      ...scored,
    };
  });
}

export function autoSelfAssessmentScores(
  grades: CriterionGrade[]
): SelfAssessmentScores {
  const scores = {} as SelfAssessmentScores;
  for (const g of grades) {
    scores[g.criterionId] = g.score;
  }
  return scores;
}

export function autoSelfAssessmentTotal(grades: CriterionGrade[]): number {
  return grades.reduce((sum, g) => sum + g.score, 0);
}
