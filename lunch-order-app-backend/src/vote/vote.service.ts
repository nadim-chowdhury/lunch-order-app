import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VoteService {
  constructor(private prisma: PrismaService) {}

  async vote(data: Prisma.VoteCreateInput) {
    return this.prisma.vote.create({ data });
  }

  async getDailyWinner() {
    const winner = await this.prisma.vote.groupBy({
      by: ['foodPackId'],
      _count: {
        foodPackId: true,
      },
      orderBy: {
        _count: {
          foodPackId: 'desc',
        },
      },
      take: 1,
    });

    if (winner.length > 0) {
      const foodPack = await this.prisma.foodPack.findUnique({
        where: { id: winner[0].foodPackId },
        include: { restaurant: true },
      });
      return foodPack;
    }

    return null;
  }
}
