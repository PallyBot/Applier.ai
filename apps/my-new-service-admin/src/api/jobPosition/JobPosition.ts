import { Interview } from "../interview/Interview";

export type JobPosition = {
  createdAt: Date;
  description: string | null;
  id: string;
  interviews?: Array<Interview>;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
