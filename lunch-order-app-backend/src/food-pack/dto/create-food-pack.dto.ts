import { ApiProperty } from '@nestjs/swagger';

export class CreateFoodPackDto {
  @ApiProperty({
    description: 'The name of the food pack',
    example: 'Burger Combo',
  })
  name: string;

  @ApiProperty({
    description: 'The ID of the restaurant associated with this food pack',
    example: 1,
  })
  restaurantId: number;
}
