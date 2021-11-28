import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  /* Tada usada de ejemlo */
  userData = {
    name: 'Antonio',
    img: 'https://thispersondoesnotexist.com/image',
  };
  constructor() {}
}
