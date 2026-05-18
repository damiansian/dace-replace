import { getMotionNumber } from "@/data/week4-practice/practice-overlays";
import type { PracticePageId } from "@/data/week4-practice/practice-zones";
import { NumberedOutline } from "./NumberedOutline";

const outlinePad = "pt-8 pl-2";

export function MotionTargetOutline({
  motionId,
  pageId,
  children,
  className = "",
}: {
  motionId: string;
  pageId: PracticePageId;
  children: React.ReactNode;
  className?: string;
}) {
  const number = getMotionNumber(motionId, pageId);
  return (
    <NumberedOutline
      number={number}
      mode="motion"
      dataAttr={{ name: "data-motion-id", value: motionId }}
      className={`${outlinePad} ${className}`}
    >
      {children}
    </NumberedOutline>
  );
}
