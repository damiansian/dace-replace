import AddToCartButton from "../motion/AddToCartButton";
import MotionLearningCallout from "../MotionLearningCallout";
import ProductCard from "../motion/ProductCard";
import SidebarPromo from "./SidebarPromo";

const PRODUCTS = [
  {
    name: "Trail pack",
    price: "$49.00",
    id: "trail-pack-cart",
    imageSrc: "/northstar-shop/product-trail-pack.svg",
    imageAlt: "Purple hiking backpack",
  },
  {
    name: "Desk lamp",
    price: "$32.00",
    imageSrc: "/northstar-shop/product-desk-lamp.svg",
    imageAlt: "Adjustable desk lamp with warm light",
  },
  {
    name: "Water bottle",
    price: "$22.00",
    imageSrc: "/northstar-shop/product-water-bottle.svg",
    imageAlt: "Insulated stainless water bottle",
  },
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
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
            >
              <AddToCartButton
                id={product.id}
                productName={product.name}
              />
            </ProductCard>
          ))}
        </ul>

        <MotionLearningCallout
          motionId="product-card-hover"
          label="Hover scale"
          fullMotion="Product cards scale up 4% on hover over 200ms."
        />
        <MotionLearningCallout
          motionId="add-to-cart-transition"
          label="Add to cart feedback"
          fullMotion="A checkmark slides in for ~450ms after the click before the button resets."
        />
      </div>
      <div className="w-full sm:w-56 shrink-0">
        <SidebarPromo />
      </div>
    </div>
  );
}
