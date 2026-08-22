"use client";

import { Quote } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/shared/motion";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function VicePrincipalMessage() {
  return (
    <section className="bg-teal-light/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerGroup className="grid items-center gap-10 lg:grid-cols-5">
          <StaggerItem className="lg:col-span-2 lg:order-2">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-border/50 shadow-lg lg:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE_PATH}/images/vice-principal.jpg`}
                alt="Nazish Ali — Vice Principal, Universal Health Institute of Nursing & Allied Sciences"
                className="w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent p-5 pt-14">
                <p className="text-lg font-bold text-white">Nazish Ali</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                  Vice Principal
                </p>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem className="lg:col-span-3 lg:order-1">
            <Quote className="h-10 w-10 text-teal" aria-hidden="true" />
            <blockquote className="mt-5 space-y-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              <p>
                Our mission is to nurture competent and compassionate nursing
                professionals by combining rigorous academics with the values
                of empathy, integrity, and service.
              </p>
              <p>
                Through close mentorship and disciplined, hands-on training, we
                prepare our students to excel in their careers and to serve
                patients and communities with dignity and care.
              </p>
            </blockquote>
            <p className="mt-7 text-base font-bold text-navy">
              Nazish Ali
              <span className="ml-2 text-sm font-semibold uppercase tracking-wider text-teal">
                — Vice Principal, UHINAS
              </span>
            </p>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
