import { Categoria } from "./categoria.js"
import { Episodio } from "./episodio.js"
import { Plataforma } from "./plataforma.js"
import { Actor } from "./actor.js"
import { Director } from "./director.js"


export class Serie {
    imagen: string;
    nombre: string;
    descripcion: string;

    categorias: Categoria[];
    episodios: Episodio[];
    actores: Actor[];
    directores: Director[];
    plataformas: Plataforma[];

    constructor (imagen: string, nombre: string, descripcion: string) {
            this.imagen = imagen;
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.categorias = [];
            this.episodios = [];
            this.actores = [];
            this.directores = [];
            this.plataformas = [];

        }

        agregarCategoria(categoria: Categoria) {
            this.categorias.push(categoria);
        }
        
        agregarDirector(director: Director) {
            this.directores.push(director);
        }
        
        agregarActor(actor: Actor) {
            this.actores.push(actor);
        }
        agregarEpisodio(episodio: Episodio) {
            this.episodios.push(episodio);
        }

        agregarPlataforma(plataforma: Plataforma) {
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
                console.log("Descripcion: "+ this.descripcion);
                
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

