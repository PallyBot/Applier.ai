import { Module } from "@nestjs/common";
import { UserInteractionService } from "./userinteraction.service";
import { UserInteractionController } from "./userinteraction.controller";
import { UserInteractionResolver } from "./userinteraction.resolver";

@Module({
  controllers: [UserInteractionController],
  providers: [UserInteractionService, UserInteractionResolver],
  exports: [UserInteractionService],
})
export class UserInteractionModule {}
