// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { FoodPackService } from './food-pack.service';
// import { CreateFoodPackDto } from './dto/create-food-pack.dto';
// import { UpdateFoodPackDto } from './dto/update-food-pack.dto';

// @Controller('food-pack')
// export class FoodPackController {
//   constructor(private readonly foodPackService: FoodPackService) {}

//   @Post()
//   create(@Body() createFoodPackDto: CreateFoodPackDto) {
//     return this.foodPackService.create(createFoodPackDto);
//   }

//   @Get()
//   findAll() {
//     return this.foodPackService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.foodPackService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateFoodPackDto: UpdateFoodPackDto) {
//     return this.foodPackService.update(+id, updateFoodPackDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.foodPackService.remove(+id);
//   }
// }

import { Controller, Get, Post, Body } from '@nestjs/common';
import { FoodPackService } from './food-pack.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Food Packs')
@Controller('food-packs')
export class FoodPackController {
  constructor(private readonly foodPackService: FoodPackService) {}

  @Post()
  async create(
    @Body() createFoodPackDto: { name: string; restaurantId: number },
  ) {
    return this.foodPackService.create({
      name: createFoodPackDto.name,
      restaurant: {
        connect: { id: createFoodPackDto.restaurantId },
      },
    });
  }

  @Get()
  async findAll() {
    return this.foodPackService.findAll();
  }
}
