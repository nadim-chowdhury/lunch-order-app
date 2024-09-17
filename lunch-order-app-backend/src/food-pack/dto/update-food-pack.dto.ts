import { PartialType } from '@nestjs/swagger';
import { CreateFoodPackDto } from './create-food-pack.dto';

export class UpdateFoodPackDto extends PartialType(CreateFoodPackDto) {}
