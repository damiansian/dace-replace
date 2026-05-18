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

/** Numbered in visual/tab order (header → main → footer). Correct target varies by page. */
export const SKIP_TARGETS_BY_PAGE: Record<PracticePageId, SkipTarget[]> = {
  home: [
    { id: "site-title", description: "Site title (Northstar Shop)" },
    { id: "nav-home", description: "Primary navigation (first link)" },
    { id: "search", description: "Search field" },
    { id: "welcome-heading", description: "Welcome back heading" },
    {
      id: "slide-1",
      description: "Featured promotions (first slide control)",
      isCorrectFirstTab: true,
    },
    { id: "footer-privacy", description: "Footer links (first link)" },
  ],
  products: [
    { id: "site-title", description: "Site title (Northstar Shop)" },
    {
      id: "trail-pack-cart",
      description: "Add to cart — Trail pack",
      isCorrectFirstTab: true,
    },
    { id: "nav-home", description: "Primary navigation (first link)" },
    { id: "search", description: "Search field" },
    { id: "products-heading", description: "Products heading" },
    { id: "footer-privacy", description: "Footer links (first link)" },
  ],
  about: [
    { id: "nav-home", description: "Primary navigation (first link)" },
    { id: "search", description: "Search field" },
    { id: "about-heading", description: "About Northstar heading" },
    {
      id: "alex-profile",
      description: "Alex (team profile)",
      isCorrectFirstTab: true,
    },
    { id: "jordan-profile", description: "Jordan (team profile)" },
    { id: "sam-profile", description: "Sam (team profile)" },
    { id: "footer-privacy", description: "Footer links (first link)" },
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

export function getCorrectSkipTargetId(pageId: PracticePageId): string | null {
  return skipTargetsForPage(pageId).find((t) => t.isCorrectFirstTab)?.id ?? null;
}

export function getCorrectSkipTargetNumber(pageId: PracticePageId): number {
  const id = getCorrectSkipTargetId(pageId);
  return id ? getSkipTargetNumber(pageId, id) : 0;
}

/** Options for workbook dropdowns (value = target id). */
export function skipTargetSelectOptions(pageId: PracticePageId): {
  value: string;
  label: string;
}[] {
  return skipTargetsForPage(pageId).map((t) => ({
    value: t.id,
    label: `${getSkipTargetNumber(pageId, t.id)}. ${t.description}`,
  }));
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

/** Motion target number on a given page (always starts at 1). */
export function getMotionNumber(motionId: string, pageId: PracticePageId): number {
  const onPage = motionItemsForPage(pageId);
  const index = onPage.findIndex((m) => m.id === motionId);
  return index >= 0 ? index + 1 : 0;
}

/** Coach check: first Tab stop in main after skip link + one Tab (per page). */
export function matchesSkipLinkFirstTab(
  pageId: PracticePageId,
  answer: string
): boolean {
  const normalized = answer.trim();
  if (!normalized) return false;

  const correctId = getCorrectSkipTargetId(pageId);
  if (correctId && normalized === correctId) return true;

  const normalizedLower = normalized.toLowerCase();
  const correctNum = getCorrectSkipTargetNumber(pageId);
  if (correctNum > 0) {
    const numOnly = normalizedLower.match(/^\d+$/);
    if (numOnly && parseInt(numOnly[0], 10) === correctNum) return true;
  }

  switch (pageId) {
    case "home":
      return normalizedLower === "slide-1" || /slide\s*1/.test(normalizedLower);
    case "products":
      return normalizedLower === "trail-pack-cart" || (/add\s*to\s*cart/.test(normalizedLower) && /trail/.test(normalizedLower));
    case "about":
      return normalizedLower === "alex-profile" || /alex/.test(normalizedLower);
    default:
      return false;
  }
}
