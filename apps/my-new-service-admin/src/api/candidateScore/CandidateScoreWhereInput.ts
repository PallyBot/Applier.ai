import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RankingAlgorithmWhereUniqueInput } from "../rankingAlgorithm/RankingAlgorithmWhereUniqueInput";

export type CandidateScoreWhereInput = {
  id?: StringFilter;
  candidateId?: StringNullableFilter;
  score?: FloatNullableFilter;
  rankingAlgorithm?: RankingAlgorithmWhereUniqueInput;
};
