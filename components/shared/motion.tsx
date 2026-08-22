"use client";

import { MotionConfig, motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

function AnimationProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
  );
}

function SectionReveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

export {
  AnimationProvider,
  SectionReveal,
  StaggerGroup,
  StaggerItem,
  motion,
  sectionVariants,
  staggerContainer,
  staggerItem,
};
