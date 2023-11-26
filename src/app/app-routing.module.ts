import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocacionRikiMortyComponent } from './locacion-riki-morty/locacion-riki-morty.component';
import { DescuentoComponent } from './descuento/descuento.component';
import { PrestamoComponent } from './prestamo/prestamo.component';

const routes: Routes = [

  { path: 'prestamos', component: PrestamoComponent },
  { path: 'descuentos', component: DescuentoComponent },
  { path: '', component: LocacionRikiMortyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
