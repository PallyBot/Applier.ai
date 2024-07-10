import { Module } from "@nestjs/common";
import { CandidateScoreModuleBase } from "./base/candidateScore.module.base";
import { CandidateScoreService } from "./candidateScore.service";
import { CandidateScoreController } from "./candidateScore.controller";
import { CandidateScoreResolver } from "./candidateScore.resolver";

@Module({
  imports: [CandidateScoreModuleBase],
  controllers: [CandidateScoreController],
  providers: [CandidateScoreService, CandidateScoreResolver],
  exports: [CandidateScoreService],
})
export class CandidateScoreModule {}
