import { JobRequirementWhereUniqueInput } from "../jobRequirement/JobRequirementWhereUniqueInput";

export type AttachmentUpdateInput = {
  fileUrl?: string | null;
  fileType?: string | null;
  jobRequirement?: JobRequirementWhereUniqueInput | null;
};
