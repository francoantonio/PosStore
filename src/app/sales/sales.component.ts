import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from '../services/products.service';
import { StoreProductService } from '../services/store-product.service';

interface product {
  name: string;
  price: number;
  cantidad: number;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent {
  data: Product[];
  constructor(
    private productService: ProductsService,
    public store: StoreProductService
  ) {
    this.data = this.store.product;
  }
  payment = {
    efectivo: 0,
    vuelto: 0,
  };

  modal = false;
  GetProduct(query: string) {
    this.productService
      .getProduct(query)
      .subscribe((res) => this.store.addProduct(res));
  }
  newElement(e: Product) {
    if (this.data.find(({ id }) => e.id == id)) {
      const une = this.data.findIndex(({ id }) => e.id == id);
      this.data[une].cantidad = this.data[une].cantidad! + 1;
    } else {
      this.data.push(e);
    }
  }

  cobrar() {
    this.openModal();
  }
  openModal() {
    this.modal = !this.modal;
  }
  darVuelto() {
    this.payment.vuelto = this.payment.efectivo - this.store.getTotal();
  }
  limpiart() {
    this.store.deleteAll();
    this.data = this.store.product;
  }
  paymenCancel() {
    this.payment.efectivo = 0;
    this.modal = !this.modal;
  }
  finCompra() {
    this.productService.PostCompra({
      productos: this.data,
      Date: new Date(),
      // TODO: Cambiar el vendedor Test, solo se utiliza para testear la aplicacion
      Vendedor: 'test',
      Payment: {
        TotalCompra: this.store.getTotal(),
        Vueto: this.payment.vuelto,
        totalAbonado: this.payment.efectivo,
      },
    });
  }
}
