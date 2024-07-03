/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Recruiter as PrismaRecruiter } from "@prisma/client";

export class RecruiterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RecruiterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.recruiter.count(args);
  }

  async recruiters(
    args: Prisma.RecruiterFindManyArgs
  ): Promise<PrismaRecruiter[]> {
    return this.prisma.recruiter.findMany(args);
  }
  async recruiter(
    args: Prisma.RecruiterFindUniqueArgs
  ): Promise<PrismaRecruiter | null> {
    return this.prisma.recruiter.findUnique(args);
  }
  async createRecruiter(
    args: Prisma.RecruiterCreateArgs
  ): Promise<PrismaRecruiter> {
    return this.prisma.recruiter.create(args);
  }
  async updateRecruiter(
    args: Prisma.RecruiterUpdateArgs
  ): Promise<PrismaRecruiter> {
    return this.prisma.recruiter.update(args);
  }
  async deleteRecruiter(
    args: Prisma.RecruiterDeleteArgs
  ): Promise<PrismaRecruiter> {
    return this.prisma.recruiter.delete(args);
  }
}
