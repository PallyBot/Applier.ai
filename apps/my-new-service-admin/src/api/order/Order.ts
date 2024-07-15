import { User } from "../user/User";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalAmount: number | null;
  status?: "Option1" | null;
  user?: User | null;
};
