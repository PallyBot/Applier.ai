import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobRequirementService } from "./jobRequirement.service";
import { JobRequirementControllerBase } from "./base/jobRequirement.controller.base";

@swagger.ApiTags("jobRequirements")
@common.Controller("jobRequirements")
export class JobRequirementController extends JobRequirementControllerBase {
  constructor(protected readonly service: JobRequirementService) {
    super(service);
  }
}
