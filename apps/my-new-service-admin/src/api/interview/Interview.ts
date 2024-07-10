import { JobPosition } from "../jobPosition/JobPosition";

export type Interview = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  feedback: string | null;
  interviewer: string | null;
  candidate: string | null;
  jobPosition?: JobPosition | null;
};
