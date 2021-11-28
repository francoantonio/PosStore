import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];
  /* Tada usada de ejemplo */
  userData = {
    name: 'Antonio',
    img: 'https://i.pinimg.com/564x/46/9b/35/469b3549ff96553e1fa803020bd0c33e.jpg',
  };
  // TODO: Las rutas van a venir segun el rol del AUTH
  rutas = [
    { url: '/Ventas', name: 'Ventas' },
    { url: '/Deposito', name: 'Deposito' },
  ];
  constructor() {}

  ngOnInit() {}
}
