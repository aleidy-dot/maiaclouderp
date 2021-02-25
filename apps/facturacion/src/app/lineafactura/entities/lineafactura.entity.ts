import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Lineafactura {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
