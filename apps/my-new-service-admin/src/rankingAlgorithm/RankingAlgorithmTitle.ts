import { RankingAlgorithm as TRankingAlgorithm } from "../api/rankingAlgorithm/RankingAlgorithm";

export const RANKINGALGORITHM_TITLE_FIELD = "name";

export const RankingAlgorithmTitle = (record: TRankingAlgorithm): string => {
  return record.name?.toString() || String(record.id);
};
