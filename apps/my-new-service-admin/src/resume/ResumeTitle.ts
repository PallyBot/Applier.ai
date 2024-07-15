import { Resume as TResume } from "../api/resume/Resume";

export const RESUME_TITLE_FIELD = "fileUrl";

export const ResumeTitle = (record: TResume): string => {
  return record.fileUrl?.toString() || String(record.id);
};
