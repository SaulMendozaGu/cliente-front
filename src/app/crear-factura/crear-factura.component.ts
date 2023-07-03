import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Factura } from 'src/assets/interface/factura';
import { Persona } from 'src/assets/interface/persona';
import { FacturaService } from 'src/assets/services/factura.service';
import { PersonaService } from 'src/assets/services/persona.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss']
})
export class CrearFacturaComponent  implements OnInit{
  formularioFactura = new FormGroup({
    monto: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required])
  });
  datoPersona!:Persona;
  id:string | null | undefined = '';
  datosPersona: Persona[] = [];
  personaFactura!:Persona;
  respuesta:string = "";
  constructor(private personaService:PersonaService, private facturaService:FacturaService){}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe({
      next:(complete)=>{
        console.log(complete);
       this.datosPersona = complete;
      },error: (err) => {
        console.log(err);

      }
    });
  }

  guardar(){
    console.log(this.formularioFactura.value);
    if(this.formularioFactura.valid && this.personaFactura){
      let datosFactura:any = {
        fecha: this.formularioFactura.value.fecha,
        monto: this.formularioFactura.value.monto,
        persona: this.personaFactura
      }
      this.facturaService.setFactura(datosFactura).subscribe({
        next:(complete)=>{
          if(complete){
            this.respuesta = "Factura registrada";
          }else{
            this.respuesta = "Error al registrar factura"
          }
          setTimeout(() => {
            this.respuesta = "";
          }, 2000);
        },error:(err)=>{
          this.respuesta = "Error al registrar factura";
          setTimeout(() => {
            this.respuesta = "";
          }, 2000);
        }
      })

    }
  }
  selecPersona(persona:Persona){
    this.personaFactura = persona;
  }
}
