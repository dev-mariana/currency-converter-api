import { Injectable } from '@nestjs/common';
import { HttpClientService } from 'src/application/http-client/services/http-client.service';
import { ParamsDTO } from '../dto/params.dto';
import { CurrenciesRepository } from '../repositories/currencies.repository';

@Injectable()
export class CurrenciesService {
  constructor(
    private readonly httpClientService: HttpClientService,
    private readonly currenciesRepository: CurrenciesRepository,
  ) {}

  async convertCurrency(params: ParamsDTO): Promise<number> {
    const { amount } = params;
    const [from, to] = this.normalizeParams(params);

    const response = await this.httpClientService.getCurrency(from);
    const exchangeRates = await response.conversion_rates;
    const conversionRate = exchangeRates[to];

    if (!conversionRate) {
      throw new Error('Invalid Currency.');
    }

    return amount * conversionRate;
  }

  private normalizeParams({ from, to }: ParamsDTO): string[] {
    const normalizedFrom = from.toUpperCase();
    const normalizedTo = to.toUpperCase();

    return [normalizedFrom, normalizedTo];
  }
}
