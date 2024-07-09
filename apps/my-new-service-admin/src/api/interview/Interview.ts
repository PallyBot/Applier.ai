import { Candidate } from "../candidate/Candidate";
import { JobPosition } from "../jobPosition/JobPosition";

export type Interview = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  feedback: string | null;
  interviewer: string | null;
  candidate?: Candidate | null;
  jobPosition?: JobPosition | null;
};
