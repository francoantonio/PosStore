import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
   constructor(private http: HttpClient) {
  }
/*   private _carrito$ = new Observable<Product[]>(subs => {

  })
  private _carrito: Product[];
  url = 'http://localhost:3000/product/';
  constructor(private http: HttpClient) {
    this._carrito = [];
  }

  buscarProducts(query: string) {
    this.http.get<Product>(`${this.url}${query}`).subscribe((resp) => {
    this._carrito.push({ ...resp, cantidad: 1 })
      this._carrito$
    });
  }
  removeProduct(i: number) {
    console.log(this._carrito[i]);
    this._carrito = this._carrito.slice(i, 1);
  }
  carrito() {
    return this._carrito;
  }
  removeCarrito() {
    this._carrito = [];
  } */
  getProduct(query: string) {
    return this.http.get<Product>(environment.url+query)
  }
}
