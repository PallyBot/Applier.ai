import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobPositionWhereUniqueInput } from "../jobPosition/JobPositionWhereUniqueInput";

export type InterviewWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  feedback?: StringNullableFilter;
  interviewer?: StringNullableFilter;
  candidate?: StringNullableFilter;
  jobPosition?: JobPositionWhereUniqueInput;
};
