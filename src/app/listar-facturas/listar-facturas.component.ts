import { Component } from '@angular/core';
import { Factura } from 'src/assets/interface/factura';
import { FacturaService } from 'src/assets/services/factura.service';

@Component({
  selector: 'app-listar-facturas',
  templateUrl: './listar-facturas.component.html',
  styleUrls: ['./listar-facturas.component.scss']
})
export class ListarFacturasComponent {
  buscarTexto:string = "";
  datosFactura:Factura[] = [];
  mostrarNulo: boolean = false;
  constructor(private facturaService:FacturaService){}

  buscar(){
    console.log(this.buscarTexto);
    this.mostrarNulo = false;
    this.facturaService.getFactura(this.buscarTexto).subscribe({
      next:(complete)=>{
        console.log(complete);
        if(complete.length > 0){
          this.datosFactura = complete;
          this.mostrarNulo = false;
        }else{
          this.mostrarNulo = true;
        }

        setTimeout(() => {
          this.mostrarNulo = false;
        }, 2000)
        
      },error: (err) => {
        console.log(err);
        this.mostrarNulo = true;

        setTimeout(() => {
          this.mostrarNulo = false;
        }, 2000)
      }
    });
  }
}
