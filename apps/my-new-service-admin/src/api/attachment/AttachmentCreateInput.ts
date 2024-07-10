import { JobRequirementWhereUniqueInput } from "../jobRequirement/JobRequirementWhereUniqueInput";

export type AttachmentCreateInput = {
  fileUrl?: string | null;
  fileType?: string | null;
  jobRequirement?: JobRequirementWhereUniqueInput | null;
};
