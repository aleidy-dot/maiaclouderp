import { Injectable } from '@nestjs/common';
import { CreateLineafacturaInput } from './dto/create-lineafactura.input';
import { UpdateLineafacturaInput } from './dto/update-lineafactura.input';

@Injectable()
export class LineafacturaService {
  create(createLineafacturaInput: CreateLineafacturaInput) {
    return 'This action adds a new lineafactura';
  }

  findAll() {
    return `This action returns all lineafactura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lineafactura`;
  }

  update(id: number, updateLineafacturaInput: UpdateLineafacturaInput) {
    return `This action updates a #${id} lineafactura`;
  }

  remove(id: number) {
    return `This action removes a #${id} lineafactura`;
  }
}
