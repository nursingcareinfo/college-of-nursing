"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ApplicationValues } from "@/components/apply/application-form-data";

function fieldId(name: keyof ApplicationValues) {
  return "field-" + name;
}

type Props = {
  values: ApplicationValues;
  set: (name: keyof ApplicationValues, value: string) => void;
};

export function AcademicFields({ values, set }: Props) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-semibold text-navy">
        Academic Qualifications
      </legend>

      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Matriculation / O-Level
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-1.5">
            <Label htmlFor={fieldId("matricBoard")}>Board</Label>
            <Input
              id={fieldId("matricBoard")}
              value={values.matricBoard}
              onChange={(e) => set("matricBoard", e.target.value)}
              placeholder="e.g. Karachi Board"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={fieldId("matricYear")}>Year</Label>
            <Input
              id={fieldId("matricYear")}
              value={values.matricYear}
              onChange={(e) => set("matricYear", e.target.value)}
              placeholder="e.g. 2022"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={fieldId("matricMarks")}>Marks %</Label>
            <Input
              id={fieldId("matricMarks")}
              value={values.matricMarks}
              onChange={(e) => set("matricMarks", e.target.value)}
              placeholder="e.g. 85"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Intermediate / A-Level
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-1.5">
            <Label htmlFor={fieldId("interBoard")}>Board</Label>
            <Input
              id={fieldId("interBoard")}
              value={values.interBoard}
              onChange={(e) => set("interBoard", e.target.value)}
              placeholder="e.g. Karachi Board"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={fieldId("interYear")}>Year</Label>
            <Input
              id={fieldId("interYear")}
              value={values.interYear}
              onChange={(e) => set("interYear", e.target.value)}
              placeholder="e.g. 2024"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={fieldId("interMarks")}>Marks %</Label>
            <Input
              id={fieldId("interMarks")}
              value={values.interMarks}
              onChange={(e) => set("interMarks", e.target.value)}
              placeholder="e.g. 72"
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
}
