import { Persona } from "./persona";

export interface Factura{
    id: String;
    fecha: string;
    monto: number;
    persona: Persona
}