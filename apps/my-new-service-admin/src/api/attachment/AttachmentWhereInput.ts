import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobRequirementWhereUniqueInput } from "../jobRequirement/JobRequirementWhereUniqueInput";

export type AttachmentWhereInput = {
  id?: StringFilter;
  fileUrl?: StringNullableFilter;
  fileType?: StringNullableFilter;
  jobRequirement?: JobRequirementWhereUniqueInput;
};
