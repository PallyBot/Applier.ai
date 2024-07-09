import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  feedback?: SortOrder;
  interviewer?: SortOrder;
  candidateId?: SortOrder;
  jobPositionId?: SortOrder;
};
