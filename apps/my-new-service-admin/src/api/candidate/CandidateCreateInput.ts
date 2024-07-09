import { InputJsonValue } from "../../types";
import { InterviewCreateNestedManyWithoutCandidatesInput } from "./InterviewCreateNestedManyWithoutCandidatesInput";

export type CandidateCreateInput = {
  firstName?: string | null;
  email?: string | null;
  resume?: InputJsonValue;
  lastName?: string | null;
  interviews?: InterviewCreateNestedManyWithoutCandidatesInput;
  skills?: string | null;
  domainExpertise?: string | null;
  yearsOfExperience?: number | null;
};
