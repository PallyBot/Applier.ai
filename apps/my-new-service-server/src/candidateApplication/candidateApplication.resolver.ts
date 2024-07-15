import * as graphql from "@nestjs/graphql";
import { CandidateApplicationResolverBase } from "./base/candidateApplication.resolver.base";
import { CandidateApplication } from "./base/CandidateApplication";
import { CandidateApplicationService } from "./candidateApplication.service";

@graphql.Resolver(() => CandidateApplication)
export class CandidateApplicationResolver extends CandidateApplicationResolverBase {
  constructor(protected readonly service: CandidateApplicationService) {
    super(service);
  }
}
