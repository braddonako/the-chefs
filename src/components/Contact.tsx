"use client";

import { siteConfig } from "@/config/menu";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-dark px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Ready to Start?
          </p>
          <h2 className="mb-4 text-3xl font-bold text-text-on-dark md:text-4xl">
            Book a Table
          </h2>
          <div className="menu-divider mx-auto mb-8 max-w-xs">
            <span className="text-sm text-text-on-dark-muted">✦</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mb-10 text-lg leading-relaxed text-text-on-dark-muted">
            Tell us what you&apos;re building and we&apos;ll tell you how we can
            help. No sales pitch, no fluff — just a straight conversation about
            your project.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="btn-primary rounded-full bg-brand-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-primary-hover"
            >
              Drop Us a Line
            </a>
            <a
              href={siteConfig.contact.calendly}
              className="btn-outline rounded-full border-2 border-text-on-dark-muted px-8 py-3.5 text-base font-semibold text-text-on-dark transition-all hover:border-text-on-dark hover:bg-white/5"
            >
              Schedule a Call
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
