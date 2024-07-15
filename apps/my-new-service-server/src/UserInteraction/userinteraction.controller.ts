import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserInteractionService } from "./userinteraction.service";

@swagger.ApiTags("userInteractions")
@common.Controller("userInteractions")
export class UserInteractionController {
  constructor(protected readonly service: UserInteractionService) {}
}
