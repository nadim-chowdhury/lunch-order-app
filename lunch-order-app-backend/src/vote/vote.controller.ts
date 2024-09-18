import { Controller, Post, Body, Get } from '@nestjs/common';
import { VoteService } from './vote.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateVoteDto } from './dto/create-vote.dto';

@ApiTags('Votes')
@Controller('votes')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  @ApiOperation({ summary: 'Cast a vote for a food pack' })
  @ApiBody({ type: CreateVoteDto })
  @ApiResponse({
    status: 201,
    description: 'Vote successfully cast',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async vote(@Body() voteDto: CreateVoteDto): Promise<any> {
    return this.voteService.vote({
      employee: voteDto.employee,
      foodPack: { connect: { id: voteDto.foodPackId } },
    });
  }

  @Get('winner')
  @ApiOperation({ summary: 'Get the daily winner food pack' })
  @ApiResponse({
    status: 200,
    description: 'Returns the food pack with the most votes for the day',
  })
  @ApiResponse({ status: 404, description: 'No votes found' })
  async getDailyWinner(): Promise<any> {
    return this.voteService.getDailyWinner();
  }
}
