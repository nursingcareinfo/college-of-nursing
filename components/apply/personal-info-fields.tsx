"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ApplicationValues } from "@/components/apply/application-form-data";

type FieldErrors = Partial<Record<keyof ApplicationValues, string>>;

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-1 text-xs text-destructive" role="alert">
      {msg}
    </p>
  );
}

function fieldId(name: keyof ApplicationValues) {
  return "field-" + name;
}
function errorId(name: keyof ApplicationValues) {
  return "error-" + name;
}

type Props = {
  values: ApplicationValues;
  errors: FieldErrors;
  set: (name: keyof ApplicationValues, value: string) => void;
  handleBlur: (name: keyof ApplicationValues) => void;
};

export function PersonalInfoFields({ values, errors, set, handleBlur }: Props) {
  const aria = (name: keyof ApplicationValues) => ({
    id: fieldId(name),
    "aria-invalid": !!errors[name] || undefined,
    "aria-describedby": errors[name] ? errorId(name) : undefined,
  });

  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-semibold text-navy">
        Personal Information
      </legend>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor={fieldId("fullName")}>
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            {...aria("fullName")}
            value={values.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            onBlur={() => handleBlur("fullName")}
            placeholder="Applicant full name"
          />
          <FieldError id={errorId("fullName")} msg={errors.fullName} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={fieldId("fatherName")}>
            Father / Guardian Name <span className="text-destructive">*</span>
          </Label>
          <Input
            {...aria("fatherName")}
            value={values.fatherName}
            onChange={(e) => set("fatherName", e.target.value)}
            onBlur={() => handleBlur("fatherName")}
            placeholder="Father or guardian name"
          />
          <FieldError id={errorId("fatherName")} msg={errors.fatherName} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor={fieldId("cnic")}>
            CNIC / B-Form Number <span className="text-destructive">*</span>
          </Label>
          <Input
            {...aria("cnic")}
            value={values.cnic}
            onChange={(e) => set("cnic", e.target.value)}
            onBlur={() => handleBlur("cnic")}
            placeholder="XXXXX-XXXXXXX-X"
          />
          <FieldError id={errorId("cnic")} msg={errors.cnic} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={fieldId("dob")}>
            Date of Birth <span className="text-destructive">*</span>
          </Label>
          <Input
            {...aria("dob")}
            type="date"
            value={values.dob}
            onChange={(e) => set("dob", e.target.value)}
            onBlur={() => handleBlur("dob")}
          />
          <FieldError id={errorId("dob")} msg={errors.dob} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor={fieldId("gender")}>
            Gender <span className="text-destructive">*</span>
          </Label>
          <Select
            value={values.gender}
            onValueChange={(v) => { set("gender", v); handleBlur("gender"); }}
          >
            <SelectTrigger {...aria("gender")} className="w-full">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          <FieldError id={errorId("gender")} msg={errors.gender} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={fieldId("phone")}>
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            {...aria("phone")}
            type="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            placeholder="+92 XXX XXXXXXX"
          />
          <FieldError id={errorId("phone")} msg={errors.phone} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={fieldId("email")}>Email (Optional)</Label>
        <Input
          {...aria("email")}
          type="email"
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="email@example.com"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={fieldId("address")}>
          Address <span className="text-destructive">*</span>
        </Label>
        <Textarea
          {...aria("address")}
          value={values.address}
          onChange={(e) => set("address", e.target.value)}
          onBlur={() => handleBlur("address")}
          placeholder="Full residential address"
        />
        <FieldError id={errorId("address")} msg={errors.address} />
      </div>
    </fieldset>
  );
}
