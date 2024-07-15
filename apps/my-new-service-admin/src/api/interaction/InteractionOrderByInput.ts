import { SortOrder } from "../../util/SortOrder";

export type InteractionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  interactionType?: SortOrder;
  timestamp?: SortOrder;
};
