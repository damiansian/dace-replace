import {
  getZoneNumber,
  type PracticePageId,
  type PracticeZoneId,
} from "@/data/week4-practice/practice-zones";
import { NumberedOutline } from "./NumberedOutline";

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
  pageId,
  children,
  className = "",
}: {
  zoneId: PracticeZoneId;
  pageId: PracticePageId;
  children: React.ReactNode;
  className?: string;
}) {
  const number = getZoneNumber(zoneId, pageId);
  return (
    <NumberedOutline
      number={number}
      mode="landmark"
      dataAttr={{ name: "data-practice-zone", value: zoneId }}
      className={`${ZONE_COLORS[zoneId]} ${className}`}
    >
      {children}
    </NumberedOutline>
  );
}
