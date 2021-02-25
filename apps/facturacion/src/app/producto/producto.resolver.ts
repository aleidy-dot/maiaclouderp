import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductoService } from './producto.service';
import { Producto } from './entities/producto.entity';
import { CreateProductoInput } from './dto/create-producto.input';
import { UpdateProductoInput } from './dto/update-producto.input';

@Resolver(() => Producto)
export class ProductoResolver {
  constructor(private readonly productoService: ProductoService) {}

  @Mutation(() => Producto)
  createProducto(@Args('createProductoInput') createProductoInput: CreateProductoInput) {
    return this.productoService.create(createProductoInput);
  }

  @Query(() => [Producto], { name: 'producto' })
  findAll() {
    return this.productoService.findAll();
  }

  @Query(() => Producto, { name: 'producto' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productoService.findOne(id);
  }

  @Mutation(() => Producto)
  updateProducto(@Args('updateProductoInput') updateProductoInput: UpdateProductoInput) {
    return this.productoService.update(updateProductoInput.id, updateProductoInput);
  }

  @Mutation(() => Producto)
  removeProducto(@Args('id', { type: () => Int }) id: number) {
    return this.productoService.remove(id);
  }
}
