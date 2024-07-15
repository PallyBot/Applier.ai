import { Interview } from "../interview/Interview";

export type JobPosition = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  status?: "Option1" | null;
  interviews?: Array<Interview>;
};
