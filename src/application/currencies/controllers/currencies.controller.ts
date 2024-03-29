import { Controller, Get, Param, Query } from '@nestjs/common';
import { ParamsDTO } from '../dto/params.dto';
import { CurrencyEntity } from '../entities/currency';
import { CurrenciesService } from '../services/currencies.service';

@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Get(':from/:to/')
  async convertCurrency(
    @Param() params: ParamsDTO,
    @Query('amount') amount: ParamsDTO['amount'],
  ): Promise<CurrencyEntity> {
    return await this.currenciesService.convertCurrency({ ...params, amount });
  }

  @Get()
  async findCurrencies(): Promise<CurrencyEntity[]> {
    return await this.currenciesService.findCurrencies();
  }

  @Get(':id')
  async findCurrency(@Param('id') id: string): Promise<CurrencyEntity> {
    return await this.currenciesService.findCurrency(id);
  }
}
