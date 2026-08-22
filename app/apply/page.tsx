import type { Metadata } from "next";
import { ApplicationForm } from "@/components/apply/application-form";
import { SectionReveal } from "@/components/shared/motion";

export const metadata: Metadata = {
  title: "Apply Online — BS Nursing 2nd Batch",
  description:
    "Submit your application for the BS Nursing 4-Year Degree Program (2nd Batch) at UHINAS Karachi. Complete the online form and apply via WhatsApp.",
};

export default function ApplyPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-white via-teal-light/30 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Apply Online
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Complete the form below to apply for the BS Nursing 4-Year Degree
              Program. Your application will be submitted via WhatsApp for
              quick processing.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <SectionReveal className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ApplicationForm />
        </div>
      </SectionReveal>
    </main>
  );
}
