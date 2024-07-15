import * as graphql from "@nestjs/graphql";
import { AtsService } from "./ats.service";

export class AtsResolver {
  constructor(protected readonly service: AtsService) {}
}
