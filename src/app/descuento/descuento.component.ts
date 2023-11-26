import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-descuento',
  templateUrl: './descuento.component.html',
  styleUrls: ['./descuento.component.css']
})
export class DescuentoComponent {

  cantidad: number = 0;
  precio: number = 0;
  total: number = 0;
  descuentoAplicado: boolean = false;

  calcularTotal(): void {
    this.total = this.cantidad * this.precio;

    if (this.total > 200) {
      this.total *= 0.8; 
      this.descuentoAplicado = true;
    } else {
      this.descuentoAplicado = false;
    }
  }
}
