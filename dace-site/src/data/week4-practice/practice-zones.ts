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
    description: "Horizontal list of page links in the header",
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
    id: "footer-nav",
    description: "Row of footer links above the copyright line",
    pages: ["products", "about"],
    nameRequired: true,
  },
  {
    id: "site-footer",
    description: "Bottom strip with copyright (and footer links on Home)",
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

export const NAV_ITEMS = ["Home", "Products", "About"] as const;

/** Same relative order on every page (SC 3.2.3). */
export const NAV_ORDER_BY_PAGE: Record<PracticePageId, readonly string[]> = {
  home: NAV_ITEMS,
  products: NAV_ITEMS,
  about: NAV_ITEMS,
};

export type SkipLinkFirstTabByPage = Record<PracticePageId, string>;

/** Coach check: first Tab stop in main after skip link (per page). */
export function matchesSkipLinkFirstTab(
  pageId: PracticePageId,
  answer: string
): boolean {
  const normalized = answer.trim().toLowerCase();
  if (!normalized) return false;
  switch (pageId) {
    case "home":
      return /slide\s*1/.test(normalized);
    case "products":
      return /add\s*to\s*cart/.test(normalized) && /trail\s*pack/.test(normalized);
    case "about":
      return /alex/.test(normalized);
    default:
      return false;
  }
}

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

export const MASTERY_SCALE = [
  {
    score: 4,
    label: "Exceeds Mastery",
    description:
      "Thorough, precise specs. Edge cases handled. Engineering could implement without follow-up.",
  },
  {
    score: 3,
    label: "Meets Mastery",
    description: "All requirements met. Minor gaps on edge cases only.",
  },
  {
    score: 2,
    label: "Near Mastery",
    description: "Concepts understood but execution has gaps (about 70–89%).",
  },
  {
    score: 1,
    label: "Below Mastery",
    description: "Significant gaps in understanding or execution.",
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
    label: "Skip link specifications",
    outcome: "1G.03",
  },
  {
    id: "motionInventory",
    label: "Motion identification and pause/stop/hide",
    outcome: "1H.02",
  },
  {
    id: "reducedMotion",
    label: "Reduced motion alternatives",
    outcome: "1H.01, 1H.03",
  },
] as const;
