import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLineafacturaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
