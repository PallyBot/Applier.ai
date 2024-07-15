import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RankingAlgorithmServiceBase } from "./base/rankingAlgorithm.service.base";

@Injectable()
export class RankingAlgorithmService extends RankingAlgorithmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
