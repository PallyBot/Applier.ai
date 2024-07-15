import { SortOrder } from "../../util/SortOrder";

export type JobPositionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
};
