import { getSkipTargetNumber } from "@/data/week4-practice/practice-overlays";
import type { PracticePageId } from "@/data/week4-practice/practice-zones";
import { NumberedOutline } from "./NumberedOutline";

const outlinePad = "pt-8 pl-2";

export function SkipTargetOutline({
  targetId,
  pageId,
  children,
  className = "",
}: {
  targetId: string;
  pageId: PracticePageId;
  children: React.ReactNode;
  className?: string;
}) {
  const number = getSkipTargetNumber(pageId, targetId);
  return (
    <NumberedOutline
      number={number}
      mode="skipNav"
      dataAttr={{ name: "data-skip-target", value: targetId }}
      className={`${outlinePad} ${className}`}
    >
      {children}
    </NumberedOutline>
  );
}
