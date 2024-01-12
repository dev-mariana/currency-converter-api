import { Module } from '@nestjs/common';
import { CurrenciesModule } from './application/currencies/currencies.module';
import { DatabaseModule } from './infra/database.module';

@Module({
  imports: [DatabaseModule, CurrenciesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
