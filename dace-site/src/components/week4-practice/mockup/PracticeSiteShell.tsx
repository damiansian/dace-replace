import type { PracticeOverlayMode } from "@/data/week4-practice/practice-overlays";
import {
  NAV_ORDER_BY_PAGE,
  type PracticePageId,
} from "@/data/week4-practice/practice-zones";
import {
  MockupNonInteractiveNotice,
  MockupStaticLink,
  mockupControlProps,
} from "./MockupNonInteractiveNotice";
import { SkipTargetOutline } from "./SkipTargetOutline";
import { ZoneOutline } from "./ZoneOutline";

const PAGE_LABEL: Record<PracticePageId, string> = {
  home: "Home",
  products: "Products",
  about: "About",
};

const zonePad = "pt-8 pl-2";

function SiteSearch({
  pageId,
  overlayMode,
}: {
  pageId: PracticePageId;
  overlayMode: PracticeOverlayMode;
}) {
  const field = (
    <label
      htmlFor={`practice-site-search-${pageId}`}
      className="flex items-center gap-2 rounded border border-border bg-surface px-2 py-1 min-w-[140px] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary"
    >
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4 shrink-0 text-foreground"
      >
        <circle
          cx="8.5"
          cy="8.5"
          r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M12.5 12.5 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
      <span className="sr-only">Search products</span>
      <input
        id={`practice-site-search-${pageId}`}
        type="search"
        className="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm text-foreground focus:outline-none"
        readOnly
        aria-readonly="true"
        title="Static preview — search is not functional"
      />
    </label>
  );

  if (overlayMode === "skipNav") {
    return (
      <SkipTargetOutline targetId="search" pageId={pageId} className="p-1 inline-flex">
        {field}
      </SkipTargetOutline>
    );
  }

  if (overlayMode === "landmark") {
    return (
      <ZoneOutline zoneId="site-search" pageId={pageId} className={`p-1 ${zonePad}`}>
        {field}
      </ZoneOutline>
    );
  }

  return <div className="p-1">{field}</div>;
}

