import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

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
export class SalesComponent implements OnInit {
  constructor(private productService: ProductsService) {}
  payment = {
    efectivo: 0,
    vuelto: 0,
  };
  ngOnInit(): void {}
  modal = false;

  data = this.productService.carrito();
  getTotalProduct() {
    const temporalData = this.data.map((prod) => prod.cantidad! * prod.price);
    return temporalData.reduce((a: any, b: any) => a + b, 0);
  }
  Limpiar() {
    this.data = [];
    this.productService.removeCarrito();
    console.log(this.data);
  }
  cobrar() {
    console.log('test');
    this.openModal();
    console.log(this.payment.efectivo - this.getTotalProduct());
  }

  openModal() {
    this.modal = !this.modal;
  }
  darVuelto() {
    this.payment.vuelto = this.payment.efectivo - this.getTotalProduct();
  }
  paymenCancel() {
    this.payment.efectivo = 0;
  }
}
