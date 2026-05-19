"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../useReducedMotion";
import styles from "./motion.module.css";

const TEAM = [
  { id: "alex-profile", name: "Alex", role: "Founder" },
  { id: "jordan-profile", name: "Jordan", role: "Designer" },
  { id: "sam-profile", name: "Sam", role: "Engineering" },
];

export default function TeamReveal() {
  const reducedMotion = useReducedMotion();
  // `observed` is only set inside the IntersectionObserver callback (an async
  // browser event), so we never call setState synchronously in the effect.
  const [observed, setObserved] = useState(false);
  const ref = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    // When reduced motion is on, skip the observer entirely; the items
    // render in the "revealed" state because of the `revealed` flag below.
    if (reducedMotion) return;
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setObserved(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const revealed = reducedMotion || observed;

  return (
    <ul ref={ref} className="flex gap-3 list-none m-0 p-0 mt-2 flex-wrap">
      {TEAM.map((member, i) => (
        <li
          key={member.id}
          className={`${styles.fadeUp} ${revealed ? styles.fadeUpVisible : ""}`}
          style={
            revealed && !reducedMotion
              ? { transitionDelay: `${i * 120}ms` }
              : undefined
          }
        >
          <a
            id={member.id}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex flex-col items-center gap-1 rounded-md border border-border bg-white p-3 w-24 text-center no-underline text-foreground hover:bg-surface"
            aria-label={`${member.name}, ${member.role}, team profile`}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-border text-sm font-semibold text-foreground"
            >
              {member.name[0]}
            </span>
            <span className="text-sm font-medium text-foreground">
              {member.name}
            </span>
            <span className="text-[11px] text-text-secondary">
              {member.role}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
