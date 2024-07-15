import { InteractionWhereUniqueInput } from "../interaction/InteractionWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  senderId?: string | null;
  interaction?: InteractionWhereUniqueInput | null;
};
