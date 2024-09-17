import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { FoodPackModule } from './food-pack/food-pack.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [RestaurantModule, FoodPackModule, VoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
