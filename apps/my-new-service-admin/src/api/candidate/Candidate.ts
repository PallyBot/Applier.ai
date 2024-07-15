import { JsonValue } from "type-fest";

export type Candidate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  email: string | null;
  resume: JsonValue;
  lastName: string | null;
  skills: string | null;
  domainExpertise: string | null;
  yearsOfExperience: number | null;
};
