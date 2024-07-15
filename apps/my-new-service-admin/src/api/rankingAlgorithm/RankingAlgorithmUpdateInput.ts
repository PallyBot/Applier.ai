import { CandidateScoreUpdateManyWithoutRankingAlgorithmsInput } from "./CandidateScoreUpdateManyWithoutRankingAlgorithmsInput";

export type RankingAlgorithmUpdateInput = {
  name?: string | null;
  description?: string | null;
  candidateScores?: CandidateScoreUpdateManyWithoutRankingAlgorithmsInput;
};
