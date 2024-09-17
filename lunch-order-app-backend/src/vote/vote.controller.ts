// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { VoteService } from './vote.service';
// import { CreateVoteDto } from './dto/create-vote.dto';
// import { UpdateVoteDto } from './dto/update-vote.dto';

// @Controller('vote')
// export class VoteController {
//   constructor(private readonly voteService: VoteService) {}

//   @Post()
//   create(@Body() createVoteDto: CreateVoteDto) {
//     return this.voteService.create(createVoteDto);
//   }

//   @Get()
//   findAll() {
//     return this.voteService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.voteService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateVoteDto: UpdateVoteDto) {
//     return this.voteService.update(+id, updateVoteDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.voteService.remove(+id);
//   }
// }

import { Controller, Post, Body, Get } from '@nestjs/common';
import { VoteService } from './vote.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Votes')
@Controller('votes')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  async vote(@Body() voteDto: { employee: string; foodPackId: number }) {
    return this.voteService.vote({
      employee: voteDto.employee,
      foodPack: { connect: { id: voteDto.foodPackId } },
    });
  }

  @Get('winner')
  async getDailyWinner() {
    return this.voteService.getDailyWinner();
  }
}
