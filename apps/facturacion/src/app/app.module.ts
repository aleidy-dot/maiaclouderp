import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacturaModule } from './factura/factura.module';
import { ProductoModule } from './producto/producto.module';
import { CoreModule } from '@maiaclouderp/core';
@Module({
  imports: [FacturaModule, ProductoModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
