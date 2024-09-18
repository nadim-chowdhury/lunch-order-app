import { ApiProperty } from '@nestjs/swagger';

export class CreateVoteDto {
  @ApiProperty({
    description: 'The name of the employee casting the vote',
    example: 'John Doe',
  })
  employee: string;

  @ApiProperty({
    description: 'The ID of the food pack being voted for',
    example: 1,
  })
  foodPackId: number;
}
