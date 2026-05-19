"use client";

import type { ReactNode } from "react";
import styles from "./motion.module.css";

export default function ProductCard({
  name,
  price,
  imageSrc,
  imageAlt,
  children,
}: {
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return (
    <li
      className={`rounded-md border border-border bg-white p-3 ${styles.cardScale}`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        width={280}
        height={200}
        className="mb-2 w-full h-32 object-cover rounded border border-border bg-surface"
      />
      <h4 className="text-sm font-semibold text-foreground m-0 mb-1">{name}</h4>
      <p className="text-xs text-text-secondary m-0 mb-3">{price}</p>
      {children}
    </li>
  );
}
