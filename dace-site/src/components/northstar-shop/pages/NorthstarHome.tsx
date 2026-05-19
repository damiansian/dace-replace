import HeroCarousel from "../motion/HeroCarousel";
import SidebarPromo from "./SidebarPromo";

export default function NorthstarHome() {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex-1 min-w-0 space-y-4">
        <h2 className="text-lg font-semibold text-foreground m-0">
          Welcome back
        </h2>
        <p className="text-sm text-text-secondary m-0">
          Browse featured products in the catalog, then jump straight to a
          category from the primary navigation.
        </p>
        <HeroCarousel />
      </div>
      <div className="w-full sm:w-56 shrink-0">
        <SidebarPromo />
      </div>
    </div>
  );
}
