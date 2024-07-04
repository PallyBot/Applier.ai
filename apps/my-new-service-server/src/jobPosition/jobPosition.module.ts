import { Module } from "@nestjs/common";
import { JobPositionModuleBase } from "./base/jobPosition.module.base";
import { JobPositionService } from "./jobPosition.service";
import { JobPositionController } from "./jobPosition.controller";
import { JobPositionResolver } from "./jobPosition.resolver";

@Module({
  imports: [JobPositionModuleBase],
  controllers: [JobPositionController],
  providers: [JobPositionService, JobPositionResolver],
  exports: [JobPositionService],
})
export class JobPositionModule {}
