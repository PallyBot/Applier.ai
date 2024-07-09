import { InputJsonValue } from "../../types";
import { InterviewUpdateManyWithoutCandidatesInput } from "./InterviewUpdateManyWithoutCandidatesInput";

export type CandidateUpdateInput = {
  firstName?: string | null;
  email?: string | null;
  resume?: InputJsonValue;
  lastName?: string | null;
  interviews?: InterviewUpdateManyWithoutCandidatesInput;
  skills?: string | null;
  domainExpertise?: string | null;
  yearsOfExperience?: number | null;
};
