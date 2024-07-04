import { Module } from "@nestjs/common";
import { RecruiterModuleBase } from "./base/recruiter.module.base";
import { RecruiterService } from "./recruiter.service";
import { RecruiterController } from "./recruiter.controller";
import { RecruiterResolver } from "./recruiter.resolver";

@Module({
  imports: [RecruiterModuleBase],
  controllers: [RecruiterController],
  providers: [RecruiterService, RecruiterResolver],
  exports: [RecruiterService],
})
export class RecruiterModule {}
