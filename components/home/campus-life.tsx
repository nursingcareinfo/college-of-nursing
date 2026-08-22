"use client";

import {
  BookOpen,
  Globe,
  HeartPulse,
  Users,
} from "lucide-react";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/shared/motion";

const HIGHLIGHTS = [
  {
    icon: Users,
    title: "Experienced Faculty",
    text: "Quality education delivered by qualified nursing educators and clinicians.",
  },
  {
    icon: HeartPulse,
    title: "Modern Labs & Clinical Training",
    text: "Hands-on practice in modern labs with clinical postings at leading hospitals.",
  },
  {
    icon: Globe,
    title: "Careers Local & Abroad",
    text: "Professional growth with globally recognized nursing qualifications.",
  },
  {
    icon: BookOpen,
    title: "Practical Education",
    text: "A learning environment built around activities, practice, and competence.",
  },
] as const;

export function CampusLife() {
  return (
    <SectionReveal className="bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Campus Life
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            A vibrant learning environment designed to nurture growth, creativity,
            and professional development.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <StaggerItem>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/50 shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/campus-05.jpg`}
                alt="At Universal Health Institute of Nursing & Allied Sciences"
                className="h-full w-full object-cover"
              />
            </div>
          </StaggerItem>
          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-xl border border-border/60 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light text-teal">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </SectionReveal>
  );
}
