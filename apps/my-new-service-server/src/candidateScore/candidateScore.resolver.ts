import * as graphql from "@nestjs/graphql";
import { CandidateScoreResolverBase } from "./base/candidateScore.resolver.base";
import { CandidateScore } from "./base/CandidateScore";
import { CandidateScoreService } from "./candidateScore.service";

@graphql.Resolver(() => CandidateScore)
export class CandidateScoreResolver extends CandidateScoreResolverBase {
  constructor(protected readonly service: CandidateScoreService) {
    super(service);
  }
}
