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

    constructor (imagen: string, nombre: string, descripcion: string) {
            this.imagen = imagen;
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.categorias = [];
            this.episodios = [];
            this.actores = [];
            this.directores = [];

        }
}