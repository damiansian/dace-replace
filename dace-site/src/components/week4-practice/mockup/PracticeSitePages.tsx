import { PracticeSiteShell } from "./PracticeSiteShell";
import type { PracticePageId } from "@/data/week4-practice/practice-zones";

function SidebarPromo() {
  return (
    <aside>
      <p className="font-semibold text-foreground text-sm m-0 mb-2">Filters</p>
      <ul className="list-none m-0 p-0 space-y-1 text-text-secondary text-xs">
        <li>In stock</li>
        <li>On sale</li>
        <li>New arrivals</li>
      </ul>
    </aside>
  );
}

function HomeMain() {
  return (
    <>
      <h2 className="text-lg font-semibold text-foreground mt-0">Welcome back</h2>
      <section
        className="rounded-md border border-border bg-surface p-4 mb-4"
        aria-label="Hero carousel — motion item 1"
      >
        <p className="text-sm text-foreground font-medium m-0 mb-1">
          Hero carousel (static preview)
        </p>
        <p className="text-xs text-text-secondary m-0 mb-3">
          Spec: auto-advances every 5 seconds. Requires pause control.
        </p>
        <div className="flex gap-2">
          <span className="rounded bg-primary/20 px-3 py-2 text-xs">Slide 1</span>
          <span className="rounded border border-dashed border-border px-3 py-2 text-xs text-text-secondary">
            Slide 2
          </span>
          <span className="rounded border border-dashed border-border px-3 py-2 text-xs text-text-secondary">
            Slide 3
          </span>
        </div>
        <button
          type="button"
          className="mt-3 text-xs text-primary-text underline"
          disabled
        >
          Pause (shown in spec, not functional in preview)
        </button>
      </section>
      <p className="text-sm text-text-secondary">
        Browse featured products below. Use the workbook to document landmarks and
        motion for this page.
      </p>
    </>
  );
}

function ProductsMain() {
  return (
    <>
      <h2 className="text-lg font-semibold text-foreground mt-0">Products</h2>
      <p className="text-sm text-text-secondary mb-4">
        Primary navigation matches Home and About (Home, Products, About).
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none m-0 p-0">
        {["Trail pack", "Desk lamp", "Water bottle"].map((name) => (
          <li
            key={name}
            className="rounded-md border border-border p-3"
            aria-label={`${name} — hover scale motion item`}
          >
            <p className="font-medium text-foreground m-0 mb-2">{name}</p>
            <p className="text-xs text-text-secondary m-0 mb-2">
              Spec: card scales 4% on hover, 200ms.
            </p>
            <button
              type="button"
              className="rounded bg-primary px-3 py-1.5 text-xs font-medium text-white"
            >
              Add to cart
            </button>
            <p className="text-xs text-text-secondary mt-2 m-0">
              Spec: success uses sliding checkmark transition.
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

function AboutMain() {
  return (
    <>
      <h2 className="text-lg font-semibold text-foreground mt-0">About Northstar</h2>
      <p className="text-sm text-text-secondary">
        We design outdoor gear for everyday adventures.
      </p>
      <section
        className="mt-4"
        aria-label="Team section — scroll-driven motion item"
      >
        <h3 className="text-base font-semibold text-foreground">Our team</h3>
        <p className="text-xs text-text-secondary">
          Spec: photos fade and slide up when scrolled into view.
        </p>
        <ul className="flex gap-3 list-none m-0 p-0 mt-2">
          {["Alex", "Jordan", "Sam"].map((name) => (
            <li
              key={name}
              className="rounded-full bg-surface border border-border w-16 h-16 flex items-center justify-center text-xs text-text-secondary"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function PracticeSitePage({
  pageId,
  showZoneLegend,
}: {
  pageId: PracticePageId;
  showZoneLegend: boolean;
}) {
  const sidebar = pageId !== "about" ? <SidebarPromo /> : undefined;

  return (
    <PracticeSiteShell pageId={pageId} showZoneLegend={showZoneLegend} sidebar={sidebar}>
      {pageId === "home" && <HomeMain />}
      {pageId === "products" && <ProductsMain />}
      {pageId === "about" && <AboutMain />}
    </PracticeSiteShell>
  );
}
