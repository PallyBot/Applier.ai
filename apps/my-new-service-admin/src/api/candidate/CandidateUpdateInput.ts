import { InterviewUpdateManyWithoutCandidatesInput } from "./InterviewUpdateManyWithoutCandidatesInput";
import { InputJsonValue } from "../../types";

export type CandidateUpdateInput = {
  domainExpertise?: string | null;
  email?: string | null;
  firstName?: string | null;
  interviews?: InterviewUpdateManyWithoutCandidatesInput;
  lastName?: string | null;
  resume?: InputJsonValue;
  skills?: string | null;
  yearsOfExperience?: number | null;
};
