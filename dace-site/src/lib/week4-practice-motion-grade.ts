import type { MotionSeed } from "@/data/week4-practice/practice-zones";
import type { MotionInventoryRow } from "@/data/week4-practice/workbook-types";

function yesNoAnswered(value: string | undefined): boolean {
  return value === "yes" || value === "no";
}

export function needsPauseButtonAnswered(row: MotionInventoryRow | undefined): boolean {
  return yesNoAnswered(row?.pauseRequired);
}

export function needsPauseButtonPasses(
  seed: MotionSeed,
  row: MotionInventoryRow | undefined
): boolean {
  const answer = row?.pauseRequired ?? "";
  if (!yesNoAnswered(answer)) return false;
  const expected = seed.pauseRequired ? "yes" : "no";
  return answer === expected;
}

export function needsPauseButtonCoachMessage(
  seed: MotionSeed,
  row: MotionInventoryRow | undefined
): string {
  const answer = row?.pauseRequired ?? "";
  if (!yesNoAnswered(answer)) {
    return `${seed.label}: choose Yes or No for whether a pause button is needed.`;
  }
  if (needsPauseButtonPasses(seed, row)) {
    return seed.pauseRequired
      ? `${seed.label}: correctly identified that auto-play needs a pause control.`
      : `${seed.label}: correctly identified that a pause control is not required.`;
  }
  return seed.pauseRequired
    ? `${seed.label}: auto-playing content needs a pause, stop, or hide control (answer Yes).`
    : `${seed.label}: this motion does not require a pause control (answer No).`;
}

export function shouldRespectPreferenceAnswered(row: MotionInventoryRow | undefined): boolean {
  return yesNoAnswered(row?.respectsReducedMotion);
}

export function shouldRespectPreferencePasses(
  _seed: MotionSeed,
  row: MotionInventoryRow | undefined
): boolean {
  return row?.respectsReducedMotion === "yes";
}

export function shouldRespectPreferenceCoachMessage(
  seed: MotionSeed,
  row: MotionInventoryRow | undefined
): string {
  const answer = row?.respectsReducedMotion ?? "";
  if (!yesNoAnswered(answer)) {
    return `${seed.label}: choose Yes or No for whether motion should respect prefers-reduced-motion.`;
  }
  if (answer === "yes") {
    return `${seed.label}: motion should respect prefers-reduced-motion.`;
  }
  return `${seed.label}: animated content should respect prefers-reduced-motion (answer Yes).`;
}
