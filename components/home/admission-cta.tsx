"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/shared/motion";

export function AdmissionCTA() {
  return (
    <SectionReveal className="bg-navy py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Begin Your Career in Nursing?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
          Take the first step toward a meaningful and rewarding career in
          healthcare. Applications for the 2nd Batch are now open.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            asChild
            className="bg-gold px-6 text-gold-foreground hover:bg-gold/90"
          >
            <Link href="/apply/">
              Apply Online
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white/20 text-white hover:bg-white/10 hover:text-white"
          >
            <a
              href="https://wa.me/923453027788"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </SectionReveal>
  );
}
