import { InputJsonValue } from "../../types";

export type CandidateCreateInput = {
  firstName?: string | null;
  email?: string | null;
  resume?: InputJsonValue;
  lastName?: string | null;
  skills?: string | null;
  domainExpertise?: string | null;
  yearsOfExperience?: number | null;
};
