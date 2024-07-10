import { CandidateApplicationWhereInput } from "./CandidateApplicationWhereInput";
import { CandidateApplicationOrderByInput } from "./CandidateApplicationOrderByInput";

export type CandidateApplicationFindManyArgs = {
  where?: CandidateApplicationWhereInput;
  orderBy?: Array<CandidateApplicationOrderByInput>;
  skip?: number;
  take?: number;
};
