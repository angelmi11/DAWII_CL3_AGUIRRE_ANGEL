import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrestamosService } from './prestamos.service';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent {
  montoPrestamo: number = 0;
  cuotas: number = 0;
  montoCuota: number = 0;

  prestamoForm: FormGroup = this.fb.group({
    monto: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder = new FormBuilder(),
    private prestamosService: PrestamosService
  ) { }

  public async onSubmit() {
    if (this.prestamoForm.invalid) return
    console.log('this.prestamoForm', this.prestamoForm)
    let { cuotas, montoCuota } = this.prestamosService.calcularCuotas(this.prestamoForm.value.monto)
    console.log('cuotas', cuotas)
    this.cuotas = cuotas;
    this.montoCuota = montoCuota;
  }
}
