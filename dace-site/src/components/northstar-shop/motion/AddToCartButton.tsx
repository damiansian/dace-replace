"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./motion.module.css";

export default function AddToCartButton({
  productName,
  id,
}: {
  productName: string;
  id?: string;
}) {
  const [state, setState] = useState<"idle" | "added">("idle");
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const onClick = () => {
    setState("added");
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setState("idle");
      timerRef.current = null;
    }, 2200);
  };

  const isAdded = state === "added";

  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      aria-label={
        isAdded
          ? `${productName} added to cart`
          : `Add ${productName} to cart`
      }
      className={
        isAdded
          ? "inline-flex items-center gap-2 rounded bg-accent-green px-3 py-1.5 text-xs font-medium text-white"
          : "inline-flex items-center gap-2 rounded bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-dark"
      }
    >
      {isAdded ? (
        <>
          <span
            aria-hidden="true"
            className={`inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-accent-green ${styles.checkmarkSlide}`}
          >
            <svg
              viewBox="0 0 16 16"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M3 8.5l3 3 7-7" />
            </svg>
          </span>
          <span aria-hidden="true">Added</span>
        </>
      ) : (
        <span aria-hidden="true">Add to cart</span>
      )}
    </button>
  );
}
