import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ParamsDTO {
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
