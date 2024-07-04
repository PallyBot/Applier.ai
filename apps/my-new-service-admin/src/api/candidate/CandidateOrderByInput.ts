import { SortOrder } from "../../util/SortOrder";

export type CandidateOrderByInput = {
  createdAt?: SortOrder;
  domainExpertise?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  resume?: SortOrder;
  skills?: SortOrder;
  updatedAt?: SortOrder;
  yearsOfExperience?: SortOrder;
};
