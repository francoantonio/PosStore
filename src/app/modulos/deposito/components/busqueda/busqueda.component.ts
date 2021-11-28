import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent {
  @Output() data = new EventEmitter();
  valueInput = '';
  error = false;
  constructor(private productService: ProductsService) {}
  buscar() {
    this.productService.getProduct(this.valueInput).subscribe(
      (res) => {
        this.data.emit(res), (this.valueInput = '');
      },
      (err) => {
        this.error = true;
        setTimeout(() => {
          this.error = false;
          this.valueInput = '';
        }, 1500);
      }
    );
  }
  test() {
    console.log('Es un test ');
  }
}
