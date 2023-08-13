import { Persona } from "./persona.js"

export class Director extends Persona {
    
    seriesDirigidas: string[];

    constructor (nombre: string, fotografia: string,
    descripcion: string) {

        super(nombre, fotografia, descripcion);
        this.seriesDirigidas = [];
    };

    agregarSerieDirigida(nombreSerie: string) {
        this.seriesDirigidas.push(nombreSerie);
    }

    mostrarSeriesDirigidas() {
        console.log("Series dirigidas por " + this.nombre + ":");
        this.seriesDirigidas.forEach((serie) => {
            console.log("- " + serie);
        });
    }

    motrarDatos() {
        console.log("Detalles Director:")
        console.log(this.nombre);
        console.log(this.fotografia);
        console.log(this.descripcion);
        this.mostrarSeriesDirigidas();

    }


}