import { Test, TestingModule } from '@nestjs/testing';
import { FoodPackService } from './food-pack.service';

describe('FoodPackService', () => {
  let service: FoodPackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodPackService],
    }).compile();

    service = module.get<FoodPackService>(FoodPackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
