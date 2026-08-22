"use client";

import { Card, CardContent } from "@/components/ui/card";
import { StaggerGroup, StaggerItem } from "@/components/shared/motion";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const AFFILIATIONS = [
  {
    logoSrc: `${BASE_PATH}/images/lumhs-logo.png`,
    alt: "Liaquat University of Medical and Health Sciences logo",
    badge: "Affiliated with",
    name: "Liaquat University of Medical and Health Sciences",
  },
  {
    logoSrc: `${BASE_PATH}/images/pnmc-logo.png`,
    alt: "Pakistan Nursing and Midwifery Council logo",
    badge: "Approved by",
    name: "Pakistan Nursing and Midwifery Council Islamabad",
  },
] as const;

export function Accreditation() {
  return (
    <section className="bg-teal-light/40 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Recognised &amp; Regulated
        </p>
        <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2">
          {AFFILIATIONS.map((item) => (
            <StaggerItem key={item.badge}>
              <Card className="transition-transform hover:-translate-y-1">
                <CardContent className="flex items-center gap-5 pt-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logoSrc}
                    alt={item.alt}
                    className="h-16 w-auto shrink-0 self-center object-contain sm:h-20"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                      {item.badge}
                    </p>
                    <p className="mt-1 text-base font-bold leading-snug text-navy">
                      {item.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
