import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CandidateWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  email?: StringNullableFilter;
  resume?: JsonFilter;
  lastName?: StringNullableFilter;
  interviews?: InterviewListRelationFilter;
  skills?: StringNullableFilter;
  domainExpertise?: StringNullableFilter;
  yearsOfExperience?: IntNullableFilter;
};
