import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobPositionServiceBase } from "./base/jobPosition.service.base";

@Injectable()
export class JobPositionService extends JobPositionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
