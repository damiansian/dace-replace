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
  },
  {
    id: "slide-2",
    title: "Free shipping on $75",
    body: "Orders ship within two business days from Portland.",
  },
  {
    id: "slide-3",
    title: "New: water-bottle line",
    body: "Insulated stainless bottles in three colors, 18 and 32 oz.",
  },
];

const ADVANCE_MS = 5000;

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
        className="min-h-[88px] rounded border border-border bg-white p-3"
      >
        <p
          key={slide.id}
          className={`text-sm font-semibold text-foreground m-0 mb-1 ${styles.slideIn}`}
        >
          {slide.title}
        </p>
        <p className="text-xs text-text-secondary m-0">{slide.body}</p>
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
          className="rounded-md border border-border bg-white px-2.5 py-1 text-xs font-medium text-foreground hover:bg-surface disabled:opacity-60 disabled:cursor-not-allowed"
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
          {reducedMotion
            ? "Autoplay off"
            : isAutoActive
              ? "Pause"
              : "Play"}
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
        <span className="ml-auto text-[11px] text-text-secondary">
          Slide {index + 1} of {SLIDES.length}
        </span>
      </div>

      <MotionLearningCallout
        motionId="hero-carousel"
        label="Full motion"
        fullMotion="Slides auto-advance every 5 seconds. A Pause button stops the rotation (WCAG 2.2.2)."
        tone="warn"
      />
    </div>
  );
}
