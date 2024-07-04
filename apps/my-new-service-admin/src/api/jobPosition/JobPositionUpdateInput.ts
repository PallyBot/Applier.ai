import { InterviewUpdateManyWithoutJobPositionsInput } from "./InterviewUpdateManyWithoutJobPositionsInput";

export type JobPositionUpdateInput = {
  description?: string | null;
  interviews?: InterviewUpdateManyWithoutJobPositionsInput;
  status?: "Option1" | null;
  title?: string | null;
};
