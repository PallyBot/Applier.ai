import { Module } from "@nestjs/common";
import { RankingAlgorithmModuleBase } from "./base/rankingAlgorithm.module.base";
import { RankingAlgorithmService } from "./rankingAlgorithm.service";
import { RankingAlgorithmController } from "./rankingAlgorithm.controller";
import { RankingAlgorithmResolver } from "./rankingAlgorithm.resolver";

@Module({
  imports: [RankingAlgorithmModuleBase],
  controllers: [RankingAlgorithmController],
  providers: [RankingAlgorithmService, RankingAlgorithmResolver],
  exports: [RankingAlgorithmService],
})
export class RankingAlgorithmModule {}
