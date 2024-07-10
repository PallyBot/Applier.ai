import { Module } from "@nestjs/common";
import { JobRequirementModuleBase } from "./base/jobRequirement.module.base";
import { JobRequirementService } from "./jobRequirement.service";
import { JobRequirementController } from "./jobRequirement.controller";
import { JobRequirementResolver } from "./jobRequirement.resolver";

@Module({
  imports: [JobRequirementModuleBase],
  controllers: [JobRequirementController],
  providers: [JobRequirementService, JobRequirementResolver],
  exports: [JobRequirementService],
})
export class JobRequirementModule {}
