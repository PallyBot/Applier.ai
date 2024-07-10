import * as graphql from "@nestjs/graphql";
import { CandidateRankingService } from "./candidateranking.service";

export class CandidateRankingResolver {
  constructor(protected readonly service: CandidateRankingService) {}
}
