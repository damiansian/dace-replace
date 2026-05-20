import { NORTHSTAR_SIDEBAR_SHIPPING_NOTE } from "@/data/northstar-shop/copy";
import { northstarLandmarkProps } from "../northstar-landmark";

export default function SidebarPromo() {
  return (
    <section
      aria-labelledby="filters-heading"
      {...northstarLandmarkProps(
        "filters",
        "rounded-md border border-border bg-surface p-4 text-sm"
      )}
    >
      <h2
        id="filters-heading"
        className="text-base font-semibold text-foreground m-0 mb-2"
      >
        Filters
      </h2>
      <ul className="list-none m-0 p-0 space-y-1 text-text-secondary text-xs">
        <li>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked /> In stock
          </label>
        </li>
        <li>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" /> On sale
          </label>
        </li>
        <li>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" /> New arrivals
          </label>
        </li>
      </ul>
      <p className="text-xs text-text-secondary m-0 mt-3">{NORTHSTAR_SIDEBAR_SHIPPING_NOTE}</p>
    </section>
  );
}
