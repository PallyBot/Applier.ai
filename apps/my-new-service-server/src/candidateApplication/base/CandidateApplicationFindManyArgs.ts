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
import { CandidateApplicationWhereInput } from "./CandidateApplicationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CandidateApplicationOrderByInput } from "./CandidateApplicationOrderByInput";

@ArgsType()
class CandidateApplicationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CandidateApplicationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CandidateApplicationWhereInput, { nullable: true })
  @Type(() => CandidateApplicationWhereInput)
  where?: CandidateApplicationWhereInput;

  @ApiProperty({
    required: false,
    type: [CandidateApplicationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CandidateApplicationOrderByInput], { nullable: true })
  @Type(() => CandidateApplicationOrderByInput)
  orderBy?: Array<CandidateApplicationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CandidateApplicationFindManyArgs as CandidateApplicationFindManyArgs };
