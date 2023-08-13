export class Serie {
    constructor(imagen, nombre, descripcion) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categorias = [];
        this.episodios = [];
        this.actores = [];
        this.directores = [];
        this.plataformas = [];
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }
    agregarDirector(director) {
        this.directores.push(director);
    }
    agregarActor(actor) {
        this.actores.push(actor);
    }
    agregarEpisodio(episodio) {
        this.episodios.push(episodio);
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
    }
    mostrarCategorias() {
        console.log("Categorías:");
        this.categorias.forEach((categoria) => {
            console.log("- " + categoria.nombre);
        });
    }
    mostrarEpisodios() {
        console.log("Episodios:");
        this.episodios.forEach((episodio) => {
            console.log("- " + episodio.nombre);
        });
    }
    mostrarDirectores() {
        console.log("Directores:");
        this.directores.forEach((director) => {
            console.log("- " + director.nombre);
        });
    }
    mostrarActores() {
        console.log("Actores:");
        this.actores.forEach((actor) => {
            console.log("- " + actor.nombre);
        });
    }
    mostrarDetalleDeUnaSerie() {
        console.log("Detalles de la serie: " + this.nombre);
        console.log("Descripcion: " + this.descripcion);
        this.mostrarCategorias();
        this.mostrarDirectores();
        this.mostrarActores();
        this.mostrarEpisodios();
    }
    mostrarPlataformas() {
        console.log("Plataformas:");
        this.plataformas.forEach((plataforma) => {
            console.log("- " + plataforma.nombre);
        });
    }
}
