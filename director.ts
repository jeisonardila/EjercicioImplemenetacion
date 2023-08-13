import { Persona } from "./persona.js"

export class Director extends Persona {
    
    seriesDirigidas: string[];

    constructor (nombre: string, fotografia: string,
    descripcion: string) {
        
        super(nombre, fotografia, descripcion);
        this.seriesDirigidas = [];
    };
}