import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InteractionWhereUniqueInput } from "../interaction/InteractionWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  senderId?: StringNullableFilter;
  interaction?: InteractionWhereUniqueInput;
};
