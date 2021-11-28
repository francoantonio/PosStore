import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
})
export class BuscarComponent {
  @Output() data = new EventEmitter<Product>();
  constructor(private productService: ProductsService) {}
  valueInput = '';
  error = {
    status: false,
    msg: '`',
  };
  buscar() {
    this.productService.getProduct(this.valueInput).subscribe(
      (res) => this.data.emit({ ...res, cantidad: 1 }),
      (err) => {
        this.error.status = true;
        this.error.msg =
          err.error.msg || 'Error con el servidor, Contacte Al administrador ';
        setTimeout(() => {
          this.error.status = false;
          this.error.msg = '';
        }, 1500);
      }
    );
    this.valueInput = '';
  }
}
