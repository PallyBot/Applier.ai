import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RankingAlgorithmService } from "./rankingAlgorithm.service";
import { RankingAlgorithmControllerBase } from "./base/rankingAlgorithm.controller.base";

@swagger.ApiTags("rankingAlgorithms")
@common.Controller("rankingAlgorithms")
export class RankingAlgorithmController extends RankingAlgorithmControllerBase {
  constructor(protected readonly service: RankingAlgorithmService) {
    super(service);
  }
}
