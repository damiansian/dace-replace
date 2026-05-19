import AddToCartButton from "../motion/AddToCartButton";
import ProductCard from "../motion/ProductCard";
import SidebarPromo from "./SidebarPromo";

const PRODUCTS = [
  {
    name: "Trail pack",
    price: "$49.00",
    id: "trail-pack-cart",
    isFirstFocus: true,
  },
  { name: "Desk lamp", price: "$32.00" },
  { name: "Water bottle", price: "$22.00" },
];

export default function NorthstarProducts() {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex-1 min-w-0 space-y-4">
        <h2 className="text-lg font-semibold text-foreground m-0">Products</h2>
        <p className="text-sm text-text-secondary m-0">
          A small catalog so you can keyboard-test the focus order after the
          skip link.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 list-none m-0 p-0">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
            >
              <AddToCartButton
                id={product.id}
                productName={product.name}
              />
            </ProductCard>
          ))}
        </ul>
      </div>
      <div className="w-full sm:w-56 shrink-0">
        <SidebarPromo />
      </div>
    </div>
  );
}
