import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CurrenciesDTO {
  @IsString()
  @IsNotEmpty()
  from: string;

  @IsString()
  @IsNotEmpty()
  to: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
