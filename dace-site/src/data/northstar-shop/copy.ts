/** Shared Northstar Shop copy for the live site and Week 4 practice mockup. */

export const NORTHSTAR_HOME_INTRO =
  "Browse featured products in the catalog, then jump straight to a category from the primary navigation.";

export const NORTHSTAR_PRODUCTS_HEADING = "Product catalog";

export const NORTHSTAR_PRODUCTS_INTRO =
  "A small catalog so you can keyboard-test the focus order after the skip link.";

export const NORTHSTAR_ABOUT_INTRO =
  "We design outdoor gear for everyday adventures, built around quality materials and accessible product information.";

export const NORTHSTAR_TEAM = [
  { id: "alex-profile", name: "Alex", role: "Founder" },
  { id: "jordan-profile", name: "Jordan", role: "Designer" },
  { id: "sam-profile", name: "Sam", role: "Engineering" },
] as const;

export const NORTHSTAR_PRODUCTS = [
  { name: "Trail pack", price: "$49.00", cartId: "trail-pack-cart" },
  { name: "Desk lamp", price: "$32.00", cartId: "desk-lamp-cart" },
  { name: "Water bottle", price: "$22.00", cartId: "water-bottle-cart" },
] as const;

export const NORTHSTAR_HERO_PROMO_HEADING = "Featured promotions";

export const NORTHSTAR_HERO_FIRST_SLIDE = {
  title: "Summer trail sale",
  body: "Up to 30% off trail packs and hiking gear through June.",
} as const;

export const NORTHSTAR_SIDEBAR_SHIPPING_NOTE =
  "Free shipping on orders over $75.";

export const NORTHSTAR_CONTACT_REQUIRED_HINT =
  "Fields marked with an asterisk (*) are required.";

export const NORTHSTAR_CONTACT_SUBMIT_LABEL = "Send message";
