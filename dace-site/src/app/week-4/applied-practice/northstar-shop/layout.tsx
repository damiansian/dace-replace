import type { ReactNode } from "react";

export const metadata = {
  title: "Northstar Shop (Practice Site) | DACE Cohort 2",
  description:
    "Live, accessible Northstar Shop practice site for Week 4 review: real landmarks, working skip link, and motion that responds to prefers-reduced-motion.",
  robots: { index: false, follow: false },
};

export default function NorthstarShopLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
