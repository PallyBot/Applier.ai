import { SortOrder } from "../../util/SortOrder";

export type RankingAlgorithmOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
};
