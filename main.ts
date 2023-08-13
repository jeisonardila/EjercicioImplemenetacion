import { Actor } from "./actor.js"
import { Director } from "./director.js"
import { Categoria } from "./categoria.js"
import { Episodio } from "./episodio.js"
import { Plan } from "./plan.js"
import { Plataforma } from "./plataforma.js"
import { ListaDeSeries } from "./listaSeries.js"
import { Serie } from "./serie.js"

// DIRECTORES
const director1 = new Director("Director 1", "URL-foto-1", "Descripción Director 1");
const director2 = new Director("Director 2", "URL-foto-2", "Descripción Director 2");
const director3 = new Director("Director 3", "URL-foto-3", "Descripción Director 3");

// SERIES DIRIGIDAS DIRECTOR
director1.agregarSerieDirigida("Serie A");
director1.agregarSerieDirigida("Serie B");
director1.agregarSerieDirigida("Serie C");

director2.agregarSerieDirigida("Serie D");
director2.agregarSerieDirigida("Serie E");
director2.agregarSerieDirigida("Serie F");

director3.agregarSerieDirigida("Serie G");
director3.agregarSerieDirigida("Serie H");
director3.agregarSerieDirigida("Serie I");

//ACTORES

const actor1 = new Actor("Actor 1", "URL-foto-1", "Descripción Actor 1");
const actor2 = new Actor("Actor 2", "URL-foto-2", "Descripción Actor 2");

// ACTUACIONES
actor1.agregarSerieActuando("Serie A");
actor1.agregarSerieActuando("Serie B");

actor2.agregarSerieActuando("Serie C");
actor2.agregarSerieActuando("Serie D");
actor2.agregarSerieActuando("Serie E");


//CATEGORIAS
const accion = new Categoria("Acción");
const drama = new Categoria("Drama");
const comedia = new Categoria("Comedia");
const cienciaFiccion = new Categoria("Ciencia Ficción");
const terror = new Categoria("Terror");


//PLANES
const planMensual1 = new Plan("Mensual", 20.000);
const planTrimestral1 = new Plan("Trimestral", 40.000);
const planAnual1 = new Plan("Anual", 180.000);

const planMensual2 = new Plan("Mensual", 18.000);
const planTrimestral2 = new Plan("Trimestral", 34.000);
const planAnual2 = new Plan("Anual", 150.000);


// PLATAFORMAS
const plataforma1 = new Plataforma("StreamWorld", "www.streamworld.com");
const plataforma2 = new Plataforma("CineFlix", "www.cineflix.com");


plataforma1.agregarPlan(planMensual1);
plataforma1.agregarPlan(planTrimestral1);
plataforma1.agregarPlan(planAnual1);

plataforma2.agregarPlan(planMensual2);
plataforma2.agregarPlan(planTrimestral2);
plataforma2.agregarPlan(planAnual2);

//SERIES
const serie1 = new Serie(
    "https://url-imagen-1.com",
    "Breaking Waves",
    "Drama intenso que sigue las vidas de pescadores en una pequeña ciudad costera."
);

const serie2 = new Serie(
    "https://url-imagen-2.com",
    "Galactic Explorers",
    "Aventuras intergalácticas de un grupo de exploradores espaciales que descubren mundos asombrosos."
);

const serie3 = new Serie(
    "https://url-imagen-3.com",
    "City of Shadows",
    "Misterio y suspenso en la oscura metrópolis mientras un detective lucha contra el crimen."
);



serie1.agregarCategoria(accion);
serie1.agregarCategoria(drama);
serie2.agregarCategoria(comedia);
serie3.agregarCategoria(cienciaFiccion);


serie1.agregarDirector(director1);
serie1.agregarDirector(director2);
serie2.agregarDirector(director3);

serie1.agregarActor(actor1);
serie1.agregarActor(actor2);
serie2.agregarActor(actor1);
serie2.agregarActor(actor2);
serie3.agregarActor(actor2);
serie3.agregarActor(actor1);

serie3.agregarPlataforma(plataforma1);
serie3.agregarPlataforma(plataforma2);



// LISTADO SERIES
const listadoSeries = new ListaDeSeries();

listadoSeries.agregarSerie(serie1);
listadoSeries.agregarSerie(serie2);
listadoSeries.agregarSerie(serie3);

//EPISODIOS

// Para la Serie 1
const episodioSerie1_1 = new Episodio(1, "El Comienzo", "Introducción a la vida de los pescadores.", 45, serie1);
const episodioSerie1_2 = new Episodio(2, "Mareas Cambiantes", "Desafíos enfrentados en alta mar.", 40, serie1);
const episodioSerie1_3 = new Episodio(3, "Secretos del Océano", "Descubrimiento de historias ocultas bajo el agua.", 42, serie1);
const episodioSerie1_4 = new Episodio(4, "Unión en la Costa", "Los pescadores se unen para enfrentar un problema.", 38, serie1);

