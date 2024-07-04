import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobPositionService } from "./jobPosition.service";
import { JobPositionControllerBase } from "./base/jobPosition.controller.base";

@swagger.ApiTags("jobPositions")
@common.Controller("jobPositions")
export class JobPositionController extends JobPositionControllerBase {
  constructor(protected readonly service: JobPositionService) {
    super(service);
  }
}
