import { JobRequirement } from "../jobRequirement/JobRequirement";

export type Attachment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileUrl: string | null;
  fileType: string | null;
  jobRequirement?: JobRequirement | null;
};
