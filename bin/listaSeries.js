export class ListaDeSeries {
    constructor() {
        this.series = [];
    }
    agregarSerie(serie) {
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
