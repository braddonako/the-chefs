"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

const container = (stagger: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function StaggerChildren({
  children,
  className,
  stagger = 0.1,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={container(stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
