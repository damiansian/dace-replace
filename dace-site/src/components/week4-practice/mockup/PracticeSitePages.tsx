import type { PracticeOverlayMode } from "@/data/week4-practice/practice-overlays";
import { MOTION_SEEDS } from "@/data/week4-practice/practice-zones";
import type { PracticePageId } from "@/data/week4-practice/practice-zones";
import {
  NORTHSTAR_ABOUT_INTRO,
  NORTHSTAR_CONTACT_REQUIRED_HINT,
  NORTHSTAR_CONTACT_SUBMIT_LABEL,
  NORTHSTAR_HERO_FIRST_SLIDE,
  NORTHSTAR_HERO_PROMO_HEADING,
  NORTHSTAR_HOME_INTRO,
  NORTHSTAR_PRODUCTS,
  NORTHSTAR_PRODUCTS_HEADING,
  NORTHSTAR_PRODUCTS_INTRO,
  NORTHSTAR_SIDEBAR_SHIPPING_NOTE,
  NORTHSTAR_TEAM,
} from "@/data/northstar-shop/copy";
import { HeroCarouselWireframe } from "./HeroCarouselWireframe";
import { MotionTargetOutline } from "./MotionTargetOutline";
import { PracticeSiteShell } from "./PracticeSiteShell";
import { mockupControlProps } from "./MockupNonInteractiveNotice";
import { SkipTargetOutline } from "./SkipTargetOutline";
import { ZoneOutline } from "./ZoneOutline";

function motionSeed(id: string) {
  return MOTION_SEEDS.find((s) => s.id === id);
}

function SidebarPromo() {
  return (
    <section aria-labelledby="filters-heading">
      <h2 id="filters-heading" className="font-semibold text-foreground text-sm m-0 mb-2">
        Filters
      </h2>
      <ul className="list-none m-0 p-0 space-y-1 text-text-secondary text-xs">
        <li>In stock</li>
        <li>On sale</li>
        <li>New arrivals</li>
      </ul>
      <p className="text-xs text-text-secondary m-0 mt-3">{NORTHSTAR_SIDEBAR_SHIPPING_NOTE}</p>
    </section>
  );
}

function HomeMain({
  pageId,
  overlayMode,
}: {
  pageId: PracticePageId;
  overlayMode: PracticeOverlayMode;
}) {
  const heading =
    overlayMode === "skipNav" ? (
      <SkipTargetOutline targetId="welcome-heading" pageId={pageId} className="inline-block p-2 mb-2">
        <h2 className="text-lg font-semibold text-foreground mt-0 m-0">Welcome back</h2>
      </SkipTargetOutline>
    ) : (
      <h2 className="text-lg font-semibold text-foreground mt-0">Welcome back</h2>
    );

  let promoBlock: React.ReactNode;

  if (overlayMode === "landmark") {
    promoBlock = (
      <div className="rounded-md border border-border bg-surface p-4 mb-4">
        <h3 className="text-base font-semibold text-foreground m-0 mb-3">
          {NORTHSTAR_HERO_PROMO_HEADING}
        </h3>
        <div className="rounded border border-border bg-white p-3">
          <p className="text-sm font-semibold text-foreground m-0 mb-1">
            {NORTHSTAR_HERO_FIRST_SLIDE.title}
          </p>
          <p className="text-xs text-text-secondary m-0">{NORTHSTAR_HERO_FIRST_SLIDE.body}</p>
        </div>
      </div>
    );
  } else if (overlayMode === "skipNav") {
    promoBlock = (
      <div className="mb-4">
        <HeroCarouselWireframe
          pauseButtonId="slide-1"
          wrapPrevControl={(prevButton) => (
            <SkipTargetOutline
              targetId="hero-carousel-prev"
              pageId={pageId}
              className="inline-flex"
            >
              {prevButton}
            </SkipTargetOutline>
          )}
        />
      </div>
    );
  } else {
    promoBlock = (
      <div className="mb-4">
        <MotionTargetOutline motionId="hero-carousel" pageId={pageId}>
          <HeroCarouselWireframe />
        </MotionTargetOutline>
      </div>
    );
  }

  return (
    <>
      {heading}
      {promoBlock}
      <p className="text-sm text-text-secondary m-0">{NORTHSTAR_HOME_INTRO}</p>
    </>
  );
}

