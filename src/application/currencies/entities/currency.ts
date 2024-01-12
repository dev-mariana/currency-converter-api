import { Currency } from '@prisma/client';

export class CurrencyEntity implements Currency {
  id: string;
  name: string;
  code: string;
  code_in: string;
  bid: number;
  ask: number;
  var_bid: number;
  pct_change: number;
  high: number;
  low: number;
  timestamp: Date;
  created_at: Date;
  updated_at: Date;
}
