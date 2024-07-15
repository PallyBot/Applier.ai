import { CandidateScore as TCandidateScore } from "../api/candidateScore/CandidateScore";

export const CANDIDATESCORE_TITLE_FIELD = "candidateId";

export const CandidateScoreTitle = (record: TCandidateScore): string => {
  return record.candidateId?.toString() || String(record.id);
};
