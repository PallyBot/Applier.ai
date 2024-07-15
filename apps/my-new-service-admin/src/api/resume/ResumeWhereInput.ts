import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ResumeWhereInput = {
  id?: StringFilter;
  fileUrl?: StringNullableFilter;
  resumeText?: StringNullableFilter;
};
