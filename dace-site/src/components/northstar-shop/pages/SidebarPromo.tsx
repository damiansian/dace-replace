export default function SidebarPromo() {
  return (
    <aside
      aria-label="Filters and promotions"
      className="rounded-md border border-border bg-surface p-4 text-sm"
    >
      <p className="font-semibold text-foreground m-0 mb-2">Filters</p>
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
      <p className="text-xs text-text-secondary m-0 mt-3">
        Free shipping on orders over $75.
      </p>
    </aside>
  );
}
