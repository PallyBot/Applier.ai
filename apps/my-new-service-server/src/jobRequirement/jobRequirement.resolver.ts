import * as graphql from "@nestjs/graphql";
import { JobRequirementResolverBase } from "./base/jobRequirement.resolver.base";
import { JobRequirement } from "./base/JobRequirement";
import { JobRequirementService } from "./jobRequirement.service";

@graphql.Resolver(() => JobRequirement)
export class JobRequirementResolver extends JobRequirementResolverBase {
  constructor(protected readonly service: JobRequirementService) {
    super(service);
  }
}
