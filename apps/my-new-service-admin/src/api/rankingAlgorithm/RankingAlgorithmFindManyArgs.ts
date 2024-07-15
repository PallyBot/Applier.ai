import { RankingAlgorithmWhereInput } from "./RankingAlgorithmWhereInput";
import { RankingAlgorithmOrderByInput } from "./RankingAlgorithmOrderByInput";

export type RankingAlgorithmFindManyArgs = {
  where?: RankingAlgorithmWhereInput;
  orderBy?: Array<RankingAlgorithmOrderByInput>;
  skip?: number;
  take?: number;
};
