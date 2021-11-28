import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public formGroup!: FormGroup;
  public errors = {
    usuario: '',
    password: '',
  };
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      // FIXME: Validar Space Black NULL
      usuario: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  login() {
    // TODO: Implement login service method
    const { usuario, password } = this.formGroup.value;
    console.log(usuario, password);
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
  Limpiar() {
    // TODO: implementar Limpiar los input
  }
}
