import { Module } from '@nestjs/common';
import { CurrenciesController } from './controllers/currencies.controller';
import { CurrenciesRepository } from './repositories/currencies.repository';
import { CurrenciesService } from './services/currencies.service';

@Module({
  controllers: [CurrenciesController],
  providers: [CurrenciesService, CurrenciesRepository],
})
export class CurrenciesModule {}
