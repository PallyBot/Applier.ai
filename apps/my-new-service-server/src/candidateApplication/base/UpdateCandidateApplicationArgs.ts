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
import { CandidateApplicationWhereUniqueInput } from "./CandidateApplicationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CandidateApplicationUpdateInput } from "./CandidateApplicationUpdateInput";

@ArgsType()
class UpdateCandidateApplicationArgs {
  @ApiProperty({
    required: true,
    type: () => CandidateApplicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CandidateApplicationWhereUniqueInput)
  @Field(() => CandidateApplicationWhereUniqueInput, { nullable: false })
  where!: CandidateApplicationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CandidateApplicationUpdateInput,
  })
  @ValidateNested()
  @Type(() => CandidateApplicationUpdateInput)
  @Field(() => CandidateApplicationUpdateInput, { nullable: false })
  data!: CandidateApplicationUpdateInput;
}

export { UpdateCandidateApplicationArgs as UpdateCandidateApplicationArgs };
