import { Serie } from "./serie.js";

export class ListaDeSeries {
    series: Serie[];

    constructor() {
        this.series = [];
    }

    agregarSerie(serie: Serie) {
        this.series.push(serie);
    }

    mostrarSeries() {
    this.series.forEach((serie) => {
        console.log("Nombre:", serie.nombre);
        console.log("Descripción:", serie.descripcion);
        console.log("-----");
    });
    }
}

