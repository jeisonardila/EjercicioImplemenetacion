import { Serie } from "./serie.js"

export class Episodio {
    numero: number;
    nombre: string;
    resumen: string;
    duracion: number;
    serie: Serie;

    constructor (numero: number, nombre: string, resumen: string, duracion: number, serie: Serie) {
        this.numero = numero;
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
        this.serie = serie;

    }
}