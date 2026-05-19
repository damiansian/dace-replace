/** Marks a root landmark region for F6 cycling (see NorthstarLandmarkF6Nav). */
export const NORTHSTAR_LANDMARK_ATTR = "data-northstar-landmark";

export type NorthstarLandmarkId =
  | "banner"
  | "navigation"
  | "search"
  | "main"
  | "filters"
  | "contact-form"
  | "contentinfo";

const LANDMARK_LABELS: Record<NorthstarLandmarkId, string> = {
  banner: "Banner",
  navigation: "Navigation",
  search: "Search",
  main: "Main",
  filters: "Filters",
  "contact-form": "Contact form",
  contentinfo: "Content information",
};

export function northstarLandmarkLabel(id: NorthstarLandmarkId): string {
  return LANDMARK_LABELS[id];
}

export function northstarLandmarkProps(
  id: NorthstarLandmarkId,
  className?: string
): {
  [NORTHSTAR_LANDMARK_ATTR]: NorthstarLandmarkId;
  tabIndex: -1;
  className: string;
} {
  return {
    [NORTHSTAR_LANDMARK_ATTR]: id,
    tabIndex: -1,
    className: ["northstar-landmark", className].filter(Boolean).join(" "),
  };
}
