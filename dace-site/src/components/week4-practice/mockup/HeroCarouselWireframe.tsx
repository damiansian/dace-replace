import {
  NORTHSTAR_HERO_PROMO_HEADING,
  NORTHSTAR_HERO_SLIDE_COUNT,
  NORTHSTAR_HERO_SLIDES,
} from "@/data/northstar-shop/copy";
import { mockupControlProps } from "./MockupNonInteractiveNotice";

function PauseIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      className="h-3.5 w-3.5"
      fill="currentColor"
    >
      <rect x="3" y="2" width="3" height="12" rx="0.5" />
      <rect x="10" y="2" width="3" height="12" rx="0.5" />
    </svg>
  );
}

const controlBtnClass =
  "rounded-md border border-border bg-white text-foreground text-xs font-medium";

/** Static wireframe carousel matching live Northstar player layout (no motion). */
export function HeroCarouselWireframe({
  pauseButtonId,
  wrapPrevControl,
  wrapPauseControl,
}: {
  /** When set (skip-nav mockup), matches live `id="slide-1"` on the pause control. */
  pauseButtonId?: string;
  wrapPrevControl?: (prevButton: React.ReactNode) => React.ReactNode;
  wrapPauseControl?: (pauseButton: React.ReactNode) => React.ReactNode;
}) {
  const slide = NORTHSTAR_HERO_SLIDES[0];

  const prevButton = (
    <button
      type="button"
      {...mockupControlProps}
      className={`${controlBtnClass} px-2.5 py-1`}
      aria-label="Previous slide"
    >
      Prev
    </button>
  );

  const pauseButton = (
    <button
      type="button"
      id={pauseButtonId}
      {...mockupControlProps}
      className={`${controlBtnClass} inline-flex h-8 w-8 shrink-0 items-center justify-center`}
      aria-label="Pause auto-advance"
      aria-pressed="true"
      title="Static preview — pause control"
    >
      <PauseIcon />
    </button>
  );

  return (
    <div aria-roledescription="carousel" className="rounded-md border border-border bg-surface p-4">
      <h3 className="text-base font-semibold text-foreground m-0 mb-3">
        {NORTHSTAR_HERO_PROMO_HEADING}
      </h3>

      <div className="min-h-[120px] rounded border border-border bg-white p-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div
            className="w-full sm:w-36 h-28 shrink-0 rounded border border-dashed border-border bg-surface"
            aria-hidden="true"
          />
          <div className="min-w-0 flex flex-col justify-center">
            <p className="text-sm font-semibold text-foreground m-0 mb-1">{slide.title}</p>
            <p className="text-xs text-text-secondary m-0">{slide.body}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 flex-wrap">
        {wrapPrevControl ? wrapPrevControl(prevButton) : prevButton}
        {wrapPauseControl ? wrapPauseControl(pauseButton) : pauseButton}
        <ul className="list-none m-0 p-0 flex gap-1" aria-hidden="true">
          {NORTHSTAR_HERO_SLIDES.map((_, i) => (
            <li key={i}>
              <button
                type="button"
                {...mockupControlProps}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === 0 ? "true" : undefined}
                className={
                  i === 0
                    ? "h-2.5 w-2.5 rounded-full bg-primary border border-primary"
                    : "h-2.5 w-2.5 rounded-full bg-white border border-border"
                }
              />
            </li>
          ))}
        </ul>
        <button
          type="button"
          {...mockupControlProps}
          className={`${controlBtnClass} px-2.5 py-1`}
          aria-label="Next slide"
        >
          Next
        </button>
        <span className="text-[11px] text-text-secondary">
          Slide 1 of {NORTHSTAR_HERO_SLIDE_COUNT}
        </span>
      </div>
    </div>
  );
}
