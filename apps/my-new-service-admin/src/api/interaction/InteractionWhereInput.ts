import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VoiceRecordingListRelationFilter } from "../voiceRecording/VoiceRecordingListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type InteractionWhereInput = {
  id?: StringFilter;
  interactionType?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  voiceRecordings?: VoiceRecordingListRelationFilter;
  messages?: MessageListRelationFilter;
};
