import * as graphql from "@nestjs/graphql";
import { UserRegistrationInput } from "../userManagement/UserRegistrationInput";
import { UserResponse } from "../userManagement/UserResponse";
import { UserManagementService } from "./usermanagement.service";

export class UserManagementResolver {
  constructor(protected readonly service: UserManagementService) {}

  @graphql.Mutation(() => UserResponse)
  async UserSignup(
    @graphql.Args()
    args: UserRegistrationInput
  ): Promise<UserResponse> {
    return this.service.UserSignup(args);
  }
}
