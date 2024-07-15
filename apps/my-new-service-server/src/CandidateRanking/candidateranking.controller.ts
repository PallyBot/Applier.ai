import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CandidateRankingService } from "./candidateranking.service";

@swagger.ApiTags("candidateRankings")
@common.Controller("candidateRankings")
export class CandidateRankingController {
  constructor(protected readonly service: CandidateRankingService) {}
}
