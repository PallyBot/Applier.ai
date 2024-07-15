import { Module } from "@nestjs/common";
import { CandidateRankingService } from "./candidateranking.service";
import { CandidateRankingController } from "./candidateranking.controller";
import { CandidateRankingResolver } from "./candidateranking.resolver";

@Module({
  controllers: [CandidateRankingController],
  providers: [CandidateRankingService, CandidateRankingResolver],
  exports: [CandidateRankingService],
})
export class CandidateRankingModule {}
