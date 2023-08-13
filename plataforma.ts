import { Plan } from "./plan"

export class Plataforma {
    nombre: string;
    sitioWeb: string;
    plan: Plan [];
    
    constructor (nombre: string, sitioWeb: string){
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.plan = [];
    }

}