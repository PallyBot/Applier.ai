import { InterviewUpdateManyWithoutJobPositionsInput } from "./InterviewUpdateManyWithoutJobPositionsInput";

export type JobPositionUpdateInput = {
  title?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  interviews?: InterviewUpdateManyWithoutJobPositionsInput;
};
