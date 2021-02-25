import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LineafacturaService } from './lineafactura.service';
import { Lineafactura } from './entities/lineafactura.entity';
import { CreateLineafacturaInput } from './dto/create-lineafactura.input';
import { UpdateLineafacturaInput } from './dto/update-lineafactura.input';

@Resolver(() => Lineafactura)
export class LineafacturaResolver {
  constructor(private readonly lineafacturaService: LineafacturaService) {}

  @Mutation(() => Lineafactura)
  createLineafactura(@Args('createLineafacturaInput') createLineafacturaInput: CreateLineafacturaInput) {
    return this.lineafacturaService.create(createLineafacturaInput);
  }

  @Query(() => [Lineafactura], { name: 'lineafactura' })
  findAll() {
    return this.lineafacturaService.findAll();
  }

  @Query(() => Lineafactura, { name: 'lineafactura' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.lineafacturaService.findOne(id);
  }

  @Mutation(() => Lineafactura)
  updateLineafactura(@Args('updateLineafacturaInput') updateLineafacturaInput: UpdateLineafacturaInput) {
    return this.lineafacturaService.update(updateLineafacturaInput.id, updateLineafacturaInput);
  }

  @Mutation(() => Lineafactura)
  removeLineafactura(@Args('id', { type: () => Int }) id: number) {
    return this.lineafacturaService.remove(id);
  }
}
