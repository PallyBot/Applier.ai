import { VoiceRecording } from "../voiceRecording/VoiceRecording";
import { Message } from "../message/Message";

export type Interaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  interactionType: string | null;
  timestamp: Date | null;
  voiceRecordings?: Array<VoiceRecording>;
  messages?: Array<Message>;
};
