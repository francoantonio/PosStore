import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { Error404Component } from './error404/error404.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'Ventas',
    component: SalesComponent,
  },
  {
    path: 'Deposito',
    redirectTo: 'Ventas',
  },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
