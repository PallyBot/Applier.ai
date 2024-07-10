import { InteractionWhereUniqueInput } from "../interaction/InteractionWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  senderId?: string | null;
  interaction?: InteractionWhereUniqueInput | null;
};
