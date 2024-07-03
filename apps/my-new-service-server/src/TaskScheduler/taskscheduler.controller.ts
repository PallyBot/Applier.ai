import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TaskSchedulerService } from "./taskscheduler.service";

@swagger.ApiTags("taskSchedulers")
@common.Controller("taskSchedulers")
export class TaskSchedulerController {
  constructor(protected readonly service: TaskSchedulerService) {}
}
