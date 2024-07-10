import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateApplicationService } from "./candidateApplication.service";
import { CandidateApplicationControllerBase } from "./base/candidateApplication.controller.base";

@swagger.ApiTags("candidateApplications")
@common.Controller("candidateApplications")
export class CandidateApplicationController extends CandidateApplicationControllerBase {
  constructor(protected readonly service: CandidateApplicationService) {
    super(service);
  }
}
