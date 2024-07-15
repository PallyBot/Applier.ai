import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  totalAmount?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
