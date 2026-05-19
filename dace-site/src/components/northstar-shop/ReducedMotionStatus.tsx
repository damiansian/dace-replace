"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Track when the component has hydrated on the client. Before hydration, the
 * server can't read matchMedia, so we render a neutral "Checking…" state to
 * keep SSR and client output aligned.
 */
function subscribeHydrated(callback: () => void): () => void {
  // Fires once after subscribe, which only happens on the client.
  const id = window.setTimeout(callback, 0);
  return () => window.clearTimeout(id);
}

function getHydratedSnapshot(): boolean {
  return true;
}

function getHydratedServerSnapshot(): boolean {
  return false;
}

export default function ReducedMotionStatus() {
  const hydrated = useSyncExternalStore(
    subscribeHydrated,
    getHydratedSnapshot,
    getHydratedServerSnapshot
  );
  const reduced = useReducedMotion();
  const on = hydrated && reduced;
  const label = !hydrated ? "Checking…" : reduced ? "On" : "Off";

  return (
    <aside
      aria-label="Reduced motion status"
      className={
        on
          ? "border-b-2 border-accent-green/40 bg-accent-green/10"
          : "border-b border-border bg-amber-50"
      }
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-2 flex flex-wrap items-center gap-3 text-sm">
        <span
          role="status"
          aria-live="polite"
          className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-foreground"
        >
          <span
            aria-hidden="true"
            className={
              on
                ? "h-2.5 w-2.5 rounded-full bg-accent-green"
                : "h-2.5 w-2.5 rounded-full bg-amber-500"
            }
          />
          <span className="font-medium">System reduced motion:</span>
          <span className="font-semibold">{label}</span>
        </span>
        <p className="text-text-secondary text-xs m-0 max-w-3xl">
          {on
            ? "Every animation on this page is currently simplified or stopped because your operating system reports prefers-reduced-motion. Turn it off to see the full motion."
            : "Animations on this page respect prefers-reduced-motion. To preview reduced-motion behavior, enable it in your OS: macOS — System Settings → Accessibility → Display → Reduce motion. Windows — Settings → Accessibility → Visual effects → Animation effects."}
        </p>
      </div>
    </aside>
  );
}
