import { Injectable } from "@nestjs/common";
import { UserRegistrationInput } from "../userManagement/UserRegistrationInput";
import { UserResponse } from "../userManagement/UserResponse";

@Injectable()
export class UserManagementService {
  constructor() {}
  async UserSignup(args: UserRegistrationInput): Promise<UserResponse> {
    throw new Error("Not implemented");
  }
}
