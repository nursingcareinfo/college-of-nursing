import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionReveal } from "@/components/shared/motion";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/shared/motion";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admission eligibility, process, required documents, and application deadlines for the BS Nursing 4-Year Degree Program (2nd Batch) at UHINAS Karachi.",
};

const ADMISSION_STEPS = [
  { step: 1, title: "Submit Application", desc: "Complete and submit the online application form with all required information." },
  { step: 2, title: "Entrance Test", desc: "Appear for the entrance examination conducted by the institute." },
  { step: 3, title: "Interview", desc: "Shortlisted candidates will be called for a personal interview." },
  { step: 4, title: "Merit List", desc: "Final merit list will be announced based on test and interview performance." },
  { step: 5, title: "Fee Submission & Enrollment", desc: "Selected candidates complete fee submission and formal enrollment." },
];

const REQUIRED_DOCUMENTS = [
  "Matric / O-Level marksheet",
  "Intermediate / A-Level marksheet",
  "CNIC / B-Form",
  "Domicile certificate",
  "4 passport-size photographs",
  "Migration certificate (if applicable)",
  "Medical fitness certificate",
];

export default function AdmissionsPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-white via-teal-light/30 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <Badge variant="secondary" className="bg-gold/10 text-gold">
              BS Nursing — 2nd Batch
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Admissions
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Everything you need to know about joining the BS Nursing 4-Year
              Degree Program at UHINAS Karachi. Review the eligibility criteria,
              admission process, and required documents below.
            </p>
          </div>
        </div>
      </section>

      {/* Deadline Notice */}
      <SectionReveal className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Badge variant="destructive" className="px-4 py-1.5 text-sm">
              Last date to apply: to be announced
            </Badge>
          </div>
        </div>
      </SectionReveal>

      {/* Eligibility + Process */}
      <SectionReveal className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Eligibility */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Eligibility Criteria
              </h2>
              <Card>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-navy">
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                        aria-hidden="true"
                      />
                      Intermediate (Pre-Medical) or equivalent with minimum 50%
                      marks
                    </li>
                    <li className="flex items-start gap-3 text-sm text-navy">
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                        aria-hidden="true"
                      />
                      Age: 17–25 years at the time of admission
                    </li>
                    <li className="flex items-start gap-3 text-sm text-navy">
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                        aria-hidden="true"
                      />
                      Medical fitness as per PM&amp;DC requirements
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Admission Process */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Admission Process
              </h2>
              <StaggerGroup className="space-y-4">
                {ADMISSION_STEPS.map((item) => (
                  <StaggerItem key={item.step}>
                    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-semibold text-navy">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </SectionReveal>

      <Separator className="mx-auto max-w-7xl" />

      {/* Required Documents */}
      <SectionReveal className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Required Documents
            </h2>
            <p className="text-muted-foreground">
              Prepare the following documents for your application submission and
              interview.
            </p>
          </div>
          <Card className="mx-auto mt-8 max-w-2xl">
            <CardContent>
              <ul className="space-y-3">
                {REQUIRED_DOCUMENTS.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-center gap-3 text-sm text-navy"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[0.65rem] font-bold text-teal">
                      {"\u2713"}
                    </span>
                    {doc}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </SectionReveal>

      {/* Closing CTA */}
      <SectionReveal className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Apply?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Submit your application online and take the first step toward a
            rewarding career in nursing.
          </p>
          <div className="mt-8">
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
          </div>
        </div>
      </SectionReveal>
    </main>
  );
}
