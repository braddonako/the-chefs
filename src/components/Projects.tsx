"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

type Project = {
  title: string;
  description: string;
  tags: string[];
  highlight: string;
};

const projects: Project[] = [
  {
    title: "Energy Management Platform",
    description:
      "Mobile app for 800K+ users to monitor home energy usage, manage EV charging sessions, and compare utility plans with real-time savings calculators.",
    tags: ["Flutter", "IoT", "Energy"],
    highlight: "4.8 stars · 10K+ reviews",
  },
  {
    title: "Construction Neobank",
    description:
      "Flutter-based payment platform for the construction industry with instant payment processing, digital lien waivers, and multi-state legal compliance.",
    tags: ["Flutter", "Fintech", "Angular"],
    highlight: "Banking API integration",
  },
  {
    title: "AI Development Pipeline",
    description:
      "Multi-agent AI workflow orchestrating requirements, architecture, code generation, and review — with specialized models scoped per phase and structured knowledge retrieval.",
    tags: ["AI/ML", "Claude", "DevOps"],
    highlight: "4-phase autonomous pipeline",
  },
  {
    title: "Sleep Diagnostics Platform",
    description:
      "Angular and Flutter applications for a healthcare company, rebuilt with domain-driven architecture, shared component libraries, and accessibility compliance.",
    tags: ["Healthcare", "Angular", "Flutter"],
    highlight: "Global distributed team",
  },
  {
    title: "Industrial Hardware Integration",
    description:
      "Belt frequency detection app with native Android audio processing, microphone hardware access, and full Chinese/English localization.",
    tags: ["Android", "IoT", "Hardware"],
    highlight: "Native hardware integration",
  },
  {
    title: "Offline Sales Catalog",
    description:
      "Enterprise Flutter app with SAP authentication, AWS backend, and multi-format export — built to work fully offline in the field.",
    tags: ["Flutter", "AWS", "IoT"],
    highlight: "Fully offline-capable",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card flex h-full flex-col rounded-xl border border-border-light bg-bg-secondary p-8 shadow-sm">
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-primary/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-2 text-xl font-bold text-text-primary">
        {project.title}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>
      <p className="text-sm font-semibold text-brand-accent">
        {project.highlight}
      </p>
    </div>
  );
}

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLDivElement>(":scope > div")?.offsetWidth ?? 300;
    el.scrollLeft = 0;
  }, []);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate active card index
    const cardWidth = el.querySelector<HTMLDivElement>(":scope > div")?.offsetWidth ?? 300;
    const index = Math.round(el.scrollLeft / (cardWidth + 24));
    setActiveIndex(Math.min(index, projects.length - 1));
  }

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLDivElement>(":scope > div")?.offsetWidth ?? 360;
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  }

  function scrollToIndex(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLDivElement>(":scope > div")?.offsetWidth ?? 300;
    el.scrollTo({
      left: index * (cardWidth + 24),
      behavior: "smooth",
    });
  }

  return (
    <section id="projects" className="bg-bg-tertiary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <FadeIn className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Our Work
          </p>
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
            What We&apos;ve Cooked
          </h2>
          <div className="menu-divider mx-auto max-w-xs">
            <span className="text-sm">✦</span>
          </div>
        </FadeIn>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-14 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-bg-secondary p-3 shadow-md transition-all hover:shadow-lg lg:block ${
              canScrollLeft
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            aria-label="Scroll left"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className={`absolute -right-14 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-bg-secondary p-3 shadow-md transition-all hover:shadow-lg lg:block ${
              canScrollRight
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            aria-label="Scroll right"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 mobile-carousel-padding md:px-0"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="w-[85vw] shrink-0 snap-center sm:w-[340px]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="mt-6 flex justify-center gap-2 md:hidden">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex
                    ? "w-6 bg-brand-primary"
                    : "w-2 bg-border-medium"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
