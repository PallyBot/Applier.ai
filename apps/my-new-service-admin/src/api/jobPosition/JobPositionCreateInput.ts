import { InterviewCreateNestedManyWithoutJobPositionsInput } from "./InterviewCreateNestedManyWithoutJobPositionsInput";

export type JobPositionCreateInput = {
  description?: string | null;
  interviews?: InterviewCreateNestedManyWithoutJobPositionsInput;
  status?: "Option1" | null;
  title?: string | null;
};
