"use client";

import { useState, useCallback, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { PersonalInfoFields } from "@/components/apply/personal-info-fields";
import { AcademicFields } from "@/components/apply/academic-fields";
import {
  type ApplicationValues,
  buildApplicationMessage,
  validateApplication,
} from "@/components/apply/application-form-data";

const WHATSAPP_NUMBER = "92XXXXXXXXXXX";

const EMPTY: ApplicationValues = {
  fullName: "", fatherName: "", cnic: "", dob: "", gender: "",
  phone: "", email: "", address: "",
  matricBoard: "", matricYear: "", matricMarks: "",
  interBoard: "", interYear: "", interMarks: "",
  contactMethod: "",
};

type FieldErrors = Partial<Record<keyof ApplicationValues, string>>;

function errorId(name: keyof ApplicationValues) {
  return "error-" + name;
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-1 text-xs text-destructive" role="alert">
      {msg}
    </p>
  );
}

function SuccessState({ values }: { values: ApplicationValues }) {
  const waUrl =
    "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(buildApplicationMessage(values));
  return (
    <div className="rounded-xl border border-border bg-card p-8 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal/10">
        <Send className="h-6 w-6 text-teal" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-navy">Opening WhatsApp\u2026</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        If nothing happened,{" "}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-teal underline underline-offset-4 hover:text-teal/80"
        >
          tap this link
        </a>
        .
      </p>
      <p className="mt-4 text-xs text-muted-foreground">
        Bring original documents at submission / interview.
      </p>
    </div>
  );
}

export function ApplicationForm() {
  const [values, setValues] = useState<ApplicationValues>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ApplicationValues, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = useCallback((name: keyof ApplicationValues, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleBlur = useCallback(
    (name: keyof ApplicationValues) => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      const errs = validateApplication(values, { [name]: true });
      setErrors((prev) => ({ ...prev, [name]: errs[name] }));
    },
    [values]
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const allTouched = Object.fromEntries(
        Object.keys(EMPTY).map((k) => [k, true])
      ) as Partial<Record<keyof ApplicationValues, boolean>>;
      setTouched(allTouched);
      const errs = validateApplication(values, allTouched);
      setErrors(errs);
      if (Object.keys(errs).length > 0) {
        const first = document.querySelector<HTMLElement>("[aria-invalid='true']");
        first?.scrollIntoView({ behavior: "smooth", block: "center" });
        first?.focus();
        return;
      }
      setSubmitting(true);
      const body = buildApplicationMessage(values);
      const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(body);
      window.open(url, "_blank");
      setTimeout(() => { setSubmitted(true); setSubmitting(false); }, 1000);
    },
    [values]
  );

  if (submitted) return <SuccessState values={values} />;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8 rounded-xl border border-border bg-card p-6 sm:p-8">
      <PersonalInfoFields values={values} errors={errors} set={set} handleBlur={handleBlur} />
      <Separator />
      <AcademicFields values={values} set={set} />
      <Separator />

      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold text-navy">
          Preferred Contact Method <span className="text-destructive">*</span>
        </legend>
        <div className="flex flex-wrap gap-4" role="radiogroup" aria-label="Preferred contact method">
          {["WhatsApp", "Phone", "Email"].map((method) => (
            <label key={method} className="flex items-center gap-2 text-sm text-navy">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={values.contactMethod === method}
                onChange={() => { set("contactMethod", method); handleBlur("contactMethod"); }}
                className="h-4 w-4 accent-teal"
              />
              {method}
            </label>
          ))}
        </div>
        <FieldError id={errorId("contactMethod")} msg={errors.contactMethod} />
      </fieldset>

      <Separator />
      <p className="text-xs text-muted-foreground">
        Bring original documents at submission / interview.
      </p>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full bg-gold text-gold-foreground hover:bg-gold/90 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {submitting ? "Submitting\u2026" : "Submit Application"}
      </Button>
    </form>
  );
}
