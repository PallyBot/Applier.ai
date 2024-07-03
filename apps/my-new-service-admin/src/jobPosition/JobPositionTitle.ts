import { JobPosition as TJobPosition } from "../api/jobPosition/JobPosition";

export const JOBPOSITION_TITLE_FIELD = "title";

export const JobPositionTitle = (record: TJobPosition): string => {
  return record.title?.toString() || String(record.id);
};
