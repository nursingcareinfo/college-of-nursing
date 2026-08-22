"use client";

import {
  GraduationCap,
  FlaskConical,
  Airplay,
  Home,
  Gamepad2,
  MonitorPlay,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { StaggerGroup, StaggerItem } from "@/components/shared/motion";

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Qualified Faculty",
    description:
      "Experienced nursing professionals and educators guiding your academic journey.",
  },
  {
    icon: FlaskConical,
    title: "Skills Laboratories",
    description:
      "Fully equipped simulation labs for hands-on practice in a safe learning environment.",
  },
  {
    icon: Airplay,
    title: "Air-Conditioned Classrooms",
    description:
      "Comfortable, modern classrooms designed for focused and productive learning.",
  },
  {
    icon: Home,
    title: "Boys Hostel",
    description:
      "On-campus hostel accommodation providing a safe and supportive living environment.",
  },
  {
    icon: Gamepad2,
    title: "Indoor Games & Health Activities",
    description:
      "Recreational facilities and wellness programs to support student wellbeing.",
  },
  {
    icon: MonitorPlay,
    title: "Multimedia Smart Learning",
    description:
      "Technology-enhanced education with multimedia tools and smart learning resources.",
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Why Choose UHINAS?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Everything you need for a world-class nursing education, right here
            in Karachi.
          </p>
        </div>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card className="h-full transition-transform hover:-translate-y-1">
                <CardContent className="flex gap-4 pt-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-navy">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
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
