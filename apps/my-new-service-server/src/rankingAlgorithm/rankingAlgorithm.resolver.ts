import * as graphql from "@nestjs/graphql";
import { RankingAlgorithmResolverBase } from "./base/rankingAlgorithm.resolver.base";
import { RankingAlgorithm } from "./base/RankingAlgorithm";
import { RankingAlgorithmService } from "./rankingAlgorithm.service";

@graphql.Resolver(() => RankingAlgorithm)
export class RankingAlgorithmResolver extends RankingAlgorithmResolverBase {
  constructor(protected readonly service: RankingAlgorithmService) {
    super(service);
  }
}
