import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  constructor() { }

  calcularCuotas(montoPrestamo: number): { cuotas: number; montoCuota: number } {
    let cuotas: number;
    let montoCuota: number;
    
    if (montoPrestamo > 5000) {
      cuotas = 3;
    } else if (montoPrestamo < 1000) {
      cuotas = 1;
    } else if (montoPrestamo >= 2000 && montoPrestamo <= 3000) {
      cuotas = 2;
    } else {
      cuotas = 5;
    }

    const tasaInteres = montoPrestamo < 4000 ? 0.12 : 0.1;
    const totalDeuda = montoPrestamo * (1 + tasaInteres);
    montoCuota = totalDeuda / cuotas;
    return { cuotas, montoCuota };
  }
}
