import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VoteService {
  constructor(private prisma: PrismaService) {}

  async vote(data: Prisma.VoteCreateInput) {
    // Correct Prisma input type
    return this.prisma.vote.create({ data });
  }

  async getDailyWinner() {
    const winner = await this.prisma.vote.groupBy({
      by: ['foodPackId'],
      _count: { _all: true },
      orderBy: { _count: { _all: 'desc' } },
      take: 1,
    });

    return winner.length
      ? this.prisma.foodPack.findUnique({
          where: { id: winner[0].foodPackId },
          include: { restaurant: true },
        })
      : null;
  }
}
