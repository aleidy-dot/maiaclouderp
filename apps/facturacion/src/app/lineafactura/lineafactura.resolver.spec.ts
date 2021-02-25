import { Test, TestingModule } from '@nestjs/testing';
import { LineafacturaResolver } from './lineafactura.resolver';
import { LineafacturaService } from './lineafactura.service';

describe('LineafacturaResolver', () => {
  let resolver: LineafacturaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineafacturaResolver, LineafacturaService],
    }).compile();

    resolver = module.get<LineafacturaResolver>(LineafacturaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
