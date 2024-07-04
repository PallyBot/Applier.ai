import { Candidate } from "../candidate/Candidate";
import { JobPosition } from "../jobPosition/JobPosition";

export type Interview = {
  candidate?: Candidate | null;
  createdAt: Date;
  date: Date | null;
  feedback: string | null;
  id: string;
  interviewer: string | null;
  jobPosition?: JobPosition | null;
  updatedAt: Date;
};
