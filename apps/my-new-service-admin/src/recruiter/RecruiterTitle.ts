import { Recruiter as TRecruiter } from "../api/recruiter/Recruiter";

export const RECRUITER_TITLE_FIELD = "firstName";

export const RecruiterTitle = (record: TRecruiter): string => {
  return record.firstName?.toString() || String(record.id);
};
