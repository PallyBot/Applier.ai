import { Interaction } from "../interaction/Interaction";

export type VoiceRecording = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileUrl: string | null;
  duration: number | null;
  interaction?: Interaction | null;
};
