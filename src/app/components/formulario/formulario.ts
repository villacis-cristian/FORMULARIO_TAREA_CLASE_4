import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true, // Asegúrate que está marcado como standalone
  imports: [
    CommonModule,      // Necesario para *ngIf
    ReactiveFormsModule // Necesario para formGroup
  ],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class Formulario {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.maxLength(200)]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario válido:', this.form.value);
      // Aquí iría tu llamada al API
    }
  }
}