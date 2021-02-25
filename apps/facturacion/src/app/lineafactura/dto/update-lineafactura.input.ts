import { CreateLineafacturaInput } from './create-lineafactura.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLineafacturaInput extends PartialType(CreateLineafacturaInput) {
  @Field(() => Int)
  id: number;
}
