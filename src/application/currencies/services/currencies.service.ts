import { Injectable } from '@nestjs/common';
import { HttpClientService } from 'src/application/http-client/services/http-client.service';
import { ParamsDTO } from '../dto/params.dto';
import { CurrencyEntity } from '../entities/currency';
import { Currency } from '../interfaces/currency.interface';
import { CurrenciesRepository } from '../repositories/currencies.repository';

@Injectable()
export class CurrenciesService {
  constructor(
    private readonly httpClientService: HttpClientService,
    private readonly currenciesRepository: CurrenciesRepository,
  ) {}

  async convertCurrency(params: ParamsDTO): Promise<CurrencyEntity> {
    const { amount } = params;
    const [from, to] = this.normalizeParams(params);

    const response = await this.httpClientService.getCurrency(from);
    const exchangeRates = await response.conversion_rates;
    const conversionRate = exchangeRates[to];

    if (!conversionRate) {
      throw new Error('Invalid currency.');
    }

    const convertedAmount = amount * conversionRate;

    const currency = {
      code: response.base_code,
      from,
      to,
      amount: Number(amount),
      result: convertedAmount,
    };

    const createdCurrency = await this.createCurrency(currency);

    return createdCurrency;
  }

  private normalizeParams({ from, to }: ParamsDTO): string[] {
    const normalizedFrom = from.toUpperCase();
    const normalizedTo = to.toUpperCase();

    return [normalizedFrom, normalizedTo];
  }

  async createCurrency(data: Currency): Promise<CurrencyEntity> {
    try {
      return await this.currenciesRepository.create(data);
    } catch (error) {
      throw new Error(error);
    }
  }
}
