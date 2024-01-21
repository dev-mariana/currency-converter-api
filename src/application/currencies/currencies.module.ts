import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database.module';
import { HttpClientModule } from '../http-client/http-client.module';
import { CurrenciesController } from './controllers/currencies.controller';
import { CurrenciesRepository } from './repositories/currencies.repository';
import { CurrenciesService } from './services/currencies.service';

@Module({
  imports: [DatabaseModule, HttpClientModule],
  controllers: [CurrenciesController],
  providers: [CurrenciesService, CurrenciesRepository],
})
export class CurrenciesModule {}
