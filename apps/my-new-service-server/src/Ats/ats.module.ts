import { Module } from "@nestjs/common";
import { AtsService } from "./ats.service";
import { AtsController } from "./ats.controller";
import { AtsResolver } from "./ats.resolver";

@Module({
  controllers: [AtsController],
  providers: [AtsService, AtsResolver],
  exports: [AtsService],
})
export class AtsModule {}
