import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../interface/factura';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }

  setFactura(factura:Factura){
    return this.http.post<any>(`${environment.api}/storeFactura`,factura);
  }
  getFactura(identificacion:string){
    return this.http.get<Factura[]>(`${environment.api}/findFacturasByPersona/${identificacion}`);
  }
}
