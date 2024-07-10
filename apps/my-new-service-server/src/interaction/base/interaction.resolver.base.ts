/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Interaction } from "./Interaction";
import { InteractionCountArgs } from "./InteractionCountArgs";
import { InteractionFindManyArgs } from "./InteractionFindManyArgs";
import { InteractionFindUniqueArgs } from "./InteractionFindUniqueArgs";
import { CreateInteractionArgs } from "./CreateInteractionArgs";
import { UpdateInteractionArgs } from "./UpdateInteractionArgs";
import { DeleteInteractionArgs } from "./DeleteInteractionArgs";
import { VoiceRecordingFindManyArgs } from "../../voiceRecording/base/VoiceRecordingFindManyArgs";
import { VoiceRecording } from "../../voiceRecording/base/VoiceRecording";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { InteractionService } from "../interaction.service";
@graphql.Resolver(() => Interaction)
export class InteractionResolverBase {
  constructor(protected readonly service: InteractionService) {}

  async _interactionsMeta(
    @graphql.Args() args: InteractionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Interaction])
  async interactions(
    @graphql.Args() args: InteractionFindManyArgs
  ): Promise<Interaction[]> {
    return this.service.interactions(args);
  }

  @graphql.Query(() => Interaction, { nullable: true })
  async interaction(
    @graphql.Args() args: InteractionFindUniqueArgs
  ): Promise<Interaction | null> {
    const result = await this.service.interaction(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Interaction)
  async createInteraction(
    @graphql.Args() args: CreateInteractionArgs
  ): Promise<Interaction> {
    return await this.service.createInteraction({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Interaction)
  async updateInteraction(
    @graphql.Args() args: UpdateInteractionArgs
  ): Promise<Interaction | null> {
    try {
      return await this.service.updateInteraction({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Interaction)
  async deleteInteraction(
    @graphql.Args() args: DeleteInteractionArgs
  ): Promise<Interaction | null> {
    try {
      return await this.service.deleteInteraction(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [VoiceRecording], { name: "voiceRecordings" })
  async findVoiceRecordings(
    @graphql.Parent() parent: Interaction,
    @graphql.Args() args: VoiceRecordingFindManyArgs
  ): Promise<VoiceRecording[]> {
    const results = await this.service.findVoiceRecordings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Message], { name: "messages" })
  async findMessages(
    @graphql.Parent() parent: Interaction,
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    const results = await this.service.findMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
