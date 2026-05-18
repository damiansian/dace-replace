import Link from "next/link";
import {
  NAV_ORDER_BY_PAGE,
  type PracticePageId,
} from "@/data/week4-practice/practice-zones";
import { ZoneOutline } from "./ZoneOutline";

const PAGE_LABEL: Record<PracticePageId, string> = {
  home: "Home",
  products: "Products",
  about: "About",
};

export function PracticeSiteShell({
  pageId,
  showZoneLegend,
  children,
  sidebar,
}: {
  pageId: PracticePageId;
  showZoneLegend: boolean;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  const navOrder = NAV_ORDER_BY_PAGE[pageId];
  const currentLabel = PAGE_LABEL[pageId];

  return (
    <div className="rounded-lg border border-border bg-white shadow-sm overflow-hidden text-sm">
      <ZoneOutline zoneId="site-header" showLegend={showZoneLegend} className="m-2 p-3">
        <div className="flex flex-wrap items-center gap-4 justify-between">
          <p className="font-bold text-foreground">Northstar Shop</p>
          <ZoneOutline
            zoneId="primary-nav"
            showLegend={showZoneLegend}
            className="flex-1 min-w-0 p-1"
          >
            <nav aria-label="Unlabeled in mockup — you specify in workbook">
              <ul className="flex flex-wrap gap-3 list-none m-0 p-0">
                {navOrder.map((item) => (
                  <li key={item}>
                    <span
                      className={
                        item === currentLabel
                          ? "font-semibold text-primary-text underline"
                          : "text-text-secondary"
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </ZoneOutline>
          <ZoneOutline zoneId="site-search" showLegend={showZoneLegend} className="p-1">
            <label className="flex items-center gap-2 text-text-secondary">
              <span className="sr-only">Search</span>
              <input
                type="search"
                placeholder="Search products"
                className="rounded border border-border px-2 py-1 text-sm min-w-[140px]"
                readOnly
                aria-readonly="true"
              />
            </label>
          </ZoneOutline>
        </div>
      </ZoneOutline>

      <div className="flex gap-2 m-2">
        <ZoneOutline
          zoneId="main-content"
          showLegend={showZoneLegend}
          className="flex-1 min-w-0 p-4"
        >
          <div id="main-content">{children}</div>
        </ZoneOutline>
        {sidebar ? (
          <ZoneOutline
            zoneId="sidebar"
            showLegend={showZoneLegend}
            className="w-48 shrink-0 p-3 hidden sm:block"
          >
            {sidebar}
          </ZoneOutline>
        ) : null}
      </div>

      <ZoneOutline zoneId="footer-nav" showLegend={showZoneLegend} className="m-2 p-2">
        <nav aria-label="Footer links — name in workbook">
          <ul className="flex flex-wrap gap-4 list-none m-0 p-0 text-text-secondary">
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Terms</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </nav>
      </ZoneOutline>

      <ZoneOutline zoneId="site-footer" showLegend={showZoneLegend} className="m-2 p-3">
        <p className="text-text-secondary text-xs m-0">
          © 2026 Northstar Shop. Practice mockup for DACE Week 4.
        </p>
      </ZoneOutline>
    </div>
  );
}
