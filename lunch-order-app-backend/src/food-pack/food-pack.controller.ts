import { Controller, Get, Post, Body } from '@nestjs/common';
import { FoodPackService } from './food-pack.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateFoodPackDto } from './dto/create-food-pack.dto';

@ApiTags('Food Packs')
@Controller('food-packs')
export class FoodPackController {
  constructor(private readonly foodPackService: FoodPackService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new food pack for a restaurant' })
  @ApiBody({ type: CreateFoodPackDto })
  @ApiResponse({
    status: 201,
    description: 'The food pack has been successfully created.',
    type: CreateFoodPackDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async create(@Body() createFoodPackDto: CreateFoodPackDto): Promise<any> {
    return this.foodPackService.create({
      name: createFoodPackDto.name,
      restaurant: {
        connect: { id: createFoodPackDto.restaurantId },
      },
    });
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all food packs' })
  @ApiResponse({
    status: 200,
    description: 'List of all food packs',
    type: [CreateFoodPackDto],
  })
  async findAll(): Promise<any> {
    return this.foodPackService.findAll();
  }
}
