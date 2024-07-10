import { SortOrder } from "../../util/SortOrder";

export type CandidateApplicationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  candidateId?: SortOrder;
  jobId?: SortOrder;
  status?: SortOrder;
};
