import * as graphql from "@nestjs/graphql";
import { CreateApplicationInput } from "../application/CreateApplicationInput";
import { ApplicationOutput } from "../application/ApplicationOutput";
import { ApplicationService } from "./application.service";

export class ApplicationResolver {
  constructor(protected readonly service: ApplicationService) {}

  @graphql.Mutation(() => ApplicationOutput)
  async CreateApplication(
    @graphql.Args()
    args: CreateApplicationInput
  ): Promise<ApplicationOutput> {
    return this.service.CreateApplication(args);
  }

  @graphql.Query(() => [ApplicationOutput])
  async ListApplications(
    @graphql.Args()
    args: string
  ): Promise<ApplicationOutput[]> {
    return this.service.ListApplications(args);
  }
}
