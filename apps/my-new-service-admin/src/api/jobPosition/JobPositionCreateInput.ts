import { InterviewCreateNestedManyWithoutJobPositionsInput } from "./InterviewCreateNestedManyWithoutJobPositionsInput";

export type JobPositionCreateInput = {
  title?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  interviews?: InterviewCreateNestedManyWithoutJobPositionsInput;
};
