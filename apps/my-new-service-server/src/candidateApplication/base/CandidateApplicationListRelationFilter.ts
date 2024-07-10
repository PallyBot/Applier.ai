/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CandidateApplicationWhereInput } from "./CandidateApplicationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CandidateApplicationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CandidateApplicationWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateApplicationWhereInput)
  @IsOptional()
  @Field(() => CandidateApplicationWhereInput, {
    nullable: true,
  })
  every?: CandidateApplicationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateApplicationWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateApplicationWhereInput)
  @IsOptional()
  @Field(() => CandidateApplicationWhereInput, {
    nullable: true,
  })
  some?: CandidateApplicationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateApplicationWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateApplicationWhereInput)
  @IsOptional()
  @Field(() => CandidateApplicationWhereInput, {
    nullable: true,
  })
  none?: CandidateApplicationWhereInput;
}
export { CandidateApplicationListRelationFilter as CandidateApplicationListRelationFilter };
