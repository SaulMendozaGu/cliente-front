import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/assets/interface/persona';
import { PersonaService } from 'src/assets/services/persona.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.scss']
})
export class CrearClientesComponent {
  formularioPersona = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellidoPaterno: new FormControl('', [Validators.required]),
    apellidoMaterno: new FormControl('', [Validators.required]),
    identificacion: new FormControl('', [Validators.required])
  });
  respuestaGuardar:String = "";
  constructor(private personaService:PersonaService ){

  }

  guardar(){
    if(this.formularioPersona.valid){
      let datosPersona = this.formularioPersona.value;
    
      this.personaService.setPersona(datosPersona).subscribe({
        next:(complete)=>{
          console.log(complete);
          sessionStorage.setItem("usuario",complete);
          this.respuestaGuardar = "Cliente registrado";
          setTimeout(() => {
            this.respuestaGuardar = "";
          }, 2000);
        },error: (err) => {
          console.log(err);
          this.respuestaGuardar = "Erro al realizar registrado";
          setTimeout(() => {
            this.respuestaGuardar = "";
          }, 2000);
        }
      });
     

    }else{
      this.respuestaGuardar = 'Todos los campos son obligatorios'
      setTimeout(() => {
        this.respuestaGuardar = ""
      }, 3000);
    }
  }
}
