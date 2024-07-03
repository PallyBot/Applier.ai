import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { JobPositionWhereUniqueInput } from "../jobPosition/JobPositionWhereUniqueInput";

export type InterviewCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  date?: Date | null;
  feedback?: string | null;
  interviewer?: string | null;
  jobPosition?: JobPositionWhereUniqueInput | null;
};
