import { RankingAlgorithmWhereUniqueInput } from "../rankingAlgorithm/RankingAlgorithmWhereUniqueInput";

export type CandidateScoreCreateInput = {
  candidateId?: string | null;
  score?: number | null;
  rankingAlgorithm?: RankingAlgorithmWhereUniqueInput | null;
};
