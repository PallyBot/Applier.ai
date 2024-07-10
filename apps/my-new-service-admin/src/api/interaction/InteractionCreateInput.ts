import { VoiceRecordingCreateNestedManyWithoutInteractionsInput } from "./VoiceRecordingCreateNestedManyWithoutInteractionsInput";
import { MessageCreateNestedManyWithoutInteractionsInput } from "./MessageCreateNestedManyWithoutInteractionsInput";

export type InteractionCreateInput = {
  interactionType?: string | null;
  timestamp?: Date | null;
  voiceRecordings?: VoiceRecordingCreateNestedManyWithoutInteractionsInput;
  messages?: MessageCreateNestedManyWithoutInteractionsInput;
};
