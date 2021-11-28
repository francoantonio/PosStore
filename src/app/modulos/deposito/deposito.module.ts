import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { DepositoRouterModule } from './deposito-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { EditComponent } from './pages/edit/edit.component';

@NgModule({
  declarations: [BusquedaComponent, HomeComponent, NewComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    ReactiveFormsModule,
    DepositoRouterModule,
  ],
})
export class DepositoModule {}
