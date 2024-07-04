import * as graphql from "@nestjs/graphql";
import { RecruiterResolverBase } from "./base/recruiter.resolver.base";
import { Recruiter } from "./base/Recruiter";
import { RecruiterService } from "./recruiter.service";

@graphql.Resolver(() => Recruiter)
export class RecruiterResolver extends RecruiterResolverBase {
  constructor(protected readonly service: RecruiterService) {
    super(service);
  }
}
