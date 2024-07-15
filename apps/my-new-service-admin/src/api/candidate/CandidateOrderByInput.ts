import { SortOrder } from "../../util/SortOrder";

export type CandidateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  email?: SortOrder;
  resume?: SortOrder;
  lastName?: SortOrder;
  skills?: SortOrder;
  domainExpertise?: SortOrder;
  yearsOfExperience?: SortOrder;
};
