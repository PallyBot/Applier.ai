import { AttachmentUpdateManyWithoutJobRequirementsInput } from "./AttachmentUpdateManyWithoutJobRequirementsInput";

export type JobRequirementUpdateInput = {
  title?: string | null;
  description?: string | null;
  createdBy?: string | null;
  attachments?: AttachmentUpdateManyWithoutJobRequirementsInput;
};
