import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
})
export class BuscarComponent {
  constructor(private productService: ProductsService) {}
  valueInput = '';
  buscar() {
    this.productService.buscarProducts(this.valueInput);
    this.valueInput = '';
  }
}
