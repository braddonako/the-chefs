"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/menu";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark px-6 py-24 text-center md:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-accent"
        >
          Software Development Studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight text-text-on-dark md:text-7xl"
        >
          {siteConfig.slogan}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-text-on-dark-muted md:text-xl"
        >
          {siteConfig.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#menu"
            className="btn-primary rounded-full bg-brand-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-primary-hover"
          >
            See the Menu
          </a>
          <a
            href="#contact"
            className="btn-outline rounded-full border-2 border-text-on-dark-muted px-8 py-3.5 text-base font-semibold text-text-on-dark transition-all hover:border-text-on-dark hover:bg-white/5"
          >
            Book a Table
          </a>
        </motion.div>
      </div>
    </section>
  );
}
