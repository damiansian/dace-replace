import type { PracticePageId } from "./practice-zones";
import { MOTION_SEEDS } from "./practice-zones";

export type PracticeOverlayMode = "landmark" | "skipNav" | "motion";

export interface SkipTarget {
  id: string;
  /** Shown in the step legend (neutral; does not reveal the answer). */
  description: string;
  /** First Tab stop in main after skip link + one Tab (coach check). */
  isCorrectFirstTab?: boolean;
}

export const SKIP_TARGETS_BY_PAGE: Record<PracticePageId, SkipTarget[]> = {
  home: [
    { id: "site-title", description: "Site title (Northstar Shop)" },
    { id: "nav-home", description: "Home link in primary navigation" },
    { id: "nav-products", description: "Products link in primary navigation" },
    { id: "nav-about", description: "About link in primary navigation" },
    { id: "search", description: "Search field" },
    { id: "welcome-heading", description: "Welcome back heading" },
    {
      id: "slide-1",
      description: "Slide 1 control (hero carousel)",
      isCorrectFirstTab: true,
    },
    { id: "slide-2", description: "Slide 2 (featured promotions)" },
    { id: "slide-3", description: "Slide 3 (featured promotions)" },
    { id: "footer-privacy", description: "Privacy footer link" },
    { id: "footer-terms", description: "Terms footer link" },
    { id: "footer-support", description: "Support footer link" },
  ],
  products: [
    { id: "site-title", description: "Site title (Northstar Shop)" },
    { id: "nav-home", description: "Home link in primary navigation" },
    { id: "nav-products", description: "Products link in primary navigation" },
    { id: "nav-about", description: "About link in primary navigation" },
    { id: "search", description: "Search field" },
    { id: "products-heading", description: "Products heading" },
    { id: "trail-pack-card", description: "Trail pack product card" },
    {
      id: "trail-pack-cart",
      description: "Add to cart — Trail pack",
      isCorrectFirstTab: true,
    },
    { id: "desk-lamp-cart", description: "Add to cart — Desk lamp" },
    { id: "water-bottle-cart", description: "Add to cart — Water bottle" },
    { id: "footer-privacy", description: "Privacy footer link" },
    { id: "footer-terms", description: "Terms footer link" },
    { id: "footer-support", description: "Support footer link" },
  ],
  about: [
    { id: "site-title", description: "Site title (Northstar Shop)" },
    { id: "nav-home", description: "Home link in primary navigation" },
    { id: "nav-products", description: "Products link in primary navigation" },
    { id: "nav-about", description: "About link in primary navigation" },
    { id: "search", description: "Search field" },
    { id: "about-heading", description: "About Northstar heading" },
    {
      id: "alex-profile",
      description: "Alex profile control (team section)",
      isCorrectFirstTab: true,
    },
    { id: "footer-privacy", description: "Privacy footer link" },
    { id: "footer-terms", description: "Terms footer link" },
    { id: "footer-support", description: "Support footer link" },
  ],
};

export function skipTargetsForPage(pageId: PracticePageId): SkipTarget[] {
  return SKIP_TARGETS_BY_PAGE[pageId];
}

export function getSkipTargetNumber(
  pageId: PracticePageId,
  targetId: string
): number {
  const targets = skipTargetsForPage(pageId);
  const index = targets.findIndex((t) => t.id === targetId);
  return index >= 0 ? index + 1 : 0;
}

export function skipTargetDisplayName(
  pageId: PracticePageId,
  targetId: string
): string {
  const n = getSkipTargetNumber(pageId, targetId);
  return n > 0 ? `Target ${n}` : targetId;
}

export function getCorrectSkipTargetNumber(pageId: PracticePageId): number {
  const targets = skipTargetsForPage(pageId);
  const index = targets.findIndex((t) => t.isCorrectFirstTab);
  return index >= 0 ? index + 1 : 0;
}

/** Global motion item number (1–4) matching MOTION_SEEDS order. */
export function getMotionNumber(motionId: string): number {
  const index = MOTION_SEEDS.findIndex((m) => m.id === motionId);
  return index >= 0 ? index + 1 : 0;
}

export function motionItemsForPage(pageId: PracticePageId) {
  return MOTION_SEEDS.filter((m) => {
    if (m.id === "hero-carousel") return pageId === "home";
    if (m.id === "product-card-hover" || m.id === "add-to-cart-transition") {
      return pageId === "products";
    }
    if (m.id === "about-team-fade") return pageId === "about";
    return false;
  });
}

/** Coach check: first Tab stop in main after skip link + one Tab (per page). */
export function matchesSkipLinkFirstTab(
  pageId: PracticePageId,
  answer: string
): boolean {
  const normalized = answer.trim().toLowerCase();
  if (!normalized) return false;

  const correctNum = getCorrectSkipTargetNumber(pageId);
  if (correctNum > 0) {
    const numOnly = normalized.match(/^\d+$/);
    if (numOnly && parseInt(numOnly[0], 10) === correctNum) return true;
    if (
      new RegExp(`\\b${correctNum}\\b`).test(normalized) &&
      /target|#|number|stop/.test(normalized)
    ) {
      return true;
    }
  }

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
