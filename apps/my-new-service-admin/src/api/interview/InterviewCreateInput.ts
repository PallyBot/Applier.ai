import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { JobPositionWhereUniqueInput } from "../jobPosition/JobPositionWhereUniqueInput";

export type InterviewCreateInput = {
  date?: Date | null;
  feedback?: string | null;
  interviewer?: string | null;
  candidate?: CandidateWhereUniqueInput | null;
  jobPosition?: JobPositionWhereUniqueInput | null;
};
