import * as graphql from "@nestjs/graphql";
import { JobPositionResolverBase } from "./base/jobPosition.resolver.base";
import { JobPosition } from "./base/JobPosition";
import { JobPositionService } from "./jobPosition.service";

@graphql.Resolver(() => JobPosition)
export class JobPositionResolver extends JobPositionResolverBase {
  constructor(protected readonly service: JobPositionService) {
    super(service);
  }
}
