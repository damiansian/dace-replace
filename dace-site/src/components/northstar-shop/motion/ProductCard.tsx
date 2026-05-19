"use client";

import type { ReactNode } from "react";
import styles from "./motion.module.css";

export default function ProductCard({
  name,
  price,
  children,
}: {
  name: string;
  price: string;
  children: ReactNode;
}) {
  return (
    <li
      className={`rounded-md border border-border bg-white p-3 ${styles.cardScale}`}
    >
      <p className="font-medium text-foreground m-0 mb-1">{name}</p>
      <p className="text-xs text-text-secondary m-0 mb-3">{price}</p>
      {children}
    </li>
  );
}
