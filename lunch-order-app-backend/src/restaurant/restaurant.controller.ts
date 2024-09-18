import { Controller, Get, Post, Body } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@ApiTags('Restaurants')
@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new restaurant' })
  @ApiBody({ type: CreateRestaurantDto })
  @ApiResponse({
    status: 201,
    description: 'The restaurant has been successfully created.',
    type: CreateRestaurantDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async create(@Body() createRestaurantDto: CreateRestaurantDto): Promise<any> {
    return this.restaurantService.create({
      name: createRestaurantDto.name,
    });
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all restaurants with their food packs' })
  @ApiResponse({
    status: 200,
    description: 'A list of all restaurants and their food packs.',
    type: [CreateRestaurantDto],
  })
  async findAll(): Promise<any> {
    return this.restaurantService.findAll();
  }
}
