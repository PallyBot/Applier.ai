import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { JobPositionWhereUniqueInput } from "../jobPosition/JobPositionWhereUniqueInput";

export type InterviewWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  feedback?: StringNullableFilter;
  interviewer?: StringNullableFilter;
  candidate?: CandidateWhereUniqueInput;
  jobPosition?: JobPositionWhereUniqueInput;
};
