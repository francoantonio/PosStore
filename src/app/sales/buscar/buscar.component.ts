import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
})
export class BuscarComponent {
  @Output() data = new EventEmitter<Product>();
  constructor(private productService: ProductsService) {}
  valueInput = '';
  erro=false
  buscar() {
    this.productService.getProduct(this.valueInput).subscribe(
      (res) => this.data.emit({ ...res, cantidad: 1 }),
      (err) => {
        console.log('error aqui');
        this.erro = true
      setTimeout(() => {
        this.erro = false
      }, 1500);}
    );
    this.valueInput = '';
  }
}
