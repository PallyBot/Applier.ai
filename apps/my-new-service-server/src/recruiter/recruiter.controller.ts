import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecruiterService } from "./recruiter.service";
import { RecruiterControllerBase } from "./base/recruiter.controller.base";

@swagger.ApiTags("recruiters")
@common.Controller("recruiters")
export class RecruiterController extends RecruiterControllerBase {
  constructor(protected readonly service: RecruiterService) {
    super(service);
  }
}
