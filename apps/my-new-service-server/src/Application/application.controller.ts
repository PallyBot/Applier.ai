import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ApplicationService } from "./application.service";
import { ApplicationOutput } from "./ApplicationOutput";

@swagger.ApiTags("applications")
@common.Controller("applications")
export class ApplicationController {
  constructor(protected readonly service: ApplicationService) {}

  @common.Post("/applications")
  @swagger.ApiOkResponse({
    type: ApplicationOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateApplication(
    @common.Body()
    body: string
  ): Promise<ApplicationOutput> {
        return this.service.CreateApplication(body);
      }

  @common.Get("/applications")
  @swagger.ApiOkResponse({
    type: ApplicationOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListApplications(
    @common.Body()
    body: string
  ): Promise<ApplicationOutput[]> {
        return this.service.ListApplications(body);
      }
}
