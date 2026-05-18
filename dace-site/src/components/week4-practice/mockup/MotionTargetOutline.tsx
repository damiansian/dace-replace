import { getMotionNumber } from "@/data/week4-practice/practice-overlays";
import { NumberedOutline } from "./NumberedOutline";

const outlinePad = "pt-8 pl-2";

export function MotionTargetOutline({
  motionId,
  children,
  className = "",
}: {
  motionId: string;
  children: React.ReactNode;
  className?: string;
}) {
  const number = getMotionNumber(motionId);
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
