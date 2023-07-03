import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClientesComponent } from './crear-clientes/crear-clientes.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ListarFacturasComponent } from './listar-facturas/listar-facturas.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';


const routes: Routes = [
  {path:'' , component:CrearClientesComponent},
  {path:'alta-cliente',component:CrearClientesComponent},
  {path:'listar-clientes',component:ListarClientesComponent},
  {path:'listar-facturas',component:ListarFacturasComponent},
  {path:'alta-facturas',component:CrearFacturaComponent},
  {path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
