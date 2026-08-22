"use client";

import { Clock, Stethoscope, Building2, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { StaggerGroup, StaggerItem } from "@/components/shared/motion";

const STATS = [
  {
    icon: Clock,
    label: "Program",
    value: "4 Years",
    description: "Comprehensive BS Nursing degree",
  },
  {
    icon: Stethoscope,
    label: "Training",
    value: "Clinical Practice",
    description: "Hands-on hospital experience",
  },
  {
    icon: Building2,
    label: "Learning",
    value: "Modern Facilities",
    description: "Modern classrooms and skills labs",
  },
  {
    icon: Users,
    label: "Support",
    value: "Experienced Faculty",
    description: "Expert guidance throughout",
  },
] as const;

export function TrustStats() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <Card className="text-center transition-transform hover:-translate-y-1">
                <CardContent className="flex flex-col items-center gap-3 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-teal">
                    <stat.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-xl font-bold text-navy">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
