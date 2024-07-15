export type CandidateApplication = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  candidateId: string | null;
  jobId: string | null;
  status?: "Option1" | null;
};
