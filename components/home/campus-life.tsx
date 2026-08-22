"use client";

import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/shared/motion";

const CAMPUS_IMAGES = [
  {
    label: "Classroom",
    gradient: "from-primary/15 via-primary/5 to-teal/10",
    span: "sm:col-span-2 sm:row-span-2",
    aspect: "aspect-[4/3] sm:aspect-square",
  },
  {
    label: "Skills Lab",
    gradient: "from-teal/15 via-teal-light/30 to-teal/5",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    label: "Campus",
    gradient: "from-gold/10 via-gold/5 to-teal/10",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    label: "Library",
    gradient: "from-navy/10 via-navy/5 to-teal-light/20",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    label: "Student Life",
    gradient: "from-teal/10 via-primary/5 to-gold/10",
    span: "",
    aspect: "aspect-[4/3]",
  },
] as const;

function CampusImagePlaceholder({
  label,
  gradient,
}: {
  label: string;
  gradient: string;
}) {
  return (
    <div
      className={`flex h-full items-center justify-center rounded-xl bg-gradient-to-br ${gradient} border border-border/50`}
    >
      <svg
        viewBox="0 0 200 150"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <text
          x="100"
          y="80"
          textAnchor="middle"
          fill="currentColor"
          fillOpacity="0.15"
          fontSize="14"
          fontFamily="system-ui"
        >
          {label}
        </text>
        <rect
          x="70"
          y="90"
          width="60"
          height="40"
          rx="8"
          fill="currentColor"
          fillOpacity="0.05"
        />
      </svg>
    </div>
  );
}

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

        <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {/* First image spans 2 cols on sm+ */}
          <StaggerItem className="col-span-2 sm:col-span-2">
            <div className={`${CAMPUS_IMAGES[0].aspect} w-full`}>
              <CampusImagePlaceholder
                label={CAMPUS_IMAGES[0].label}
                gradient={CAMPUS_IMAGES[0].gradient}
              />
            </div>
          </StaggerItem>
          {CAMPUS_IMAGES.slice(1).map((img) => (
            <StaggerItem key={img.label}>
              <div className={`${img.aspect} w-full`}>
                <CampusImagePlaceholder
                  label={img.label}
                  gradient={img.gradient}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionReveal>
  );
}
