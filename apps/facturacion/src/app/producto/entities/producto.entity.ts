import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Producto {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
