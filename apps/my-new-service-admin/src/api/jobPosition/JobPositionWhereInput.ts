import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";

export type JobPositionWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  interviews?: InterviewListRelationFilter;
};
