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
import { JobRequirementWhereInput } from "./JobRequirementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class JobRequirementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => JobRequirementWhereInput,
  })
  @ValidateNested()
  @Type(() => JobRequirementWhereInput)
  @IsOptional()
  @Field(() => JobRequirementWhereInput, {
    nullable: true,
  })
  every?: JobRequirementWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobRequirementWhereInput,
  })
  @ValidateNested()
  @Type(() => JobRequirementWhereInput)
  @IsOptional()
  @Field(() => JobRequirementWhereInput, {
    nullable: true,
  })
  some?: JobRequirementWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobRequirementWhereInput,
  })
  @ValidateNested()
  @Type(() => JobRequirementWhereInput)
  @IsOptional()
  @Field(() => JobRequirementWhereInput, {
    nullable: true,
  })
  none?: JobRequirementWhereInput;
}
export { JobRequirementListRelationFilter as JobRequirementListRelationFilter };
