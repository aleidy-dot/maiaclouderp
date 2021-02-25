import { Test, TestingModule } from '@nestjs/testing';
import { LineafacturaService } from './lineafactura.service';

describe('LineafacturaService', () => {
  let service: LineafacturaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineafacturaService],
    }).compile();

    service = module.get<LineafacturaService>(LineafacturaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
