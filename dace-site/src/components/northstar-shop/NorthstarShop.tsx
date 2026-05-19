import type { PracticePageId } from "@/data/week4-practice/practice-zones";
import NorthstarHome from "./pages/NorthstarHome";
import NorthstarProducts from "./pages/NorthstarProducts";
import NorthstarAbout from "./pages/NorthstarAbout";
import NorthstarShopShell from "./NorthstarShopShell";

const PAGE_TITLE: Record<PracticePageId, string> = {
  home: "Home",
  products: "Products",
  about: "About",
};

export default function NorthstarShop({
  pageId,
  accessToken,
  workbookHref,
}: {
  pageId: PracticePageId;
  accessToken?: string;
  workbookHref: string;
}) {
  return (
    <NorthstarShopShell
      pageId={pageId}
      accessToken={accessToken}
      workbookHref={workbookHref}
      pageTitle={PAGE_TITLE[pageId]}
    >
      {pageId === "home" && <NorthstarHome />}
      {pageId === "products" && <NorthstarProducts />}
      {pageId === "about" && <NorthstarAbout />}
    </NorthstarShopShell>
  );
}
