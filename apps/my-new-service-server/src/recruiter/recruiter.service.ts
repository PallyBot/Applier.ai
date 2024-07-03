import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecruiterServiceBase } from "./base/recruiter.service.base";

@Injectable()
export class RecruiterService extends RecruiterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
