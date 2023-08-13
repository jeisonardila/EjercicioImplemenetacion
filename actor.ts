import { Persona } from "./persona.js"

export class Actor extends Persona {
    seriesActuando: string [];

    constructor (nombre: string, fotografia: string,
    descripcion: string) {

        super(nombre, fotografia,descripcion);
        this.seriesActuando = [];
        
    }
}