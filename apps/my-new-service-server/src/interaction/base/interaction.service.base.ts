/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Interaction as PrismaInteraction,
  VoiceRecording as PrismaVoiceRecording,
  Message as PrismaMessage,
} from "@prisma/client";

export class InteractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InteractionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.interaction.count(args);
  }

  async interactions(
    args: Prisma.InteractionFindManyArgs
  ): Promise<PrismaInteraction[]> {
    return this.prisma.interaction.findMany(args);
  }
  async interaction(
    args: Prisma.InteractionFindUniqueArgs
  ): Promise<PrismaInteraction | null> {
    return this.prisma.interaction.findUnique(args);
  }
  async createInteraction(
    args: Prisma.InteractionCreateArgs
  ): Promise<PrismaInteraction> {
    return this.prisma.interaction.create(args);
  }
  async updateInteraction(
    args: Prisma.InteractionUpdateArgs
  ): Promise<PrismaInteraction> {
    return this.prisma.interaction.update(args);
  }
  async deleteInteraction(
    args: Prisma.InteractionDeleteArgs
  ): Promise<PrismaInteraction> {
    return this.prisma.interaction.delete(args);
  }

  async findVoiceRecordings(
    parentId: string,
    args: Prisma.VoiceRecordingFindManyArgs
  ): Promise<PrismaVoiceRecording[]> {
    return this.prisma.interaction
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .voiceRecordings(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<PrismaMessage[]> {
    return this.prisma.interaction
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .messages(args);
  }
}
