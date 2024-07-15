import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateApplicationServiceBase } from "./base/candidateApplication.service.base";

@Injectable()
export class CandidateApplicationService extends CandidateApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
