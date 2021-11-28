import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  public formGroup!: FormGroup;
  constructor(
    public prodcutService: ProductsService,
    private formBuilder: FormBuilder
  ) {}

  buidForm(e: Product) {
    this.formGroup = this.formBuilder.group({
      id: [e.id, [Validators.required, Validators.minLength(3)]],
      name: [e.name, [Validators.required, Validators.minLength(6)]],
      priceGeneral: [e.priceGeneral, [Validators.required]],
      priceInput: [e.priceInput, [Validators.required]],
      stock: [e.stock, [Validators.required]],
    });
  }
  dataemitida(e: Product) {
    this.buidForm(e);
  }
  getError(controlName: string): string {
    // TODO: Cambiar Nombre a los Errores para una mejor usabilidad
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control!.touched && control!.errors != null) {
      error = JSON.stringify(control!.errors);
    }
    return error;
  }
  updateProducto() {
    const { id } = this.formGroup.value;
    this.prodcutService.postProdcut(this.formGroup.value, id).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
  newProducto() {}
}
