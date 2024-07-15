import { Module } from "@nestjs/common";
import { CandidateApplicationModuleBase } from "./base/candidateApplication.module.base";
import { CandidateApplicationService } from "./candidateApplication.service";
import { CandidateApplicationController } from "./candidateApplication.controller";
import { CandidateApplicationResolver } from "./candidateApplication.resolver";

@Module({
  imports: [CandidateApplicationModuleBase],
  controllers: [CandidateApplicationController],
  providers: [CandidateApplicationService, CandidateApplicationResolver],
  exports: [CandidateApplicationService],
})
export class CandidateApplicationModule {}
