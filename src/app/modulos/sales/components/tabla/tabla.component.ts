import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { StoreProductService } from 'src/app/services/store-product.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {
  @Input() data2: Product[] = [];
  constructor(public store: StoreProductService) {}
}
