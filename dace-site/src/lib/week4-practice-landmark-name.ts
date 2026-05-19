const GENERIC_LANDMARK_NAME = /\b(region|section)\b/i;

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
