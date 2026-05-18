import type {
  PracticePageId,
  PracticeZoneId,
  SkipLinkFirstTabByPage,
} from "./practice-zones";

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
  /** Intended motion from the written spec (mockup is static). */
  intendedMotion: string;
  pauseRequired: "yes" | "no" | "";
  pauseControl: string;
  /** Static alternative when prefers-reduced-motion is enabled. */
  reducedMotionAlt: string;
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
  /** First focusable in main after skip link, then one Tab press. */
  skipLinkFirstTab: SkipLinkFirstTabByPage;
  motionInventory: MotionInventoryRow[];
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

export function emptySkipLinkFirstTab(): SkipLinkFirstTabByPage {
  return { home: "", products: "", about: "" };
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
    skipLinkFirstTab: emptySkipLinkFirstTab(),
    motionInventory: [],
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
