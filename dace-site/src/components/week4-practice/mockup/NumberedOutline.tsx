import type { PracticeOverlayMode } from "@/data/week4-practice/practice-overlays";

const VARIANT_STYLES: Record<PracticeOverlayMode, string> = {
  landmark: "border-primary bg-primary/5",
  skipNav: "border-amber-600 bg-amber-50",
  motion: "border-primary-dark bg-primary/10",
};

export function NumberedOutline({
  number,
  mode,
  children,
  className = "",
  dataAttr,
}: {
  number: number;
  mode: PracticeOverlayMode;
  children: React.ReactNode;
  className?: string;
  dataAttr?: { name: string; value: string };
}) {
  if (number <= 0) {
    return <>{children}</>;
  }

  const dataProps = dataAttr ? { [dataAttr.name]: dataAttr.value } : {};

  return (
    <div
      data-practice-outline={mode}
      {...dataProps}
      className={`relative border-2 border-dashed rounded-md ${VARIANT_STYLES[mode]} ${className}`}
    >
      <span
        className="absolute top-2 left-2 z-10 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-foreground px-1.5 text-xs font-bold text-white shadow-sm"
        aria-hidden="true"
      >
        {number}
      </span>
      {children}
    </div>
  );
}
