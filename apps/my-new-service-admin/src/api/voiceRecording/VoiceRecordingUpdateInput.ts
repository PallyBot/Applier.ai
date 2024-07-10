import { InteractionWhereUniqueInput } from "../interaction/InteractionWhereUniqueInput";

export type VoiceRecordingUpdateInput = {
  fileUrl?: string | null;
  duration?: number | null;
  interaction?: InteractionWhereUniqueInput | null;
};
