import { JobRequirementWhereInput } from "./JobRequirementWhereInput";
import { JobRequirementOrderByInput } from "./JobRequirementOrderByInput";

export type JobRequirementFindManyArgs = {
  where?: JobRequirementWhereInput;
  orderBy?: Array<JobRequirementOrderByInput>;
  skip?: number;
  take?: number;
};
