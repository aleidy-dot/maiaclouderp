import { Module } from '@nestjs/common';
import { LineafacturaService } from './lineafactura.service';
import { LineafacturaResolver } from './lineafactura.resolver';

@Module({
  providers: [LineafacturaResolver, LineafacturaService]
})
export class LineafacturaModule {}
