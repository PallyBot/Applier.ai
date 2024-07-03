import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  candidateId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  feedback?: SortOrder;
  id?: SortOrder;
  interviewer?: SortOrder;
  jobPositionId?: SortOrder;
  updatedAt?: SortOrder;
};
