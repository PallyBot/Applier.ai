import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobRequirementServiceBase } from "./base/jobRequirement.service.base";

@Injectable()
export class JobRequirementService extends JobRequirementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
