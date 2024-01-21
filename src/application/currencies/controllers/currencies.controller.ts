import { Controller, Get, Param, Query } from '@nestjs/common';
import { ParamsDTO } from '../dto/params.dto';
import { CurrenciesService } from '../services/currencies.service';

@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Get(':from/:to/')
  async convertCurrency(
    @Param() params: ParamsDTO,
    @Query('amount') amount: ParamsDTO['amount'],
  ): Promise<number> {
    return await this.currenciesService.convertCurrency({ ...params, amount });
  }
}
