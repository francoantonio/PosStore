import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(
    public prodcutService: ProductsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buidForm();
  }
  buidForm() {
    this.formGroup = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(6)]],
      priceGeneral: ['', [Validators.required]],
      priceInput: ['', [Validators.required]],
      stock: ['', [Validators.required]],
    });
  }
  pushProduct() {}
}
