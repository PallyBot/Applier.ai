import { InteractionWhereUniqueInput } from "../interaction/InteractionWhereUniqueInput";

export type VoiceRecordingCreateInput = {
  fileUrl?: string | null;
  duration?: number | null;
  interaction?: InteractionWhereUniqueInput | null;
};
