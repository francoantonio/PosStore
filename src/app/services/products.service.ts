import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../sales/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompraFinal } from '../sales/compra-final';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getProduct(query: string) {
    return this.http.get<Product>(environment.url + 'products/' + query);
  }
  PostCompra(body: CompraFinal) {
    console.log(body);
    /*  return this.http.post(environment.url, body); */
  }
}
