import { SortOrder } from "../../util/SortOrder";

export type VoiceRecordingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fileUrl?: SortOrder;
  duration?: SortOrder;
  interactionId?: SortOrder;
};
