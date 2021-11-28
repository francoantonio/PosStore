import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ProductsService } from 'src/app/services/products.service';
import { StoreProductService } from 'src/app/services/store-product.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnDestroy {
  data: Product[];
  payment = {
    cash: 0,
    cashReturn: 0,
  };
  modal = false;

  constructor(
    private productService: ProductsService,
    public store: StoreProductService
  ) {
    this.data = this.store.product;
  }

  ngOnDestroy(): void {
    this.clean();
  }

  /*  GetProduct(query: string) {
    this.productService
      .getProduct(query)
      .subscribe((res) => this.store.addProduct(res));
  } */
  newElement(e: Product) {
    if (this.data.find(({ id }) => e.id == id)) {
      const une = this.data.findIndex(({ id }) => e.id == id);
      this.data[une].cantidad = this.data[une].cantidad! + 1;
    } else {
      this.data.push(e);
    }
  }

  cobrar() {
    /* TODO: Implementar */
    this.openModal();
  }
  openModal() {
    this.modal = !this.modal;
  }
  calcCashReturn() {
    this.payment.cashReturn = this.payment.cash - this.store.getTotal();
  }
  clean() {
    this.store.deleteAll();
    this.data = this.store.product;
  }
  paymenCancel() {
    this.payment.cash = 0;
    this.modal = !this.modal;
  }
  endPurchase() {
    this.productService.PostCompra({
      product: this.data,
      // TODO: Cambiar el vendedor Test, solo se utiliza para testear la aplicacion
      user: { firstName: 'Antonio', surName: 'Franco', nameUser: 'ABC123' },
      payment: {
        totalProduct: this.store.getTotal(),
        cashReturn: this.payment.cashReturn,
        cash: this.payment.cash,
      },
      date: new Date(),
    });
  }
}
