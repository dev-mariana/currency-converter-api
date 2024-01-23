export interface Currency {
  code: string;
  from: string;
  to: string;
  amount: number;
  result: number;
  created_at?: Date;
  updated_at?: Date;
}
