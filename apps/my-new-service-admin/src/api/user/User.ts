import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Notification } from "../notification/Notification";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  orders?: Array<Order>;
  notifications?: Array<Notification>;
};
