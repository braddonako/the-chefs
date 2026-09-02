"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";
import StaggerChildren, { staggerItem } from "./StaggerChildren";

function TiltCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [6, -6]);
  const rotateY = useTransform(x, [0, 1], [-6, 6]);

  function handleMouse(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 600 }}
      className="tilt-card rounded-xl border border-border-light bg-bg-secondary p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
    >
      <span className="mb-4 block text-4xl">{icon}</span>
      <h3 className="mb-2 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </motion.div>
  );
}

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
    <section id="about" className="section-divider bg-bg-tertiary px-6 py-20 md:py-28">
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
            <TiltCard key={item.title} {...item} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
