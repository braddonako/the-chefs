"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import StaggerChildren, { staggerItem } from "./StaggerChildren";

export default function About() {
  const ingredients = [
    {
      icon: "📱",
      title: "Mobile & Web Apps",
      description:
        "Native and cross-platform apps built with real architecture — not scaffolded and shipped.",
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description:
        "Scalable backends and cloud setups that won't surprise you with the bill or the downtime.",
    },
    {
      icon: "🤖",
      title: "AI Workflows",
      description:
        "Practical AI integrations that solve actual problems. No buzzword bingo, just results.",
    },
    {
      icon: "🏗️",
      title: "Architecture & Strategy",
      description:
        "Technical leadership and system design from people who've built and maintained production systems.",
    },
  ];

  return (
    <section id="about" className="bg-bg-tertiary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <FadeIn className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Who We Are
          </p>
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
            The Kitchen
          </h2>
          <div className="menu-divider mx-auto max-w-xs">
            <span className="text-sm">✦</span>
          </div>
        </FadeIn>

        <FadeIn className="mx-auto mb-16 max-w-2xl text-center" delay={0.15}>
          <p className="text-lg leading-relaxed text-text-secondary">
            We&apos;re a senior developer and a software architect who got tired
            of watching good ideas get ruined by bad execution. We don&apos;t use
            templates. We don&apos;t cut corners. We build software the way
            it&apos;s supposed to be built — with care, craft, and a little bit
            of heat.
          </p>
        </FadeIn>

        <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {ingredients.map((item) => (
            <motion.div key={item.title} variants={staggerItem} className="text-center">
              <span className="mb-4 block text-4xl">{item.icon}</span>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
