"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// Lets you pick which HTML tag renders, so your semantic markup stays intact
const tags = {
  div: motion.div,
  ul: motion.ul,
  li: motion.li,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
} as const;

type Tag = keyof typeof tags;

const viewport = { once: true, margin: "-80px" } as const;

type RevealProps = {
  as?: Tag;
  delay?: number;
  y?: number;
  className?: string;
  children?: ReactNode;
};

/** Fades and slides one element up when it scrolls into view. */
export function Reveal({
  as = "div",
  delay = 0,
  y = 24,
  className,
  children,
}: RevealProps) {
  const Component = tags[as] as typeof motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}

type StaggerProps = {
  as?: Tag;
  stagger?: number;
  delay?: number;
  className?: string;
  children?: ReactNode;
};

/** Container: reveals its StaggerItem children one after another. */
export function Stagger({
  as = "div",
  stagger = 0.1,
  delay = 0,
  className,
  children,
}: StaggerProps) {
  const Component = tags[as] as typeof motion.div;

  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </Component>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function StaggerItem({
  as = "div",
  className,
  children,
}: {
  as?: Tag;
  className?: string;
  children?: ReactNode;
}) {
  const Component = tags[as] as typeof motion.div;

  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}