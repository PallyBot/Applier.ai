import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  totalAmount?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
