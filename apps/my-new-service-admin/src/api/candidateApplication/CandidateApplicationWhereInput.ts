import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CandidateApplicationWhereInput = {
  id?: StringFilter;
  candidateId?: StringNullableFilter;
  jobId?: StringNullableFilter;
  status?: "Option1";
};
