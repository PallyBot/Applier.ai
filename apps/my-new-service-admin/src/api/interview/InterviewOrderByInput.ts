import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  feedback?: SortOrder;
  interviewer?: SortOrder;
  candidate?: SortOrder;
  jobPositionId?: SortOrder;
};
