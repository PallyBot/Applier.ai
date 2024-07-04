import { Module } from "@nestjs/common";
import { TaskSchedulerService } from "./taskscheduler.service";
import { TaskSchedulerController } from "./taskscheduler.controller";
import { TaskSchedulerResolver } from "./taskscheduler.resolver";

@Module({
  controllers: [TaskSchedulerController],
  providers: [TaskSchedulerService, TaskSchedulerResolver],
  exports: [TaskSchedulerService],
})
export class TaskSchedulerModule {}
