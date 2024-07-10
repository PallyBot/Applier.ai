import { Attachment } from "../attachment/Attachment";

export type JobRequirement = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  createdBy: string | null;
  attachments?: Array<Attachment>;
};
