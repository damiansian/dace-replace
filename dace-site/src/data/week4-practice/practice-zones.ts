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
  label: string;
  hint: string;
  pages: PracticePageId[];
}

export const ZONE_NUMBERS: Record<PracticeZoneId, number> = {
  "site-header": 1,
  "primary-nav": 2,
  "site-search": 3,
  "main-content": 4,
  sidebar: 5,
  "footer-nav": 6,
  "site-footer": 7,
};

export const PRACTICE_ZONES: PracticeZone[] = [
  {
    id: "site-header",
    label: "Site header (top bar)",
    hint: "Logo and site-wide header strip",
    pages: ["home", "products", "about"],
  },
  {
    id: "primary-nav",
    label: "Primary navigation",
    hint: "Main horizontal nav in the header",
    pages: ["home", "products", "about"],
  },
  {
    id: "site-search",
    label: "Search",
    hint: "Search field in the header",
    pages: ["home", "products", "about"],
  },
  {
    id: "main-content",
    label: "Main content",
    hint: "Primary page content area",
    pages: ["home", "products", "about"],
  },
  {
    id: "sidebar",
    label: "Sidebar",
    hint: "Supporting promos and filters",
    pages: ["home", "products"],
  },
  {
    id: "footer-nav",
    label: "Footer navigation",
    hint: "Secondary links in the footer",
    pages: ["home", "products", "about"],
  },
  {
    id: "site-footer",
    label: "Site footer",
    hint: "Copyright and site-wide footer",
    pages: ["home", "products", "about"],
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

/** Intentional trap: Products page reorders primary nav. */
export const NAV_ORDER_BY_PAGE: Record<PracticePageId, readonly string[]> = {
  home: ["Home", "Products", "About"],
  products: ["Products", "Home", "About"],
  about: ["Home", "Products", "About"],
};

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
