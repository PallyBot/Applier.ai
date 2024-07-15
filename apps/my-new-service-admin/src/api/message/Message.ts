import { Interaction } from "../interaction/Interaction";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  senderId: string | null;
  interaction?: Interaction | null;
};
