export type PracticePageId = "home" | "products" | "about";

export const PRACTICE_PAGES: { id: PracticePageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "about", label: "About" },
];

export type PracticeZoneId =
  | "site-header"
  | "primary-nav"
  | "site-search"
  | "main-content"
  | "sidebar"
  | "footer-nav"
  | "site-footer";

export interface PracticeZone {
  id: PracticeZoneId;
  /** Neutral location copy — does not name the landmark role. */
  description: string;
  pages: PracticePageId[];
  /** When true, coach checks expect a non-empty accessible name. */
  nameRequired: boolean;
}

/** Instructor-facing label for coach feedback (no answer leakage). */
export function zoneDisplayName(
  zoneId: PracticeZoneId,
  pageId: PracticePageId
): string {
  const n = getZoneNumber(zoneId, pageId);
  return n > 0 ? `Zone ${n}` : zoneId;
}

export function zonesForPage(pageId: PracticePageId): PracticeZone[] {
  return PRACTICE_ZONES.filter((z) => z.pages.includes(pageId));
}

/** Sequential zone number (1-based) for the given page. */
export function getZoneNumber(
  zoneId: PracticeZoneId,
  pageId: PracticePageId
): number {
  const zones = zonesForPage(pageId);
  const index = zones.findIndex((z) => z.id === zoneId);
  return index >= 0 ? index + 1 : 0;
}

export const PRACTICE_ZONES: PracticeZone[] = [
  {
    id: "site-header",
    description: "Top bar spanning the page (site title area)",
    pages: ["home", "products", "about"],
    nameRequired: false,
  },
  {
    id: "primary-nav",
    description:
      "Horizontal list of page links in the header (use the same role and HTML on every page)",
    pages: ["home", "products", "about"],
    nameRequired: false,
  },
  {
    id: "site-search",
    description: "Search field in the header",
    pages: ["home", "products", "about"],
    nameRequired: false,
  },
  {
    id: "main-content",
    description: "Central column with this page’s primary content",
    pages: ["home", "products", "about"],
    nameRequired: false,
  },
  {
    id: "sidebar",
    description: "Right column with filters and promos",
    pages: ["home", "products"],
    nameRequired: false,
  },
  {
    id: "site-footer",
    description: "Footer links and copyright in one bottom strip",
    pages: ["home", "products", "about"],
    nameRequired: false,
  },
];

/** Expected landmark roles for coach checks (per zone, all pages). */
export const EXPECTED_LANDMARK_ROLES: Record<PracticeZoneId, string> = {
  "site-header": "banner",
  "primary-nav": "navigation",
  "site-search": "search",
  "main-content": "main",
  sidebar: "complementary",
  "footer-nav": "navigation",
  "site-footer": "contentinfo",
};

export const EXPECTED_HTML_EQUIVALENTS: Record<PracticeZoneId, string> = {
  "site-header": "header",
  "primary-nav": "nav",
  "site-search": "form[role=search]",
  "main-content": "main",
  sidebar: "aside",
  "footer-nav": "nav",
  "site-footer": "footer",
};

export const NAV_ITEMS = ["Home", "Products", "About"] as const;

/** Same relative order on every page (SC 3.2.3). */
export const NAV_ORDER_BY_PAGE: Record<PracticePageId, readonly string[]> = {
  home: NAV_ITEMS,
  products: NAV_ITEMS,
  about: NAV_ITEMS,
};

export type SkipLinkFirstTabByPage = Record<PracticePageId, string>;

export interface MotionSeed {
  id: string;
  label: string;
  location: string;
  defaultDescription: string;
  suggestedType:
    | "auto-play"
    | "looping"
    | "hover"
    | "transition"
    | "scroll-driven";
  pauseRequired: boolean;
}

/** When the student answers Yes, whether they must describe the static alternative. */
export function motionRequiresReducedMotionStatic(seed: MotionSeed): boolean {
  return seed.suggestedType !== "hover";
}

export const MOTION_SEEDS: MotionSeed[] = [
  {
    id: "hero-carousel",
    label: "Hero carousel",
    location: "Home main content",
    defaultDescription:
      "Auto-advances every 5 seconds between three promo slides.",
    suggestedType: "auto-play",
    pauseRequired: true,
  },
  {
    id: "product-card-hover",
    label: "Product card hover",
    location: "Products grid",
    defaultDescription: "Cards scale up 4% on hover over 200ms.",
    suggestedType: "hover",
    pauseRequired: false,
  },
  {
    id: "add-to-cart-transition",
    label: "Add to cart feedback",
    location: "Products main content",
    defaultDescription:
      "Button shows a sliding checkmark animation on success.",
    suggestedType: "transition",
    pauseRequired: false,
  },
  {
    id: "about-team-fade",
    label: "Team section entrance",
    location: "About main content",
    defaultDescription:
      "Team photos fade and slide up when scrolled into view.",
    suggestedType: "scroll-driven",
    pauseRequired: false,
  },
];

export const LANDMARK_ROLES = [
  "banner",
  "navigation",
  "main",
  "complementary",
  "contentinfo",
  "search",
  "none",
] as const;

export const HTML_EQUIVALENTS = [
  "header",
  "nav",
  "main",
  "aside",
  "footer",
  "form[role=search]",
  "none",
] as const;

export const MOTION_TYPES = [
  "auto-play",
  "looping",
  "hover",
  "scroll-driven",
  "transition",
  "flash-risk",
] as const;

/** Auto-grade rubric (1–4 per category, 20 points total). */
export const AUTO_GRADE_SCALE = [
  {
    score: 4,
    label: "Totally correct",
    description: "Every required item in this category is answered and correct.",
  },
  {
    score: 3,
    label: "Missed some",
    description:
      "Every required item is answered; most are correct but one or more need fixes.",
  },
  {
    score: 2,
    label: "Missed most",
    description:
      "Every required item is answered; most are incorrect or incomplete.",
  },
  {
    score: 1,
    label: "Omitted",
    description: "One or more required responses in this category were left blank.",
  },
] as const;

export const SELF_ASSESSMENT_CRITERIA = [
  {
    id: "landmarks",
    label: "Landmark identification",
    outcome: "1G.01",
  },
  {
    id: "navConsistency",
    label: "Navigation consistency",
    outcome: "1G.02",
  },
  {
    id: "skipLinks",
    label: "First Tab after skip link",
    outcome: "1G.03",
  },
  {
    id: "motionInventory",
    label: "Motion specs and pause/stop/hide (carousel)",
    outcome: "1H.02",
  },
  {
    id: "reducedMotion",
    label: "prefers-reduced-motion static alternatives",
    outcome: "1H.01, 1H.03",
  },
] as const;
