import { JobPositionWhereUniqueInput } from "../jobPosition/JobPositionWhereUniqueInput";

export type InterviewCreateInput = {
  date?: Date | null;
  feedback?: string | null;
  interviewer?: string | null;
  candidate?: string | null;
  jobPosition?: JobPositionWhereUniqueInput | null;
};
