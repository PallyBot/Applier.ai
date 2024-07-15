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
import { RankingAlgorithmWhereInput } from "./RankingAlgorithmWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RankingAlgorithmListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RankingAlgorithmWhereInput,
  })
  @ValidateNested()
  @Type(() => RankingAlgorithmWhereInput)
  @IsOptional()
  @Field(() => RankingAlgorithmWhereInput, {
    nullable: true,
  })
  every?: RankingAlgorithmWhereInput;

  @ApiProperty({
    required: false,
    type: () => RankingAlgorithmWhereInput,
  })
  @ValidateNested()
  @Type(() => RankingAlgorithmWhereInput)
  @IsOptional()
  @Field(() => RankingAlgorithmWhereInput, {
    nullable: true,
  })
  some?: RankingAlgorithmWhereInput;

  @ApiProperty({
    required: false,
    type: () => RankingAlgorithmWhereInput,
  })
  @ValidateNested()
  @Type(() => RankingAlgorithmWhereInput)
  @IsOptional()
  @Field(() => RankingAlgorithmWhereInput, {
    nullable: true,
  })
  none?: RankingAlgorithmWhereInput;
}
export { RankingAlgorithmListRelationFilter as RankingAlgorithmListRelationFilter };
