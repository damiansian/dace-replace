"use client";

import { useEffect, useRef, useState } from "react";
import MotionLearningCallout from "../MotionLearningCallout";
import { useReducedMotion } from "../useReducedMotion";
import styles from "./motion.module.css";

const SLIDES = [
  {
    id: "slide-1",
    title: "Summer trail sale",
    body: "Up to 30% off trail packs and hiking gear through June.",
    imageSrc: "/northstar-shop/promo-trail-sale.svg",
    imageAlt: "Trail backpack on a mountain path",
  },
  {
    id: "slide-2",
    title: "Free shipping on $75",
    body: "Orders ship within two business days from Portland.",
    imageSrc: "/northstar-shop/promo-free-shipping.svg",
    imageAlt: "Shipping box on a delivery van",
  },
  {
    id: "slide-3",
    title: "New: water-bottle line",
    body: "Insulated stainless bottles in three colors, 18 and 32 oz.",
    imageSrc: "/northstar-shop/promo-water-bottles.svg",
    imageAlt: "Three insulated water bottles in teal, purple, and copper",
  },
] as const;

const ADVANCE_MS = 5000;

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

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      className="h-3.5 w-3.5"
      fill="currentColor"
    >
      <path d="M4 2.5v11l9-5.5L4 2.5z" />
    </svg>
  );
}

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reducedMotion = useReducedMotion();
  const liveRef = useRef<HTMLDivElement | null>(null);

  // Auto-advance only when motion is allowed and the carousel is playing.
  useEffect(() => {
    if (!playing || reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [playing, reducedMotion]);

  const goTo = (i: number) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  };

  const isAutoActive = playing && !reducedMotion;
  const slide = SLIDES[index];

  return (
    <div
      aria-roledescription="carousel"
      className="rounded-md border border-border bg-surface p-4"
    >
      <p className="text-sm font-semibold text-foreground m-0 mb-3">
        Featured promotions
      </p>

      <div
        ref={liveRef}
        aria-live={isAutoActive ? "off" : "polite"}
        aria-atomic="true"
        className="min-h-[120px] rounded border border-border bg-white p-3"
      >
        <div
          key={slide.id}
          className={`flex flex-col sm:flex-row gap-3 ${styles.slideIn}`}
        >
          <img
            src={slide.imageSrc}
            alt={slide.imageAlt}
            width={320}
            height={240}
            className="w-full sm:w-36 h-28 sm:h-28 object-cover rounded border border-border shrink-0 bg-surface"
          />
          <div className="min-w-0 flex flex-col justify-center">
            <p className="text-sm font-semibold text-foreground m-0 mb-1">
              {slide.title}
            </p>
            <p className="text-xs text-text-secondary m-0">{slide.body}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 flex-wrap">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="rounded-md border border-border bg-white px-2.5 py-1 text-xs font-medium text-foreground hover:bg-surface"
          aria-label="Previous slide"
        >
          Prev
        </button>
        <button
          type="button"
          id="slide-1"
          onClick={() => setPlaying((p) => !p)}
          aria-pressed={isAutoActive}
          disabled={reducedMotion}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-white text-foreground hover:bg-surface disabled:opacity-60 disabled:cursor-not-allowed"
          aria-label={
            reducedMotion
              ? "Autoplay off while reduced motion is enabled"
              : isAutoActive
                ? "Pause auto-advance"
                : "Play auto-advance"
          }
          title={
            reducedMotion
              ? "Autoplay is off while system reduced motion is enabled."
              : isAutoActive
                ? "Pause auto-advance"
                : "Play auto-advance"
          }
        >
          {isAutoActive || reducedMotion ? <PauseIcon /> : <PlayIcon />}
        </button>
        <ul className="list-none m-0 p-0 flex gap-1" aria-hidden="true">
          {SLIDES.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={
                  i === index
                    ? "h-2.5 w-2.5 rounded-full bg-primary border border-primary"
                    : "h-2.5 w-2.5 rounded-full bg-white border border-border"
                }
              />
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="rounded-md border border-border bg-white px-2.5 py-1 text-xs font-medium text-foreground hover:bg-surface"
          aria-label="Next slide"
        >
          Next
        </button>
        <span className="text-[11px] text-text-secondary" aria-live="polite">
          Slide {index + 1} of {SLIDES.length}
        </span>
      </div>

      <MotionLearningCallout
        motionId="hero-carousel"
        label="Full motion"
        fullMotion="Slides auto-advance every 5 seconds."
        tone="warn"
      />
    </div>
  );
}
