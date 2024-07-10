import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateScoreService } from "./candidateScore.service";
import { CandidateScoreControllerBase } from "./base/candidateScore.controller.base";

@swagger.ApiTags("candidateScores")
@common.Controller("candidateScores")
export class CandidateScoreController extends CandidateScoreControllerBase {
  constructor(protected readonly service: CandidateScoreService) {
    super(service);
  }
}
