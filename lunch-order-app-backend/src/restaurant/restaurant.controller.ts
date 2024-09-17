// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { RestaurantService } from './restaurant.service';
// import { CreateRestaurantDto } from './dto/create-restaurant.dto';
// import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

// @Controller('restaurant')
// export class RestaurantController {
//   constructor(private readonly restaurantService: RestaurantService) {}

//   @Post()
//   create(@Body() createRestaurantDto: CreateRestaurantDto) {
//     return this.restaurantService.create(createRestaurantDto);
//   }

//   @Get()
//   findAll() {
//     return this.restaurantService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.restaurantService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
//     return this.restaurantService.update(+id, updateRestaurantDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.restaurantService.remove(+id);
//   }
// }

import { Controller, Get, Post, Body } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Restaurants')
@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async create(@Body() createRestaurantDto: { name: string }) {
    return this.restaurantService.create({
      name: createRestaurantDto.name,
    });
  }

  @Get()
  async findAll() {
    return this.restaurantService.findAll();
  }
}
