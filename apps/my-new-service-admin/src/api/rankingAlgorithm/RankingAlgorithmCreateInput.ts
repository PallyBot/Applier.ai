import { CandidateScoreCreateNestedManyWithoutRankingAlgorithmsInput } from "./CandidateScoreCreateNestedManyWithoutRankingAlgorithmsInput";

export type RankingAlgorithmCreateInput = {
  name?: string | null;
  description?: string | null;
  candidateScores?: CandidateScoreCreateNestedManyWithoutRankingAlgorithmsInput;
};
