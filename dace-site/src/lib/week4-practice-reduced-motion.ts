import type { MotionSeed } from "@/data/week4-practice/practice-zones";
import type { MotionInventoryRow } from "@/data/week4-practice/workbook-types";

function mustRespectReducedMotion(seed: MotionSeed): boolean {
  return seed.suggestedType === "auto-play" || seed.suggestedType === "looping";
}

export function reducedMotionAnswered(row: MotionInventoryRow | undefined): boolean {
  return row?.respectsReducedMotion === "yes" || row?.respectsReducedMotion === "no";
}

export function reducedMotionPasses(seed: MotionSeed, row: MotionInventoryRow | undefined): boolean {
  const choice = row?.respectsReducedMotion ?? "";
  if (choice !== "yes" && choice !== "no") return false;
  if (choice === "yes") return true;
  return !mustRespectReducedMotion(seed);
}

export function reducedMotionCoachMessage(
  seed: MotionSeed,
  row: MotionInventoryRow | undefined
): string {
  const choice = row?.respectsReducedMotion ?? "";
  if (choice !== "yes" && choice !== "no") {
    return `${seed.label}: choose Yes or No for prefers-reduced-motion.`;
  }

  if (choice === "yes") {
    return `${seed.label}: respects prefers-reduced-motion.`;
  }

  if (mustRespectReducedMotion(seed)) {
    return `${seed.label}: auto-playing motion should respect prefers-reduced-motion (answer Yes).`;
  }

  return `${seed.label}: marked as not respecting prefers-reduced-motion.`;
}
