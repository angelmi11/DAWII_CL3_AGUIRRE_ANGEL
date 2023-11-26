import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DescuentoComponent } from './descuento/descuento.component';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { LocacionRikiMortyComponent } from './locacion-riki-morty/locacion-riki-morty.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DescuentoComponent,
    PrestamoComponent,
    LocacionRikiMortyComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
