import { Currency } from '@prisma/client';

export class CurrencyEntity implements Currency {
  id: string;
  code: string;
  from: string;
  to: string;
  amount: number;
  result: number;
  created_at: Date;
  updated_at: Date;
}
