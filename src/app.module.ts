import { Module } from '@nestjs/common';
import { CurrenciesModule } from './application/currencies/currencies.module';
import { HttpService } from './application/http/http.service';
import { DatabaseModule } from './infra/database.module';

@Module({
  imports: [DatabaseModule, CurrenciesModule],
  controllers: [],
  providers: [HttpService],
})
export class AppModule {}
