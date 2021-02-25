import { Injectable } from '@nestjs/common';
import { CreateProductoInput } from './dto/create-producto.input';
import { UpdateProductoInput } from './dto/update-producto.input';

@Injectable()
export class ProductoService {
  create(createProductoInput: CreateProductoInput) {
    return 'This action adds a new producto';
  }

  findAll() {
    return `This action returns all producto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoInput: UpdateProductoInput) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
