import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _carrito: Product[] = [];
  url = 'http://localhost:3000/product/';
  constructor(private http: HttpClient) {}

  buscarProducts(query: string) {
    return this.http.get<Product>(`${this.url}${query}`).subscribe((resp) => {
      this._carrito.push({ ...resp, cantidad: 1 });
    });
  }

  carrito() {
    return this._carrito;
  }
  removeCarrito() {
    this._carrito = [];
  }
}
