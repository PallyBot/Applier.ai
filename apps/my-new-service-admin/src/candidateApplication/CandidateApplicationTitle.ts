import { CandidateApplication as TCandidateApplication } from "../api/candidateApplication/CandidateApplication";

export const CANDIDATEAPPLICATION_TITLE_FIELD = "candidateId";

export const CandidateApplicationTitle = (
  record: TCandidateApplication
): string => {
  return record.candidateId?.toString() || String(record.id);
};
