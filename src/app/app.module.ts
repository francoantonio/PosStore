import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { Error404Component } from './error404/error404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SalesComponent } from './sales/sales.component';
import { BuscarComponent } from './sales/buscar/buscar.component';
import { HomeComponent } from './home/home.component';
import { TablaComponent } from './sales/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    Error404Component,
    NavbarComponent,
    SalesComponent,
    BuscarComponent,
    HomeComponent,
    TablaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
