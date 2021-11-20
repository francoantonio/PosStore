import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { BuscarComponent } from './buscar/buscar.component';
import { TablaComponent } from './tabla/tabla.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SalesComponent, BuscarComponent, TablaComponent],
  imports: [CommonModule, FormsModule],
  exports: [SalesComponent],
})
export class SalesModule {}
