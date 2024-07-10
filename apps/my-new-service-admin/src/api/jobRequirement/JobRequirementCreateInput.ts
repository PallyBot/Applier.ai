import { AttachmentCreateNestedManyWithoutJobRequirementsInput } from "./AttachmentCreateNestedManyWithoutJobRequirementsInput";

export type JobRequirementCreateInput = {
  title?: string | null;
  description?: string | null;
  createdBy?: string | null;
  attachments?: AttachmentCreateNestedManyWithoutJobRequirementsInput;
};
