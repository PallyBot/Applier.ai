import { SortOrder } from "../../util/SortOrder";

export type CandidateScoreOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  candidateId?: SortOrder;
  score?: SortOrder;
  rankingAlgorithmId?: SortOrder;
};
