import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Producto',
        items: [
          { label: 'Nuevo', routerLink: 'new', icon: 'pi pi-plus' },
          { label: 'Editar', routerLink: 'update', icon: 'pi pi-tag' },
          { label: 'Eliminar', routerLink: 'delete', icon: 'pi pi-trash' },
        ],
      },
    ];
  }
}
