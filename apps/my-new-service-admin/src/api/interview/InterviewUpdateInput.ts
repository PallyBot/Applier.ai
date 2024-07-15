import { JobPositionWhereUniqueInput } from "../jobPosition/JobPositionWhereUniqueInput";

export type InterviewUpdateInput = {
  date?: Date | null;
  feedback?: string | null;
  interviewer?: string | null;
  candidate?: string | null;
  jobPosition?: JobPositionWhereUniqueInput | null;
};
