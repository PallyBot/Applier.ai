import { RankingAlgorithm } from "../rankingAlgorithm/RankingAlgorithm";

export type CandidateScore = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  candidateId: string | null;
  score: number | null;
  rankingAlgorithm?: RankingAlgorithm | null;
};
