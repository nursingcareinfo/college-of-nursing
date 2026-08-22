"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const heroTextVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.92, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE, delay: 0.2 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.6, ease: EASE },
  },
};

function FloatingBadge() {
  return (
    <motion.div
      variants={badgeVariants}
      initial="hidden"
      animate="visible"
      className="absolute -left-4 bottom-8 z-10 sm:left-4"
    >
      <div className="rounded-xl border border-gold/20 bg-white px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          <p className="text-sm font-semibold text-navy">
            Admissions Open — 2nd Batch
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function HeroPlaceholderImage() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-teal/20 to-teal-light/40" />
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--uhinas-navy)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--uhinas-teal)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#heroGrad)" />
        <circle cx="200" cy="160" r="60" fill="var(--uhinas-teal)" fillOpacity="0.15" />
        <rect x="140" y="230" width="120" height="80" rx="12" fill="var(--uhinas-teal)" fillOpacity="0.1" />
        <text
          x="200"
          y="340"
          textAnchor="middle"
          fill="var(--uhinas-navy)"
          fillOpacity="0.2"
          fontSize="14"
          fontFamily="system-ui"
        >
          Campus Photo
        </text>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-light/30 to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: text content */}
          <motion.div
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <Badge variant="secondary" className="bg-gold/10 text-gold">
              BS Nursing — 4-Year Degree Program
            </Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Shape Your Future
              <br />
              in Healthcare
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Begin your journey toward a rewarding career in nursing with
              hands-on clinical training, expert faculty, and modern facilities
              at UHINAS Karachi.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                asChild
                className="bg-gold px-6 text-gold-foreground hover:bg-gold/90"
              >
                <Link href="/apply/">
                  Apply Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/bs-nursing/">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Explore BS Nursing
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: image container */}
          <motion.div
            variants={heroImageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="aspect-square max-h-[480px] w-full">
              <HeroPlaceholderImage />
            </div>
            <FloatingBadge />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
