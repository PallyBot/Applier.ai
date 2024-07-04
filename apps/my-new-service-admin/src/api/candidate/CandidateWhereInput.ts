import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CandidateWhereInput = {
  domainExpertise?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  interviews?: InterviewListRelationFilter;
  lastName?: StringNullableFilter;
  resume?: JsonFilter;
  skills?: StringNullableFilter;
  yearsOfExperience?: IntNullableFilter;
};
