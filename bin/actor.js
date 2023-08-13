import { Persona } from "./persona.js";
export class Actor extends Persona {
    constructor(nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
        this.seriesActuando = [];
    }
    agregarSerieActuando(nombreSerie) {
        this.seriesActuando.push(nombreSerie);
    }
    mostrarSeriesActuando() {
        console.log("Series en las que actuó " + this.nombre + ":");
        this.seriesActuando.forEach((serie) => {
            console.log("- " + serie);
        });
    }
    motrarDatos() {
        console.log(this.nombre);
        console.log(this.fotografia);
        console.log(this.descripcion);
        this.mostrarSeriesActuando();
    }
}
