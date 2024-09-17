import { Module } from '@nestjs/common';
import { FoodPackService } from './food-pack.service';
import { FoodPackController } from './food-pack.controller';

@Module({
  controllers: [FoodPackController],
  providers: [FoodPackService],
})
export class FoodPackModule {}
