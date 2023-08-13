export class Serie {
    constructor(imagen, nombre, descripcion) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categorias = [];
        this.episodios = [];
        this.actores = [];
        this.directores = [];
    }
}
