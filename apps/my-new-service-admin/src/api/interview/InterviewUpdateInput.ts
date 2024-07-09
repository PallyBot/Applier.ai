import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { JobPositionWhereUniqueInput } from "../jobPosition/JobPositionWhereUniqueInput";

export type InterviewUpdateInput = {
  date?: Date | null;
  feedback?: string | null;
  interviewer?: string | null;
  candidate?: CandidateWhereUniqueInput | null;
  jobPosition?: JobPositionWhereUniqueInput | null;
};
