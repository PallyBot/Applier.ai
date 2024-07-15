import { JobRequirement as TJobRequirement } from "../api/jobRequirement/JobRequirement";

export const JOBREQUIREMENT_TITLE_FIELD = "title";

export const JobRequirementTitle = (record: TJobRequirement): string => {
  return record.title?.toString() || String(record.id);
};
