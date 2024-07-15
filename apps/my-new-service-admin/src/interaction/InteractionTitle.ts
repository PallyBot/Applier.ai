import { Interaction as TInteraction } from "../api/interaction/Interaction";

export const INTERACTION_TITLE_FIELD = "interactionType";

export const InteractionTitle = (record: TInteraction): string => {
  return record.interactionType?.toString() || String(record.id);
};
