import { SortOrder } from "../../util/SortOrder";

export type JobRequirementOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  createdBy?: SortOrder;
};
