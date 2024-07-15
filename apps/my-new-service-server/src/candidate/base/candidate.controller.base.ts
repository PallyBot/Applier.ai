/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CandidateService } from "../candidate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CandidateCreateInput } from "./CandidateCreateInput";
import { Candidate } from "./Candidate";
import { CandidateFindManyArgs } from "./CandidateFindManyArgs";
import { CandidateWhereUniqueInput } from "./CandidateWhereUniqueInput";
import { CandidateUpdateInput } from "./CandidateUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CandidateControllerBase {
  constructor(
    protected readonly service: CandidateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Candidate })
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CandidateCreateInput,
  })
  async createCandidate(
    @common.Body() data: CandidateCreateInput
  ): Promise<Candidate> {
    return await this.service.createCandidate({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        email: true,
        resume: true,
        lastName: true,
        skills: true,
        domainExpertise: true,
        yearsOfExperience: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Candidate] })
  @ApiNestedQuery(CandidateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async candidates(@common.Req() request: Request): Promise<Candidate[]> {
    const args = plainToClass(CandidateFindManyArgs, request.query);
    return this.service.candidates({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        email: true,
        resume: true,
        lastName: true,
        skills: true,
        domainExpertise: true,
        yearsOfExperience: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Candidate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async candidate(
    @common.Param() params: CandidateWhereUniqueInput
  ): Promise<Candidate | null> {
    const result = await this.service.candidate({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        email: true,
        resume: true,
        lastName: true,
        skills: true,
        domainExpertise: true,
        yearsOfExperience: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Candidate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CandidateUpdateInput,
  })
  async updateCandidate(
    @common.Param() params: CandidateWhereUniqueInput,
    @common.Body() data: CandidateUpdateInput
  ): Promise<Candidate | null> {
    try {
      return await this.service.updateCandidate({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          email: true,
          resume: true,
          lastName: true,
          skills: true,
          domainExpertise: true,
          yearsOfExperience: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Candidate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCandidate(
    @common.Param() params: CandidateWhereUniqueInput
  ): Promise<Candidate | null> {
    try {
      return await this.service.deleteCandidate({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          email: true,
          resume: true,
          lastName: true,
          skills: true,
          domainExpertise: true,
          yearsOfExperience: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
