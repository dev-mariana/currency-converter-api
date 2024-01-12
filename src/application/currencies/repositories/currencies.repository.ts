import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CurrencyEntity } from '../entities/currency';

@Injectable()
export class CurrenciesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(currency: CurrencyEntity): Promise<CurrencyEntity> {
    const data: Prisma.CurrencyCreateInput = {
      name: currency.name,
      code: currency.code,
      code_in: currency.code_in,
      bid: currency.bid,
      ask: currency.ask,
      var_bid: currency.var_bid,
      pct_change: currency.pct_change,
      high: currency.high,
      low: currency.low,
      timestamp: currency.timestamp,
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
