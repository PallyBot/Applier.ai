import { CandidateScoreWhereInput } from "./CandidateScoreWhereInput";
import { CandidateScoreOrderByInput } from "./CandidateScoreOrderByInput";

export type CandidateScoreFindManyArgs = {
  where?: CandidateScoreWhereInput;
  orderBy?: Array<CandidateScoreOrderByInput>;
  skip?: number;
  take?: number;
};
