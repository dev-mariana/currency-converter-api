import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CurrenciesModule } from './application/currencies/currencies.module';
import { HttpService } from './application/http/http.service';
import { DatabaseModule } from './infra/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    CurrenciesModule,
  ],
  controllers: [],
  providers: [HttpService],
})
export class AppModule {}
