import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";

export type JobPositionWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  interviews?: InterviewListRelationFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
