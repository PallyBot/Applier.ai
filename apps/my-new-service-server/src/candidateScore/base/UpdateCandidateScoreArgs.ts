/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CandidateScoreWhereUniqueInput } from "./CandidateScoreWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CandidateScoreUpdateInput } from "./CandidateScoreUpdateInput";

@ArgsType()
class UpdateCandidateScoreArgs {
  @ApiProperty({
    required: true,
    type: () => CandidateScoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CandidateScoreWhereUniqueInput)
  @Field(() => CandidateScoreWhereUniqueInput, { nullable: false })
  where!: CandidateScoreWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CandidateScoreUpdateInput,
  })
  @ValidateNested()
  @Type(() => CandidateScoreUpdateInput)
  @Field(() => CandidateScoreUpdateInput, { nullable: false })
  data!: CandidateScoreUpdateInput;
}

export { UpdateCandidateScoreArgs as UpdateCandidateScoreArgs };
