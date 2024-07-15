import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { InteractionWhereUniqueInput } from "../interaction/InteractionWhereUniqueInput";

export type VoiceRecordingWhereInput = {
  id?: StringFilter;
  fileUrl?: StringNullableFilter;
  duration?: IntNullableFilter;
  interaction?: InteractionWhereUniqueInput;
};