function ProductsMain({
  pageId,
  overlayMode,
}: {
  pageId: PracticePageId;
  overlayMode: PracticeOverlayMode;
}) {
  const heading =
    overlayMode === "skipNav" ? (
      <SkipTargetOutline targetId="products-heading" pageId={pageId} className="inline-block p-2 mb-2">
        <h2 className="text-lg font-semibold text-foreground mt-0 m-0">
          {NORTHSTAR_PRODUCTS_HEADING}
        </h2>
      </SkipTargetOutline>
    ) : (
      <h2 className="text-lg font-semibold text-foreground mt-0">
        {NORTHSTAR_PRODUCTS_HEADING}
      </h2>
    );

  const renderProductCard = (product: (typeof NORTHSTAR_PRODUCTS)[number]) => {
    const { name, price, cartId } = product;
    const cartButton = (
      <button
        id={cartId}
        type="button"
        {...mockupControlProps}
        className="rounded bg-primary px-3 py-1.5 text-xs font-medium text-white"
        aria-label={`Add ${name} to cart`}
      >
        Add to cart
      </button>
    );

    const body = (
      <>
        <p className="font-medium text-foreground m-0 mb-2">{name}</p>
        {overlayMode === "motion" ? (
          <>
            {name === "Trail pack" ? (
              <p className="text-xs text-text-secondary m-0 mb-2">
                {motionSeed("product-card-hover")?.defaultDescription}
              </p>
            ) : null}
            <p className="text-xs text-text-secondary m-0 mb-2">
              {name === "Trail pack"
                ? motionSeed("add-to-cart-transition")?.defaultDescription
                : null}
            </p>
          </>
        ) : (
          <p className="text-xs text-text-secondary m-0 mb-2">{price}</p>
        )}
        {overlayMode === "motion" && name === "Trail pack" ? (
          <MotionTargetOutline
            motionId="add-to-cart-transition"
            pageId={pageId}
            className="inline-flex"
          >
            {cartButton}
          </MotionTargetOutline>
        ) : (
          cartButton
        )}
      </>
    );

    const card = (
      <li key={name} className="rounded-md border border-border p-3">
        {body}
      </li>
    );

    if (overlayMode === "skipNav" && name === "Trail pack") {
      return (
        <SkipTargetOutline
          key={name}
          targetId="trail-pack-cart"
          pageId={pageId}
          className="list-none"
        >
          {card}
        </SkipTargetOutline>
      );
    }

    if (overlayMode === "motion" && name === "Trail pack") {
      return (
        <MotionTargetOutline
          key={name}
          motionId="product-card-hover"
          pageId={pageId}
          className="list-none"
        >
          {card}
        </MotionTargetOutline>
      );
    }

    if (overlayMode === "motion") {
      return (
        <li
          key={name}
          className="rounded-md border border-border p-3 opacity-50 list-none"
          aria-hidden="true"
        >
          <p className="font-medium text-foreground m-0 mb-2">{name}</p>
        </li>
      );
    }

    return card;
  };

  return (
    <>
      {heading}
      <p className="text-sm text-text-secondary mb-4 m-0">{NORTHSTAR_PRODUCTS_INTRO}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none m-0 p-0">
        {NORTHSTAR_PRODUCTS.map(renderProductCard)}
      </ul>
    </>
  );
}

