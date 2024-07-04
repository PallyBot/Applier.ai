import { JobPositionWhereInput } from "./JobPositionWhereInput";
import { JobPositionOrderByInput } from "./JobPositionOrderByInput";

export type JobPositionFindManyArgs = {
  where?: JobPositionWhereInput;
  orderBy?: Array<JobPositionOrderByInput>;
  skip?: number;
  take?: number;
};
