"use client";

import ContactForm from "../ContactForm";
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
            hint="Refresh page to see animation if you missed it."
            label="Team entrance"
            fullMotion="Team cards fade in and slide up 12px when scrolled into view (600ms, staggered by 120ms per card)."
          />
        </section>
      </div>

      <div className="w-full sm:w-56 shrink-0">
        <ContactForm />
      </div>
    </div>
  );
}