function AboutMain({
  pageId,
  overlayMode,
}: {
  pageId: PracticePageId;
  overlayMode: PracticeOverlayMode;
}) {
  const heading =
    overlayMode === "skipNav" ? (
      <SkipTargetOutline targetId="about-heading" pageId={pageId} className="inline-block p-2 mb-2">
        <h2 className="text-lg font-semibold text-foreground mt-0 m-0">About Northstar</h2>
      </SkipTargetOutline>
    ) : (
      <h2 className="text-lg font-semibold text-foreground mt-0">About Northstar</h2>
    );

  const teamList = (
    <ul className="flex gap-3 list-none m-0 p-0 mt-2 flex-wrap">
      {NORTHSTAR_TEAM.map((member) => {
        const profileControl = (
          <button
            type="button"
            {...mockupControlProps}
            className="flex flex-col items-center gap-1 rounded-md border border-border bg-white p-3 w-24 text-center"
            aria-label={`${member.name}, ${member.role}, team profile`}
          >
            <span
              aria-hidden="true"
              className="h-12 w-12 rounded-full border border-border bg-surface block"
            />
            <span className="text-sm font-medium text-foreground">{member.name}</span>
            <span className="text-[11px] text-text-secondary">{member.role}</span>
          </button>
        );

        return (
          <li key={member.id}>
            {overlayMode === "skipNav" ? (
              <SkipTargetOutline targetId={member.id} pageId={pageId} className="inline-flex">
                {profileControl}
              </SkipTargetOutline>
            ) : (
              profileControl
            )}
          </li>
        );
      })}
    </ul>
  );

  const teamSection =
    overlayMode === "motion" ? (
      <section className="mt-4">
        <h3 className="text-base font-semibold text-foreground">Our team</h3>
        <p className="text-xs text-text-secondary m-0 mb-2">
          {motionSeed("about-team-fade")?.defaultDescription}
        </p>
        <MotionTargetOutline motionId="about-team-fade" pageId={pageId}>
          {teamList}
        </MotionTargetOutline>
      </section>
    ) : (
      <section className="mt-4">
        <h3 className="text-base font-semibold text-foreground">Our team</h3>
        {teamList}
      </section>
    );

  const contactFormBody = (
    <form className="space-y-3 w-full" noValidate>
      <h2 className="text-lg font-semibold text-foreground mt-0 m-0">Contact us</h2>
      <p className="text-xs text-text-secondary m-0">{NORTHSTAR_CONTACT_REQUIRED_HINT}</p>
      <div>
        <label htmlFor={`contact-name-${pageId}`} className="block text-sm font-medium text-foreground mb-1">
          Name
        </label>
        <input
          id={`contact-name-${pageId}`}
          type="text"
          autoComplete="name"
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground"
          {...mockupControlProps}
          title="Static preview — form does not submit"
        />
      </div>
      <div>
        <label htmlFor={`contact-email-${pageId}`} className="block text-sm font-medium text-foreground mb-1">
          Email
        </label>
        <input
          id={`contact-email-${pageId}`}
          type="email"
          autoComplete="email"
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground"
          {...mockupControlProps}
          title="Static preview — form does not submit"
        />
      </div>
      <div>
        <label htmlFor={`contact-message-${pageId}`} className="block text-sm font-medium text-foreground mb-1">
          Message
        </label>
        <textarea
          id={`contact-message-${pageId}`}
          rows={3}
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground min-h-[80px]"
          {...mockupControlProps}
          title="Static preview — form does not submit"
        />
      </div>
      <button
        type="submit"
        {...mockupControlProps}
        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
      >
        {NORTHSTAR_CONTACT_SUBMIT_LABEL}
      </button>
    </form>
  );

  const contactFormSection =
    overlayMode === "landmark" ? (
      <ZoneOutline zoneId="contact-form" pageId={pageId} className="p-2">
        {contactFormBody}
      </ZoneOutline>
    ) : (
      contactFormBody
    );

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex-1 min-w-0 space-y-4">
        {heading}
        <p className="text-sm text-text-secondary m-0">{NORTHSTAR_ABOUT_INTRO}</p>
        {teamSection}
      </div>
      <div className="w-full sm:w-56 shrink-0">{contactFormSection}</div>
    </div>
  );
}

export function PracticeSitePage({
  pageId,
  overlayMode = "landmark",
}: {
  pageId: PracticePageId;
  overlayMode?: PracticeOverlayMode;
}) {
  const sidebar = pageId !== "about" ? <SidebarPromo /> : undefined;

  return (
    <PracticeSiteShell pageId={pageId} sidebar={sidebar} overlayMode={overlayMode}>
      {pageId === "home" && <HomeMain pageId={pageId} overlayMode={overlayMode} />}
      {pageId === "products" && <ProductsMain pageId={pageId} overlayMode={overlayMode} />}
      {pageId === "about" && <AboutMain pageId={pageId} overlayMode={overlayMode} />}
    </PracticeSiteShell>
  );
}
