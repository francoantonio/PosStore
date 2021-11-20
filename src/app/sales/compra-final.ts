import { Product } from './product';
export interface CompraFinal {
  productos: Product[];
  Vendedor: string;
  Date: Date;
  Payment: Paymen;
}

export interface Paymen {
  TotalCompra: number;
  totalAbonado: number;
  Vueto: number;
}
