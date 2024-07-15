import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserManagementService } from "./usermanagement.service";
import { UserRegistrationInput } from "../userManagement/UserRegistrationInput";
import { UserResponse } from "../userManagement/UserResponse";

@swagger.ApiTags("userManagements")
@common.Controller("userManagements")
export class UserManagementController {
  constructor(protected readonly service: UserManagementService) {}

  @common.Post("/signup")
  @swagger.ApiOkResponse({
    type: UserResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UserSignup(
    @common.Body()
    body: UserRegistrationInput
  ): Promise<UserResponse> {
        return this.service.UserSignup(body);
      }
}
