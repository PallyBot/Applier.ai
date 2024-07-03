import { RecruiterWhereInput } from "./RecruiterWhereInput";
import { RecruiterOrderByInput } from "./RecruiterOrderByInput";

export type RecruiterFindManyArgs = {
  where?: RecruiterWhereInput;
  orderBy?: Array<RecruiterOrderByInput>;
  skip?: number;
  take?: number;
};
