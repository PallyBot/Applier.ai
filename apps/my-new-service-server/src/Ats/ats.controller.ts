import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AtsService } from "./ats.service";

@swagger.ApiTags("ats")
@common.Controller("ats")
export class AtsController {
  constructor(protected readonly service: AtsService) {}
}
