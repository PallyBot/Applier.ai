import { SortOrder } from "../../util/SortOrder";

export type AttachmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fileUrl?: SortOrder;
  fileType?: SortOrder;
  jobRequirementId?: SortOrder;
};