// Para la Serie 2
const episodioSerie2_1 = new Episodio(1, "El Inicio del Viaje", "El equipo de exploradores parte hacia lo desconocido.", 50, serie2);
const episodioSerie2_2 = new Episodio(2, "Aterrizaje en Nuevo Mundo", "Exploración del primer planeta alienígena.", 55, serie2);
const episodioSerie2_3 = new Episodio(3, "Encuentro Extraterrestre", "El equipo se encuentra con una forma de vida alienígena.", 48, serie2);
const episodioSerie2_4 = new Episodio(4, "Secretos de las Estrellas", "Revelaciones sobre el origen del universo.", 53, serie2);
const episodioSerie2_5 = new Episodio(5, "El Regreso a Casa", "Desafíos para regresar a la Tierra.", 50, serie2);
const episodioSerie2_6 = new Episodio(6, "Episodio Final", "Cierre emocionante de la aventura espacial.", 52, serie2);

// Para la Serie 3
const episodioSerie3_1 = new Episodio(1, "Noche en la Ciudad", "Un nuevo caso de misterio se presenta.", 45, serie3);
const episodioSerie3_2 = new Episodio(2, "Sombras en la Oscuridad", "Investigación en lugares tenebrosos.", 42, serie3);
const episodioSerie3_3 = new Episodio(3, "Pistas Secretas", "Descubrimiento de pistas ocultas.", 40, serie3);
const episodioSerie3_4 = new Episodio(4, "El Enigma del Reloj", "Un reloj antiguo lleva a nuevas revelaciones.", 43, serie3);
const episodioSerie3_5 = new Episodio(5, "La Conexión Perdida", "Conexiones inesperadas entre los casos.", 41, serie3);
const episodioSerie3_6 = new Episodio(6, "La Verdad Revelada", "Resolución final del misterio.", 48, serie3);
const episodioSerie3_7 = new Episodio(7, "El Regreso del Villano", "El villano regresa para un último enfrentamiento.", 45, serie3);
const episodioSerie3_8 = new Episodio(8, "La Ciudad en Paz", "La ciudad finalmente encuentra la tranquilidad.", 44, serie3);


//------------------------------------------------------------------
//1. 1. DEMOSTRACION MOSTRAR LISTADO DE TODAS LAS SERIES"
console.log("1. DEMOSTRACION MOSTRAR LISTADO DE TODAS LAS SERIES")
listadoSeries.mostrarSeries()

//2. DEMOSTRACION MOSTRAR DETALLE DE UNA SERIE CON METODO
console.log("2. DEMOSTRACION MOSTRAR DETALLE DE UNA SERIE CON METODO")
serie1.mostrarDetalleDeUnaSerie()


//3. DEMOSTRACION MOSTRAR LISTADO DE CATEGORIAS DE LA SERIE
console.log("3. DEMOSTRACION MOSTRAR LISTADO DE CATEGORIAS DE LA SERIE")
serie2.mostrarCategorias()


//4. MOSTRAR EL LISTADO DE DIRECTORES Y ACTORES DE UNA SERIE
console.log("4. MOSTRAR EL LISTADO DE DIRECTORES Y ACTORES DE UNA SERIE")
serie2.mostrarActores()
serie2.mostrarDirectores()

//5. MOSTRAR EL DETALLE DE UN DIRECTOR Y UN ACTOR
console.log("5. MOSTRAR EL DETALLE DE UN DIRECTOR Y UN ACTOR")
actor2.motrarDatos()
director1.motrarDatos()

//6. MOSTRAR EL LISTADO DE PLATAFORMAS
console.log("6. MOSTRAR EL LISTADO DE PLATAFORMAS")
serie3.mostrarPlataformas()

//7. MOSTRAR DETALLE DE UNA PLATAFORMA
console.log("7. MOSTRAR DETALLE DE UNA PLATAFORMA")
plataforma1.mostrarDetalle()

// 8. CREAR UNA NUEVA SERIE
const serie4 = new Serie(
    "https://url-imagen-3.com",
    "Secretos de la Ciudad a Medianoche",
    "Una oscura metrópolis envuelta en misterio y suspenso, donde un detective determinado lucha contra el crimen."
)
// 9. CREAR UNA NUEVA CATEGORIA
const aventura = new Categoria("Aventura");

// 10. CREAR UN NUEVO ACTOR
const actor3 = new Actor("Actor 3", "URL-foto-3", "Descripción Actor 3");
actor3.agregarSerieActuando("Serie A");
actor3.agregarSerieActuando("Serie B");

// 11. CREAR UN NUEVO DIRECTOR
const director4 = new Director("Director 4", "URL-foto-4", "Descripción Director 4");
director4.agregarSerieDirigida("Serie C");

// 12. AGREGAR CATEGORIA A UNA SERIE
serie4.agregarCategoria(aventura)

// 13. Agregar un actor a una serie
serie4.agregarActor(actor3)

// 14. Agregar un director a una serie
serie4.agregarDirector(director4)



