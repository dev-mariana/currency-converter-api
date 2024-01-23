import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CurrencyEntity } from '../entities/currency';
import { Currency } from '../interfaces/currency.interface';

@Injectable()
export class CurrenciesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(currency: Currency): Promise<CurrencyEntity> {
    const data: Prisma.CurrencyCreateInput = {
      code: currency.code,
      from: currency.from,
      to: currency.to,
      amount: currency.amount,
      result: currency.result,
    };

    return await this.prisma.currency.create({
      data,
    });
  }

  async findAll(): Promise<CurrencyEntity[]> {
    return await this.prisma.currency.findMany();
  }
}
