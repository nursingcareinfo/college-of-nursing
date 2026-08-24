export type ApplicationValues = {
  fullName: string;
  fatherName: string;
  cnic: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  matricBoard: string;
  matricYear: string;
  matricMarks: string;
  interBoard: string;
  interYear: string;
  interMarks: string;
  contactMethod: string;
};

export function buildApplicationMessage(v: ApplicationValues): string {
  const quals = [
    v.matricBoard && v.matricYear && v.matricMarks
      ? `Matric ${v.matricBoard} ${v.matricMarks}% (${v.matricYear})`
      : "",
    v.interBoard && v.interYear && v.interMarks
      ? `Inter ${v.interBoard} ${v.interMarks}% (${v.interYear})`
      : "",
  ]
    .filter(Boolean)
    .join(", ");

  return [
    "BS Nursing Application — 3rd Batch",
    "",
    `Name: ${v.fullName}`,
    `Guardian: ${v.fatherName}`,
    `CNIC/B-Form: ${v.cnic}`,
    `DOB: ${v.dob}`,
    `Gender: ${v.gender}`,
    `Phone: ${v.phone}`,
    v.email ? `Email: ${v.email}` : "",
    `Address: ${v.address}`,
    `Qualifications: ${quals || "N/A"}`,
    `Preferred contact: ${v.contactMethod}`,
  ]
    .filter((line) => line !== "")
    .join("\n");
}

type FieldErrors = Partial<Record<keyof ApplicationValues, string>>;

export function validateApplication(
  v: ApplicationValues,
  touched: Partial<Record<keyof ApplicationValues, boolean>> = {}
): FieldErrors {
  const e: FieldErrors = {};

  if (touched.fullName !== false && !v.fullName.trim())
    e.fullName = "Full name is required";
  if (touched.fatherName !== false && !v.fatherName.trim())
    e.fatherName = "Father / guardian name is required";
  if (touched.cnic !== false && !v.cnic.trim())
    e.cnic = "CNIC / B-Form number is required";
  if (touched.dob !== false && !v.dob) e.dob = "Date of birth is required";
  if (touched.gender !== false && !v.gender)
    e.gender = "Please select a gender";
  if (touched.phone !== false && !v.phone.trim())
    e.phone = "Phone number is required";
  if (
    touched.address !== false &&
    !v.address.trim()
  )
    e.address = "Address is required";
  if (touched.contactMethod !== false && !v.contactMethod)
    e.contactMethod = "Please select a preferred contact method";

  return e;
}
