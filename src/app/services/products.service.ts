import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EndPurchase, Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getProduct(query: string) {
    return this.http.get<Product>(environment.url + 'products/' + query);
  }
  PostCompra(body: EndPurchase) {
    console.log(body);
    return this.http.post(environment.url, body);
  }

  postProdcut(body: Product, id: string) {
    console.log(body);
    return this.http.put(environment.url + 'products/' + id, body);
  }
  postNewProduct(body: Product) {}
}
