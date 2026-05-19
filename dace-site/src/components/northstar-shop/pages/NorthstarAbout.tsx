"use client";

import MotionLearningCallout from "../MotionLearningCallout";
import TeamReveal from "../motion/TeamReveal";

export default function NorthstarAbout() {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex-1 min-w-0 space-y-6">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground m-0">
            About Northstar
          </h2>
          <p className="text-sm text-text-secondary m-0">
            We design outdoor gear for everyday adventures, built around quality
            materials and accessible product information.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-semibold text-foreground m-0">
            Our team
          </h3>
          <TeamReveal />
          <MotionLearningCallout
            motionId="about-team-fade"
            label="Team entrance"
            fullMotion="Team cards fade in and slide up 12px when scrolled into view (600ms, staggered by 120ms per card)."
          />
        </section>
      </div>

      <div className="w-full sm:w-56 shrink-0">
        <form
          aria-labelledby="contact-heading"
          className="rounded-md border border-border bg-white p-4 space-y-3 w-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h3
              id="contact-heading"
              className="text-base font-semibold text-foreground mt-0 m-0"
            >
              Contact us
            </h3>
            <p className="text-xs text-text-secondary m-0">
              Demonstration form. Submitting does not send a message.
            </p>
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={3}
                className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground min-h-[80px]"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Send message
            </button>
        </form>
      </div>
    </div>
  );
}
