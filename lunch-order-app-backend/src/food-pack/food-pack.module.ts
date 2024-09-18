import { Module } from '@nestjs/common';
import { FoodPackService } from './food-pack.service';
import { FoodPackController } from './food-pack.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule ],
  controllers: [FoodPackController],
  providers: [FoodPackService],
})
export class FoodPackModule {}
