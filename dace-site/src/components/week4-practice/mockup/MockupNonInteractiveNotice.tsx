/** Props for mockup controls that must not receive focus or activation. */
export const mockupControlProps = {
  disabled: true,
  tabIndex: -1,
  "aria-disabled": true as const,
};

/** Footer and nav links that look like links but are not active. */
export function MockupStaticLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-text-secondary underline cursor-default" aria-disabled="true">
      {children}
    </span>
  );
}

/** Shown on every Northstar Shop overlay (landmark, skip nav, motion). */
export function MockupNonInteractiveNotice({ className = "" }: { className?: string }) {
  return (
    <p
      role="status"
      className={`rounded-md border border-border bg-surface px-3 py-2 text-xs text-text-secondary m-0 ${className}`}
    >
      <span className="font-semibold text-foreground">Static preview.</span> Northstar Shop
      controls are shown for reference only. Links, buttons, and the search field do not work
      in this sample.
    </p>
  );
}
