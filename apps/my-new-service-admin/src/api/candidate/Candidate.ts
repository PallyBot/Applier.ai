import { Interview } from "../interview/Interview";
import { JsonValue } from "type-fest";

export type Candidate = {
  createdAt: Date;
  domainExpertise: string | null;
  email: string | null;
  firstName: string | null;
  id: string;
  interviews?: Array<Interview>;
  lastName: string | null;
  resume: JsonValue;
  skills: string | null;
  updatedAt: Date;
  yearsOfExperience: number | null;
};
