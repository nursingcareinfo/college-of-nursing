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

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-light/30 to-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <motion.div
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-6"
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-gold/10 text-gold">
              BS Nursing — 4-Year Degree Program
            </Badge>
            <Badge variant="secondary" className="bg-teal-light text-teal">
              Admissions Open — 2nd Batch
            </Badge>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Secure Your Future.
            <br />
            Become a Nurse!
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Begin your journey toward a rewarding career in nursing with
            hands-on clinical training at Dr. Ruth K. M. Pfau Civil Hospital
            Karachi, experienced faculty, and modern facilities at UHINAS.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
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
      </div>
    </section>
  );
}
