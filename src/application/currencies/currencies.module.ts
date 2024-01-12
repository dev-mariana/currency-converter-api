import { Module } from '@nestjs/common';
import { CurrenciesController } from './currencies.controller';
import { CurrenciesService } from './currencies.service';
import { CurrenciesRepository } from './repositories/currencies.repository';

@Module({
  controllers: [CurrenciesController],
  providers: [CurrenciesService, CurrenciesRepository],
})
export class CurrenciesModule {}
