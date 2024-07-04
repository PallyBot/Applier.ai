import { Injectable } from "@nestjs/common";
import { CreateApplicationInput } from "../application/CreateApplicationInput";
import { ApplicationOutput } from "../application/ApplicationOutput";

@Injectable()
export class ApplicationService {
  constructor() {}
  async CreateApplication(args: CreateApplicationInput): Promise<ApplicationOutput> {
    throw new Error("Not implemented");
  }
  async ListApplications(args: string): Promise<ApplicationOutput[]> {
    throw new Error("Not implemented");
  }
}
