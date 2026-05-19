import type { PracticeOverlayMode } from "@/data/week4-practice/practice-overlays";
import { MOTION_SEEDS } from "@/data/week4-practice/practice-zones";
import type { PracticePageId } from "@/data/week4-practice/practice-zones";
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
    <aside>
      <p className="font-semibold text-foreground text-sm m-0 mb-2">Filters</p>
      <ul className="list-none m-0 p-0 space-y-1 text-text-secondary text-xs">
        <li>In stock</li>
        <li>On sale</li>
        <li>New arrivals</li>
      </ul>
    </aside>
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
      <section className="rounded-md border border-border bg-surface p-4 mb-4">
        <p className="text-sm font-medium text-foreground m-0 mb-2">Featured promotions</p>
        <p className="text-sm text-text-secondary m-0">
          Summer sale — up to 30% off trail gear through June.
        </p>
      </section>
    );
  } else if (overlayMode === "skipNav") {
    promoBlock = (
      <section className="rounded-md border border-border bg-surface p-4 mb-4">
        <p className="text-sm font-medium text-foreground m-0 mb-3">Featured promotions</p>
        <div className="flex gap-2 flex-wrap">
          <SkipTargetOutline targetId="slide-1" pageId={pageId} className="inline-flex">
            <button
              type="button"
              {...mockupControlProps}
              className="rounded bg-primary/20 px-3 py-2 text-xs font-medium text-foreground"
            >
              Slide 1
            </button>
          </SkipTargetOutline>
          <span className="rounded border border-dashed border-border px-3 py-2 text-xs text-text-secondary">
            Slide 2
          </span>
          <span className="rounded border border-dashed border-border px-3 py-2 text-xs text-text-secondary">
            Slide 3
          </span>
        </div>
      </section>
    );
  } else {
    const seed = motionSeed("hero-carousel");
    const inner = (
      <>
        <p className="text-sm text-foreground font-medium m-0 mb-1">
          Hero carousel (static preview)
        </p>
        <p className="text-xs text-text-secondary m-0 mb-3">{seed?.defaultDescription}</p>
        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            {...mockupControlProps}
            className="rounded bg-primary/20 px-3 py-2 text-xs font-medium text-foreground"
          >
            Slide 1
          </button>
          <span className="rounded border border-dashed border-border px-3 py-2 text-xs text-text-secondary">
            Slide 2
          </span>
          <span className="rounded border border-dashed border-border px-3 py-2 text-xs text-text-secondary">
            Slide 3
          </span>
        </div>
        <button
          type="button"
          {...mockupControlProps}
          className="mt-3 text-xs text-primary-text underline"
        >
          Pause (static preview)
        </button>
      </>
    );
    promoBlock = (
      <section className="rounded-md border border-border bg-surface p-4 mb-4">
        <MotionTargetOutline motionId="hero-carousel" pageId={pageId}>
          {inner}
        </MotionTargetOutline>
      </section>
    );
  }

  return (
    <>
      {heading}
      {promoBlock}
      {overlayMode === "landmark" ? (
        <p className="text-sm text-text-secondary m-0">
          Browse featured products in the catalog.
        </p>
      ) : null}
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
        <h2 className="text-lg font-semibold text-foreground mt-0 m-0">Products</h2>
      </SkipTargetOutline>
    ) : (
      <h2 className="text-lg font-semibold text-foreground mt-0">Products</h2>
    );

  const renderProductCard = (name: string) => {
    const cartButton = (
      <button
        type="button"
        {...mockupControlProps}
        className="rounded bg-primary px-3 py-1.5 text-xs font-medium text-white"
        aria-label={`Add to cart, ${name}`}
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
        ) : overlayMode === "landmark" ? (
          <p className="text-xs text-text-secondary m-0 mb-2">$49.00</p>
        ) : null}
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
      {overlayMode === "landmark" ? (
        <p className="text-sm text-text-secondary mb-4 m-0">
          Product grid in the main content region.
        </p>
      ) : null}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none m-0 p-0">
        {["Trail pack", "Desk lamp", "Water bottle"].map(renderProductCard)}
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

  const teamProfiles: { name: string; targetId: string }[] = [
    { name: "Alex", targetId: "alex-profile" },
    { name: "Jordan", targetId: "jordan-profile" },
    { name: "Sam", targetId: "sam-profile" },
  ];

  const teamList = (
    <ul className="flex gap-3 list-none m-0 p-0 mt-2">
      {teamProfiles.map(({ name, targetId }) => {
        const profileControl = (
          <button
            type="button"
            {...mockupControlProps}
            className="rounded-full bg-surface border border-border w-16 h-16 flex items-center justify-center text-xs text-text-secondary"
            aria-label={`${name} profile photo`}
          >
            {name}
          </button>
        );

        return (
          <li key={name}>
            {overlayMode === "skipNav" ? (
              <SkipTargetOutline targetId={targetId} pageId={pageId} className="inline-flex">
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
    <form className="mt-6 space-y-3 max-w-md" noValidate>
      <h3 className="text-base font-semibold text-foreground mt-0 m-0">Contact us</h3>
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
        Submit
      </button>
    </form>
  );

  const contactFormSection =
    overlayMode === "landmark" ? (
      <ZoneOutline zoneId="contact-form" pageId={pageId} className="p-2 mt-2">
        {contactFormBody}
      </ZoneOutline>
    ) : (
      contactFormBody
    );

  return (
    <>
      {heading}
      <p className="text-sm text-text-secondary m-0">
        We design outdoor gear for everyday adventures.
      </p>
      {teamSection}
      {contactFormSection}
    </>
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
