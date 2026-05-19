import Link from "next/link";
import { withToken } from "@/data/progress-catalog";
import {
  NAV_ORDER_BY_PAGE,
  type PracticePageId,
} from "@/data/week4-practice/practice-zones";
import { northstarLandmarkProps } from "./northstar-landmark";

const PAGE_PATH: Record<string, PracticePageId> = {
  Home: "home",
  Products: "products",
  About: "about",
};

export default function NorthstarShopNav({
  pageId,
  accessToken,
}: {
  pageId: PracticePageId;
  accessToken?: string;
}) {
  const navOrder = NAV_ORDER_BY_PAGE[pageId];

  return (
    <nav {...northstarLandmarkProps("navigation")}>
      <ul className="flex flex-wrap gap-4 list-none m-0 p-0">
        {navOrder.map((item) => {
          const targetId = PAGE_PATH[item];
          const isCurrent = targetId === pageId;
          const href = withToken(
            `/week-4/applied-practice/northstar-shop/${targetId}`,
            accessToken
          );
          return (
            <li key={item}>
              <Link
                href={href}
                aria-current={isCurrent ? "page" : undefined}
                className={
                  isCurrent
                    ? "font-semibold text-primary-text underline"
                    : "text-text-secondary hover:text-foreground hover:underline"
                }
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
