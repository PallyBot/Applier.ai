import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AttachmentListRelationFilter } from "../attachment/AttachmentListRelationFilter";

export type JobRequirementWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  attachments?: AttachmentListRelationFilter;
};
