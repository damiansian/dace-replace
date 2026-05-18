import type { PracticePageId, PracticeZoneId } from "./practice-zones";

export interface LandmarkRow {
  zoneId: PracticeZoneId;
  role: string;
  accessibleName: string;
  htmlEquivalent: string;
  notes: string;
}

export type LandmarksByPage = Record<PracticePageId, LandmarkRow[]>;

export interface NavMatrixRow {
  item: string;
  homeOrder: string;
  productsOrder: string;
  aboutOrder: string;
}

export interface SkipLinkSpec {
  label: string;
  placement: string;
  targetId: string;
  visibility: "hidden-until-focus" | "always-visible" | "";
  rationale: string;
}

export interface MotionInventoryRow {
  id: string;
  element: string;
  motionType: string;
  durationTrigger: string;
  pauseRequired: "yes" | "no" | "";
  pauseControl: string;
  flashNotes: string;
}

export interface MotionPlanRow {
  inventoryId: string;
  essentiality: "essential" | "decorative" | "";
  defaultBehavior: string;
  reducedMotionAlt: string;
  annotationNote: string;
}

export interface SelfAssessmentScores {
  landmarks: number;
  navConsistency: number;
  skipLinks: number;
  motionInventory: number;
  reducedMotion: number;
}

export interface WorkbookState {
  version: 1;
  landmarks: LandmarksByPage;
  navMatrix: NavMatrixRow[];
  navInconsistent: boolean;
  navRecommendation: string;
  skipLink: SkipLinkSpec;
  motionInventory: MotionInventoryRow[];
  motionPlans: MotionPlanRow[];
  selfAssessment: SelfAssessmentScores;
  currentStep: number;
}

export function emptyLandmarkRow(zoneId: PracticeZoneId): LandmarkRow {
  return {
    zoneId,
    role: "",
    accessibleName: "",
    htmlEquivalent: "",
    notes: "",
  };
}

export function emptySkipLink(): SkipLinkSpec {
  return {
    label: "Skip to main content",
    placement: "First focusable element on every page",
    targetId: "main-content",
    visibility: "",
    rationale: "",
  };
}

export function initialNavMatrix(): NavMatrixRow[] {
  return [
    { item: "Home", homeOrder: "", productsOrder: "", aboutOrder: "" },
    { item: "Products", homeOrder: "", productsOrder: "", aboutOrder: "" },
    { item: "About", homeOrder: "", productsOrder: "", aboutOrder: "" },
  ];
}

export function initialWorkbookState(): WorkbookState {
  return {
    version: 1,
    landmarks: { home: [], products: [], about: [] },
    navMatrix: initialNavMatrix(),
    navInconsistent: false,
    navRecommendation: "",
    skipLink: emptySkipLink(),
    motionInventory: [],
    motionPlans: [],
    selfAssessment: {
      landmarks: 0,
      navConsistency: 0,
      skipLinks: 0,
      motionInventory: 0,
      reducedMotion: 0,
    },
    currentStep: 0,
  };
}
