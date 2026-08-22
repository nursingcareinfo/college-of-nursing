"use client";

import { Quote } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/shared/motion";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function ChairmanMessage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerGroup className="grid items-center gap-10 lg:grid-cols-5">
          <StaggerItem className="lg:col-span-2">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-border/50 shadow-lg lg:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE_PATH}/images/chairman.jpg`}
                alt="Imran Subhan — Chairman, Universal Health Institute of Nursing & Allied Sciences"
                className="w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent p-5 pt-14">
                <p className="text-lg font-bold text-white">Imran Subhan</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                  Chairman
                </p>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem className="lg:col-span-3">
            <Quote className="h-10 w-10 text-teal" aria-hidden="true" />
            <blockquote className="mt-5 space-y-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              <p>
                We are dedicated to improving quality education through
                specialized knowledge, innovative teaching methods, and
                comprehensive clinical training, with a strong emphasis on
                academic excellence, professional discipline, and character
                development.
              </p>
              <p>
                I am confident that our graduates will serve as responsible
                professionals who will contribute positively to the
                nation&rsquo;s healthcare system.
              </p>
            </blockquote>
            <p className="mt-7 text-base font-bold text-navy">
              Imran Subhan
              <span className="ml-2 text-sm font-semibold uppercase tracking-wider text-teal">
                — Chairman, UHINAS
              </span>
            </p>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
