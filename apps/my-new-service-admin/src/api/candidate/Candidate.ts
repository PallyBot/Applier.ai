import { JsonValue } from "type-fest";
import { Interview } from "../interview/Interview";

export type Candidate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  email: string | null;
  resume: JsonValue;
  lastName: string | null;
  interviews?: Array<Interview>;
  skills: string | null;
  domainExpertise: string | null;
  yearsOfExperience: number | null;
};
