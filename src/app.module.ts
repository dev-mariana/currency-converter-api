import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CurrenciesModule } from './application/currencies/currencies.module';
import { HttpClientModule } from './application/http-client/http-client.module';
import { DatabaseModule } from './infra/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env, .env.development'],
    }),
    DatabaseModule,
    CurrenciesModule,
    HttpClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
