import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/assets/interface/persona';
import { PersonaService } from 'src/assets/services/persona.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {

  datosPersona: Persona[] = [];
  buscarTexto:string = "";
  datoPersona!:Persona;
  mostrarNulo: boolean = false;
  constructor(private personaService:PersonaService){

  }
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

  buscar(){
    console.log(this.buscarTexto);
    this.personaService.getPersonaByIdentificacion(this.buscarTexto).subscribe({
      next:(complete)=>{
        console.log(complete);
        if(complete != null){
          this.datoPersona = complete;
          this.mostrarNulo = true;
          setTimeout(() => {
            this.mostrarNulo = false;;
          }, 2000)
        }else{
          this.mostrarNulo = true;
          setTimeout(() => {
            this.mostrarNulo = false;;
          }, 2000)
        }
        
      },error: (err) => {
        console.log(err);
        this.mostrarNulo = true;
        setTimeout(() => {
          this.mostrarNulo = false;;
        }, 2000)
      }
    });
  }

}
