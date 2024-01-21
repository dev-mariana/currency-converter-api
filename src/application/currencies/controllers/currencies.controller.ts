import { Controller, Get, Param, Query } from '@nestjs/common';
import { CurrenciesDTO } from '../dto/currencies.dto';
import { CurrenciesService } from '../services/currencies.service';

@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Get(':from/:to/')
  async convertCurrency(
    @Param() params: CurrenciesDTO,
    @Query('amount') amount: CurrenciesDTO['amount'],
  ): Promise<number> {
    return await this.currenciesService.convertCurrency({ ...params, amount });
  }
}
