import { Test, TestingModule } from '@nestjs/testing';
import { FoodPackController } from './food-pack.controller';
import { FoodPackService } from './food-pack.service';

describe('FoodPackController', () => {
  let controller: FoodPackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodPackController],
      providers: [FoodPackService],
    }).compile();

    controller = module.get<FoodPackController>(FoodPackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
