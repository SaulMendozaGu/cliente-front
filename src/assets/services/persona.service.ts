import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../interface/persona';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  getPersona(){
    return this.http.get<Persona[]>(`${environment.api}/findPersonas`)
  }
  getPersonaByIdentificacion(identificacion:string){
    return this.http.get<Persona>(`${environment.api}/findPersonaByIdentificacion/${identificacion}`)
  }
  setPersona(persona: any){
    return this.http.post<any>(`${environment.api}/storePersona`,persona);
  }
  deletPersona(identificacion: Persona){
    return this.http.delete<any>(`${environment.api}/storePersona/${identificacion}`);
  }
}
