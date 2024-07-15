import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type MessageUpdateManyWithoutInteractionsInput = {
  connect?: Array<MessageWhereUniqueInput>;
  disconnect?: Array<MessageWhereUniqueInput>;
  set?: Array<MessageWhereUniqueInput>;
};
