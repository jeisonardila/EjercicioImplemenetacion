import { Plan } from "./plan"

export class Plataforma {
    nombre: string;
    sitioWeb: string;
    planes: Plan [];
    
    constructor (nombre: string, sitioWeb: string){
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planes = [];
    }

    agregarPlan(plan: Plan) {
        this.planes.push(plan);
    }

    mostrarPlanes() {
        console.log("Planes de la plataforma " + this.nombre + ":");
        this.planes.forEach((plan) => {
            console.log("- " + plan.nombre + " - Precio: " + plan.precio);
        });
    }

    mostrarDetalle (){
        console.log("Detalle Plataforma: ")
        console.log(this.nombre)
        console.log(this.sitioWeb)
        this.mostrarPlanes()
    }

    eliminarPlan(nombrePlan: string) {
        const indice = this.planes.findIndex((plan) => plan.nombre === nombrePlan);
        if (indice !== -1) {
            this.planes.splice(indice, 1);
            console.log("Se ha eliminado el plan: " + nombrePlan);
        } else {
            console.log("No se encontró el plan: " + nombrePlan);
        }
    }


}


