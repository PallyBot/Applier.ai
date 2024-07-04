import * as graphql from "@nestjs/graphql";
import { TaskSchedulerService } from "./taskscheduler.service";

export class TaskSchedulerResolver {
  constructor(protected readonly service: TaskSchedulerService) {}
}
