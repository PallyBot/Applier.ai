import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobPositionWhereUniqueInput } from "../jobPosition/JobPositionWhereUniqueInput";

export type InterviewWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  date?: DateTimeNullableFilter;
  feedback?: StringNullableFilter;
  id?: StringFilter;
  interviewer?: StringNullableFilter;
  jobPosition?: JobPositionWhereUniqueInput;
};
