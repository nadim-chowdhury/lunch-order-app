import { ApiProperty } from '@nestjs/swagger';
import { CreateFoodPackDto } from 'src/food-pack/dto/create-food-pack.dto';

export class CreateRestaurantDto {
  @ApiProperty({
    description: 'The unique identifier of the restaurant',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The name of the restaurant',
    example: 'Pizza Palace',
  })
  name: string;

  @ApiProperty({
    description: 'List of food packs offered by the restaurant',
    type: [CreateFoodPackDto],
  })
  foodPacks: CreateFoodPackDto[];
}
