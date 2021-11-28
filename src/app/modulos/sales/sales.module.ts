import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscarComponent } from './components/buscar/buscar.component';
import { SalesComponent } from './page/sales.component';
import { SalerouterModule } from './sale-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [SalesComponent, BuscarComponent],
  imports: [CommonModule, FormsModule, SalerouterModule, PrimeNgModule],
  exports: [SalesComponent],
})
export class SalesModule {}
