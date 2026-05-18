import {
  motionRequiresReducedMotionStatic,
  type MotionSeed,
} from "@/data/week4-practice/practice-zones";
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

  if (choice === "no") {
    return !mustRespectReducedMotion(seed);
  }

  if (motionRequiresReducedMotionStatic(seed)) {
    return Boolean(row?.reducedMotionAlt.trim());
  }

  return true;
}

export function reducedMotionCoachMessage(
  seed: MotionSeed,
  row: MotionInventoryRow | undefined
): string {
  const choice = row?.respectsReducedMotion ?? "";
  if (choice !== "yes" && choice !== "no") {
    return `${seed.label}: choose Yes or No for prefers-reduced-motion.`;
  }

  if (choice === "no") {
    if (mustRespectReducedMotion(seed)) {
      return `${seed.label}: auto-playing motion needs a reduced-motion plan (answer Yes and document the static version).`;
    }
    return `${seed.label}: marked as not respecting prefers-reduced-motion.`;
  }

  if (motionRequiresReducedMotionStatic(seed)) {
    return row?.reducedMotionAlt.trim()
      ? `${seed.label}: prefers-reduced-motion static alternative documented.`
      : `${seed.label}: describe the static version when prefers-reduced-motion is enabled.`;
  }

  return `${seed.label}: hover motion is removed under prefers-reduced-motion (no separate static version required).`;
}
