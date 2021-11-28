export interface EndPurchase {
  product: Product[];
  user: User;
  date: Date;
  payment: Payment;
}

export interface Product {
  id: number;
  name: string;
  priceGeneral: number;
  priceInput: number;
  stock: number;
  category: string[];
  cantidad?: number;
}

export interface Payment {
  cash: number;
  cashReturn: number;
  totalProduct: number;
}

/* TODO: implements User interface  */
export interface User {
  nameUser: string;
  firstName: string;
  surName: string;
  img?: string;
}
