import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { FacturaModule } from './factura/factura.module';
import { ProductoModule } from './producto/producto.module';
import { LineafacturaModule } from './lineafactura/lineafactura.module';

@Module({
  imports: [ClienteModule, FacturaModule, ProductoModule, LineafacturaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
