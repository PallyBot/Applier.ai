import { CandidateScore } from "../candidateScore/CandidateScore";

export type RankingAlgorithm = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  candidateScores?: Array<CandidateScore>;
};
