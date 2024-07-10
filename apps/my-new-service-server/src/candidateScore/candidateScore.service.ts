import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateScoreServiceBase } from "./base/candidateScore.service.base";

@Injectable()
export class CandidateScoreService extends CandidateScoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
