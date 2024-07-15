import { RankingAlgorithmWhereUniqueInput } from "../rankingAlgorithm/RankingAlgorithmWhereUniqueInput";

export type CandidateScoreUpdateInput = {
  candidateId?: string | null;
  score?: number | null;
  rankingAlgorithm?: RankingAlgorithmWhereUniqueInput | null;
};
