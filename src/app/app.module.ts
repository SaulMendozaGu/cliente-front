import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearClientesComponent } from './crear-clientes/crear-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ListarFacturasComponent } from './listar-facturas/listar-facturas.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearClientesComponent,
    ListarClientesComponent,
    ListarFacturasComponent,
    CrearFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
