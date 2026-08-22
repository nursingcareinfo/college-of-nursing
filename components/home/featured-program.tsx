"use client";

import {
  Clock,
  BookOpen,
  ClipboardCheck,
  Building,
  Briefcase,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { SectionReveal } from "@/components/shared/motion";

const PROGRAM_DETAILS = [
  { icon: Clock, label: "Duration", value: "4 Years (8 Semesters)" },
  { icon: BookOpen, label: "Eligibility", value: "Intermediate (Pre-Medical) or equivalent" },
  { icon: ClipboardCheck, label: "Admission Process", value: "Entrance test + interview + merit list" },
  { icon: Building, label: "Clinical Learning", value: "Supervised rotations in affiliated hospitals" },
  { icon: Briefcase, label: "Career Opportunities", value: "Hospitals, clinics, community health, education" },
] as const;

const REQUIRED_DOCUMENTS = [
  "Matric / O-Level marksheet",
  "Intermediate / A-Level marksheet",
  "CNIC / B-Form",
  "Domicile certificate",
  "4 passport-size photographs",
  "Migration certificate (if applicable)",
  "Medical fitness certificate",
];

export function FeaturedProgram() {
  return (
    <SectionReveal className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: program info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Start Your Nursing Journey
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our BS Nursing program combines rigorous academic coursework with
              extensive clinical experience, preparing you for a fulfilling career
              in healthcare.
            </p>

            <div className="space-y-3">
              {PROGRAM_DETAILS.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-light text-teal">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-navy">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: admission requirements dialog */}
          <div className="rounded-2xl border border-border bg-muted/50 p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
              <FileText className="h-6 w-6 text-gold" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-navy">
              Required Documents
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prepare the following documents for your application submission.
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {REQUIRED_DOCUMENTS.map((doc) => (
                <li key={doc} className="flex items-center gap-2 text-sm text-navy">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[0.65rem] font-bold text-teal">
                    {"\u2713"}
                  </span>
                  {doc}
                </li>
              ))}
            </ul>
            <Separator className="my-4" />
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
                  View Admission Requirements
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Admission Requirements</DialogTitle>
                  <DialogDescription>
                    Detailed eligibility criteria and the step-by-step admission
                    process for the BS Nursing 4-Year Degree Program.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <h4 className="mb-1 font-semibold text-navy">
                      Eligibility Criteria
                    </h4>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>
                        Intermediate (Pre-Medical) or equivalent with minimum
                        50% marks
                      </li>
                      <li>Age: 17-25 years at the time of admission</li>
                      <li>Medical fitness as per PM&amp;DC requirements</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="mb-1 font-semibold text-navy">
                      Admission Process
                    </h4>
                    <ol className="list-decimal space-y-1 pl-4">
                      <li>Submit online application form</li>
                      <li>Upload required documents</li>
                      <li>Appear for entrance examination</li>
                      <li>Attend interview (if shortlisted)</li>
                      <li>Merit list announcement</li>
                      <li>Fee submission and enrollment</li>
                    </ol>
                  </div>
                  <p className="text-xs italic text-muted-foreground/70">
                    Note: Specific dates, fees, and detailed requirements will be
                    confirmed by the college administration before admissions open.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
