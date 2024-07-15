import { VoiceRecordingUpdateManyWithoutInteractionsInput } from "./VoiceRecordingUpdateManyWithoutInteractionsInput";
import { MessageUpdateManyWithoutInteractionsInput } from "./MessageUpdateManyWithoutInteractionsInput";

export type InteractionUpdateInput = {
  interactionType?: string | null;
  timestamp?: Date | null;
  voiceRecordings?: VoiceRecordingUpdateManyWithoutInteractionsInput;
  messages?: MessageUpdateManyWithoutInteractionsInput;
};
