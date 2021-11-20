import { Injectable } from '@angular/core';
import { Product } from '../sales/product';

@Injectable({
  providedIn: 'root',
})
export class StoreProductService {
  private _totalProduct: Product[] = [];
  constructor() {}

  addProduct(p: Product) {
    console.log(p);
    this._totalProduct.push(p);
  }
  get product() {
    return this._totalProduct;
  }
  delete(i: number) {
    this._totalProduct.splice(i, 1);
  }
  deleteOneCantidad(i: number) {
    this._totalProduct[i].cantidad!--;
    this._totalProduct[i].cantidad == 0 && this.delete(i);
  }
  getTotal() {
    const temporalData = this._totalProduct.map(
      (prod) => prod.cantidad! * prod.price
    );
    return temporalData.reduce((a, b) => a + b, 0);
  }
  deleteAll() {
    this._totalProduct = [];
  }
}
