import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { StoreProductService } from '../../services/store-product.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {
  @Input() data2: Product[] = [];
  constructor(private store: StoreProductService) {}

  removeElement(i: number) {
    this.store.delete(i);
  }
}
