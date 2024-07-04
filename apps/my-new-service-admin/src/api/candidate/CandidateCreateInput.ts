import { InterviewCreateNestedManyWithoutCandidatesInput } from "./InterviewCreateNestedManyWithoutCandidatesInput";
import { InputJsonValue } from "../../types";

export type CandidateCreateInput = {
  domainExpertise?: string | null;
  email?: string | null;
  firstName?: string | null;
  interviews?: InterviewCreateNestedManyWithoutCandidatesInput;
  lastName?: string | null;
  resume?: InputJsonValue;
  skills?: string | null;
  yearsOfExperience?: number | null;
};
