import {
  ZONE_NUMBERS,
  type PracticeZoneId,
} from "@/data/week4-practice/practice-zones";

const ZONE_COLORS: Record<PracticeZoneId, string> = {
  "site-header": "border-primary bg-primary/5",
  "primary-nav": "border-accent-green bg-accent-green/5",
  "site-search": "border-amber-600 bg-amber-50",
  "main-content": "border-primary-dark bg-primary/10",
  sidebar: "border-text-secondary bg-surface",
  "footer-nav": "border-accent-green bg-accent-green/5",
  "site-footer": "border-border bg-surface",
};

export function ZoneOutline({
  zoneId,
  showLegend,
  children,
  className = "",
}: {
  zoneId: PracticeZoneId;
  showLegend: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-practice-zone={zoneId}
      className={`relative border-2 border-dashed rounded-md ${ZONE_COLORS[zoneId]} ${className}`}
    >
      {showLegend && (
        <span
          className="absolute -top-3 left-2 z-10 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-foreground px-1.5 text-xs font-bold text-white"
          aria-hidden="true"
        >
          {ZONE_NUMBERS[zoneId]}
        </span>
      )}
      {children}
    </div>
  );
}