function LandmarkShell({
  pageId,
  children,
  sidebar,
}: {
  pageId: PracticePageId;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  const navOrder = NAV_ORDER_BY_PAGE[pageId];
  const currentLabel = PAGE_LABEL[pageId];

  return (
    <>
      <ZoneOutline zoneId="site-header" pageId={pageId} className={`m-2 p-3 ${zonePad}`}>
        <div className="flex flex-wrap items-center gap-4 justify-between">
          <p className="font-bold text-foreground">Northstar Shop</p>
          <ZoneOutline
            zoneId="primary-nav"
            pageId={pageId}
            className={`flex-1 min-w-0 p-1 ${zonePad}`}
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
          <SiteSearch pageId={pageId} overlayMode="landmark" />
        </div>
      </ZoneOutline>

      <div className="flex gap-2 m-2">
        <ZoneOutline
          zoneId="main-content"
          pageId={pageId}
          className={`flex-1 min-w-0 p-4 ${zonePad}`}
        >
          <div id="main-content">{children}</div>
        </ZoneOutline>
        {sidebar ? (
          <ZoneOutline
            zoneId="sidebar"
            pageId={pageId}
            className={`w-48 shrink-0 p-3 hidden sm:block ${zonePad}`}
          >
            {sidebar}
          </ZoneOutline>
        ) : null}
      </div>

      <ZoneOutline zoneId="site-footer" pageId={pageId} className={`m-2 p-3 ${zonePad}`}>
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-4 list-none m-0 p-0 mb-2 text-text-secondary">
            <li>
              <MockupStaticLink>Privacy</MockupStaticLink>
            </li>
            <li>
              <MockupStaticLink>Terms</MockupStaticLink>
            </li>
            <li>
              <MockupStaticLink>Support</MockupStaticLink>
            </li>
          </ul>
        </nav>
        <p className="text-text-secondary text-xs m-0">
          © 2026 Northstar Shop. Static practice mockup for DACE Week 4.
        </p>
      </ZoneOutline>
    </>
  );
}

function SkipNavShell({
  pageId,
  children,
  sidebar,
}: {
  pageId: PracticePageId;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  const navOrder = NAV_ORDER_BY_PAGE[pageId];
  const currentLabel = PAGE_LABEL[pageId];
  const navTargetId: Record<string, string> = {
    Home: "nav-home",
    Products: "nav-products",
    About: "nav-about",
  };

  return (
    <>
      <div className="m-2 p-3 flex flex-wrap items-center gap-3">
        <SkipTargetOutline targetId="site-title" pageId={pageId} className="inline-flex p-2">
          <p className="font-bold text-foreground m-0">Northstar Shop</p>
        </SkipTargetOutline>
        {pageId === "products" ? (
          <SkipTargetOutline
            targetId="trail-pack-cart"
            pageId={pageId}
            className="inline-flex p-1"
          >
            <button
              type="button"
              {...mockupControlProps}
              className="rounded bg-primary px-3 py-1.5 text-xs font-medium text-white whitespace-nowrap"
              aria-label="Add to cart, Trail pack"
            >
              Add to cart — Trail pack
            </button>
          </SkipTargetOutline>
        ) : null}
        <nav aria-label="Unlabeled in mockup — you specify in workbook" className="flex flex-wrap gap-2">
          <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
            {navOrder.map((item, index) => {
              const link = (
                <span
                  className={
                    item === currentLabel
                      ? "font-semibold text-primary-text underline"
                      : "text-text-secondary"
                  }
                >
                  {item}
                </span>
              );
              return (
                <li key={item}>
                  {index === 0 ? (
                    <SkipTargetOutline
                      targetId={navTargetId[item]}
                      pageId={pageId}
                      className="inline-flex p-1"
                    >
                      {link}
                    </SkipTargetOutline>
                  ) : (
                    <span className="inline-flex p-1">{link}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <SiteSearch pageId={pageId} overlayMode="skipNav" />
      </div>

      <div className="flex gap-2 m-2">
        <div className="flex-1 min-w-0 p-2">
          <div id="main-content">{children}</div>
        </div>
        {sidebar ? <div className="w-48 shrink-0 p-3 hidden sm:block">{sidebar}</div> : null}
      </div>

      <div className="m-2 p-3">
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-3 list-none m-0 p-0 mb-2 text-text-secondary">
            {(
              [
                ["footer-privacy", "Privacy"],
                ["footer-terms", "Terms"],
                ["footer-support", "Support"],
              ] as const
            ).map(([targetId, label], index) => (
              <li key={targetId}>
                {index === 0 ? (
                  <SkipTargetOutline targetId={targetId} pageId={pageId} className="inline-flex p-1">
                    <MockupStaticLink>{label}</MockupStaticLink>
                  </SkipTargetOutline>
                ) : (
                  <span className="inline-flex p-1">
                    <MockupStaticLink>{label}</MockupStaticLink>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-text-secondary text-xs m-0">
          © 2026 Northstar Shop. Static practice mockup for DACE Week 4.
        </p>
      </div>
    </>
  );
}

function MotionShell({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  return (
    <>
      <div className="m-2 p-3 flex flex-wrap items-center gap-4 justify-between border-b border-border">
        <p className="font-bold text-foreground m-0">Northstar Shop</p>
        <p className="text-xs text-text-secondary m-0">Header not numbered in motion view</p>
      </div>

      <div className="flex gap-2 m-2">
        <div className="flex-1 min-w-0 p-2">
          <div id="main-content">{children}</div>
        </div>
        {sidebar ? (
          <div className="w-48 shrink-0 p-3 hidden sm:block text-xs text-text-secondary">
            {sidebar}
          </div>
        ) : null}
      </div>

      <div className="m-2 p-3 border-t border-border text-text-secondary text-xs">
        Footer not numbered in motion view
      </div>
    </>
  );
}

export function PracticeSiteShell({
  pageId,
  children,
  sidebar,
  overlayMode = "landmark",
}: {
  pageId: PracticePageId;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  overlayMode?: PracticeOverlayMode;
}) {
  const inner =
    overlayMode === "skipNav" ? (
      <SkipNavShell pageId={pageId} sidebar={sidebar}>
        {children}
      </SkipNavShell>
    ) : overlayMode === "motion" ? (
      <MotionShell sidebar={sidebar}>{children}</MotionShell>
    ) : (
      <LandmarkShell pageId={pageId} sidebar={sidebar}>
        {children}
      </LandmarkShell>
    );

  return (
    <div className="rounded-lg border border-border bg-white shadow-sm text-sm">
      <MockupNonInteractiveNotice className="m-2 mb-0" />
      <div
        inert
        className="pointer-events-none select-none"
        aria-label="Northstar Shop static practice mockup. Controls are not interactive."
      >
        {inner}
      </div>
    </div>
  );
}
