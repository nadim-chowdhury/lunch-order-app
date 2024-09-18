import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RestaurantCreateInput) {
    return this.prisma.restaurant.create({ data });
  }

  async findAll() {
    return this.prisma.restaurant.findMany({
      include: {
        foodPacks: true,
      },
    });
  }
}
