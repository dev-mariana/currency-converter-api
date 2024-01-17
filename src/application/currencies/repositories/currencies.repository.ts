import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CurrencyEntity } from '../entities/currency';

@Injectable()
export class CurrenciesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(currency: CurrencyEntity): Promise<CurrencyEntity> {
    const data: Prisma.CurrencyCreateInput = {
      base_code: currency.base_code,
      from: currency.from,
      to: currency.to,
      amount: currency.amount,
      result: currency.result,
      created_at: currency.created_at,
      updated_at: currency.updated_at,
    };

    return await this.prisma.currency.create({
      data,
    });
  }

  async findAll(): Promise<CurrencyEntity[]> {
    return await this.prisma.currency.findMany();
  }
}
