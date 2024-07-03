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
import { InterviewService } from "../interview.service";
import { InterviewCreateInput } from "./InterviewCreateInput";
import { Interview } from "./Interview";
import { InterviewFindManyArgs } from "./InterviewFindManyArgs";
import { InterviewWhereUniqueInput } from "./InterviewWhereUniqueInput";
import { InterviewUpdateInput } from "./InterviewUpdateInput";

export class InterviewControllerBase {
  constructor(protected readonly service: InterviewService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Interview })
  async createInterview(
    @common.Body() data: InterviewCreateInput
  ): Promise<Interview> {
    return await this.service.createInterview({
      data: {
        ...data,

        candidate: data.candidate
          ? {
              connect: data.candidate,
            }
          : undefined,

        jobPosition: data.jobPosition
          ? {
              connect: data.jobPosition,
            }
          : undefined,
      },
      select: {
        candidate: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        feedback: true,
        id: true,
        interviewer: true,

        jobPosition: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Interview] })
  @ApiNestedQuery(InterviewFindManyArgs)
  async interviews(@common.Req() request: Request): Promise<Interview[]> {
    const args = plainToClass(InterviewFindManyArgs, request.query);
    return this.service.interviews({
      ...args,
      select: {
        candidate: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        feedback: true,
        id: true,
        interviewer: true,

        jobPosition: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Interview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async interview(
    @common.Param() params: InterviewWhereUniqueInput
  ): Promise<Interview | null> {
    const result = await this.service.interview({
      where: params,
      select: {
        candidate: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        feedback: true,
        id: true,
        interviewer: true,

        jobPosition: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Interview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInterview(
    @common.Param() params: InterviewWhereUniqueInput,
    @common.Body() data: InterviewUpdateInput
  ): Promise<Interview | null> {
    try {
      return await this.service.updateInterview({
        where: params,
        data: {
          ...data,

          candidate: data.candidate
            ? {
                connect: data.candidate,
              }
            : undefined,

          jobPosition: data.jobPosition
            ? {
                connect: data.jobPosition,
              }
            : undefined,
        },
        select: {
          candidate: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          date: true,
          feedback: true,
          id: true,
          interviewer: true,

          jobPosition: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Interview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInterview(
    @common.Param() params: InterviewWhereUniqueInput
  ): Promise<Interview | null> {
    try {
      return await this.service.deleteInterview({
        where: params,
        select: {
          candidate: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          date: true,
          feedback: true,
          id: true,
          interviewer: true,

          jobPosition: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
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
