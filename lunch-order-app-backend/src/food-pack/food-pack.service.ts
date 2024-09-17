import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoodPackService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.FoodPackCreateInput) {
    // Correct Prisma input type
    return this.prisma.foodPack.create({ data });
  }

  async findAll() {
    return this.prisma.foodPack.findMany({
      include: {
        restaurant: true,
      },
    });
  }
}
