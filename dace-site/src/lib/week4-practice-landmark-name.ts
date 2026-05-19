const GENERIC_LANDMARK_NAME = /\b(region|section)\b/i;

const ROLES_REQUIRING_ACCESSIBLE_NAME = new Set(["region", "section"]);

/** Accessible name is required only when region/section is selected as the role or HTML. */
export function isAccessibleNameRequired(
  role: string | undefined,
  htmlEquivalent?: string | undefined
): boolean {
  const normalizedRole = role?.trim().toLowerCase() ?? "";
  const normalizedHtml = htmlEquivalent?.trim().toLowerCase() ?? "";
  return (
    ROLES_REQUIRING_ACCESSIBLE_NAME.has(normalizedRole) ||
    normalizedHtml === "section"
  );
}

/** True when the accessible name uses "Region" or "Section" (any casing). */
export function hasGenericLandmarkName(name: string): boolean {
  return GENERIC_LANDMARK_NAME.test(name.trim());
}

export function genericLandmarkNameCoachMessage(
  pageLabel: string,
  zoneLabel: string
): string {
  return `${pageLabel} / ${zoneLabel}: do not use "Region" or "Section" in the accessible name. Use a descriptive label for what this area contains.`;
}
