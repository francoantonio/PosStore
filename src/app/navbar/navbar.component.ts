import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  modal = false;
  constructor() {}

  ngOnInit(): void {}
  openModal() {
    this.modal = !this.modal;
  }
}
