"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { withToken } from "@/data/progress-catalog";
import type { PracticePageId } from "@/data/week4-practice/practice-zones";
import NorthstarShopNav from "./NorthstarShopNav";
import ReducedMotionStatus from "./ReducedMotionStatus";

export default function NorthstarShopShell({
  pageId,
  accessToken,
  workbookHref,
  pageTitle,
  children,
}: {
  pageId: PracticePageId;
  accessToken?: string;
  workbookHref: string;
  pageTitle: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-full flex flex-col bg-background text-foreground">
      <a
        href="#shop-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <ReducedMotionStatus />

      <div className="border-b border-border bg-surface/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-2 flex flex-wrap items-center gap-3 justify-between text-xs">
          <p className="text-text-secondary m-0">
            <strong className="text-foreground">Northstar Shop</strong>{" "}
            <span className="text-text-secondary">
              — live practice site for Week 4 review
            </span>
          </p>
          <Link
            href={workbookHref}
            className="text-primary-text underline hover:text-primary-dark"
          >
            Back to workbook
          </Link>
        </div>
      </div>

      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 flex flex-wrap items-center gap-4 justify-between">
          <Link
            href={withToken("/week-4/applied-practice/northstar-shop/home", accessToken)}
            className="font-bold text-lg text-foreground no-underline hover:underline"
          >
            Northstar Shop
          </Link>

          <NorthstarShopNav pageId={pageId} accessToken={accessToken} />

          <form
            role="search"
            aria-label="Search products"
            className="flex items-center gap-2 rounded border border-border bg-surface px-2 py-1 min-w-[180px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="northstar-search" className="sr-only">
              Search products
            </label>
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
              className="h-4 w-4 shrink-0 text-foreground"
            >
              <circle
                cx="8.5"
                cy="8.5"
                r="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              />
              <path
                d="M12.5 12.5 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
            <input
              id="northstar-search"
              type="search"
              placeholder="Search products"
              className="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm text-foreground focus:outline-none"
            />
          </form>
        </div>
      </header>

      <main
        id="shop-main"
        tabIndex={-1}
        className="flex-1 focus-visible:outline-none"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6">
          <h1 className="text-2xl font-bold text-foreground m-0 mb-4">
            {pageTitle}
          </h1>
          {children}
        </div>
      </main>

      <footer className="border-t border-border bg-surface mt-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6 space-y-3">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-4 list-none m-0 p-0 text-sm text-text-secondary">
              <li>
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-primary-text underline hover:text-primary-dark"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-primary-text underline hover:text-primary-dark"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-primary-text underline hover:text-primary-dark"
                >
                  Support
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-xs text-text-secondary m-0">
            &copy; 2026 Northstar Shop. Live practice site for the DACE Week 4
            workbook.
          </p>
        </div>
      </footer>
    </div>
  );
}
