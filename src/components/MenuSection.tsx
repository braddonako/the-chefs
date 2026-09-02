"use client";

import { motion } from "framer-motion";
import { menuCategories } from "@/config/menu";
import type { MenuCategory, MenuItem } from "@/config/menu";
import FadeIn from "./FadeIn";
import StaggerChildren, { staggerItem } from "./StaggerChildren";

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <motion.div variants={staggerItem} className="menu-item-row group py-5 first:pt-0 last:pb-0">
      <div className="mb-1 flex items-baseline gap-2">
        <h4 className="shrink-0 text-lg font-semibold text-text-primary transition-colors group-hover:text-brand-primary md:text-xl">
          {item.name}
        </h4>
        <span className="menu-dots min-w-8 flex-1" />
        <span className="shrink-0 text-lg font-semibold text-brand-primary">
          {item.price}
        </span>
      </div>
      <p className="pr-24 text-sm leading-relaxed text-text-secondary italic">
        {item.description}
      </p>
      {item.tags && (
        <div className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium uppercase tracking-wider text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function CategorySection({ category }: { category: MenuCategory }) {
  return (
    <div className="mb-14 last:mb-0">
      <FadeIn className="mb-6 text-center">
        <span className="mb-2 block text-2xl">{category.icon}</span>
        <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-primary md:text-3xl">
          {category.title}
        </h3>
        <p className="mt-1 text-sm italic text-text-muted">{category.subtitle}</p>
        <div className="menu-ornament mt-3">
          <span>✦</span>
        </div>
      </FadeIn>
      <StaggerChildren className="mx-auto max-w-2xl divide-y divide-border-light" stagger={0.12}>
        {category.items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </StaggerChildren>
    </div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="section-divider bg-bg-primary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        {/* Menu frame */}
        <div className="menu-frame mx-auto max-w-3xl rounded-sm border-2 border-brand-secondary/10 px-6 py-12 md:px-16 md:py-16">
          <FadeIn className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
              What We Serve
            </p>
            <h2 className="font-display text-4xl font-bold text-text-primary md:text-5xl">
              The Menu
            </h2>
            <div className="menu-ornament mt-4">
              <span>✦ ✦ ✦</span>
            </div>
          </FadeIn>

          {menuCategories.map((category) => (
            <CategorySection key={category.title} category={category} />
          ))}

          <FadeIn className="mt-12 text-center">
            <p className="text-xs italic text-text-muted">
              Prices reflect starting rates. Final scope discussed over a complimentary consultation.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
