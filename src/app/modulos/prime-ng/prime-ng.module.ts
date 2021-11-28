import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    BreadcrumbModule,
    InputNumberModule,
    InputTextModule,
  ],
})
export class PrimeNgModule {}
