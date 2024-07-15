import * as graphql from "@nestjs/graphql";
import { UserInteractionService } from "./userinteraction.service";

export class UserInteractionResolver {
  constructor(protected readonly service: UserInteractionService) {}
}
