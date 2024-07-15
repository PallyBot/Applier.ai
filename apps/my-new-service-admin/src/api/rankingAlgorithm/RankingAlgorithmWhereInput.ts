import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CandidateScoreListRelationFilter } from "../candidateScore/CandidateScoreListRelationFilter";

export type RankingAlgorithmWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  candidateScores?: CandidateScoreListRelationFilter;
};
