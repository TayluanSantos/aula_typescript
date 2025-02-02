import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Corredor,Nadador,Ciclista {

    constructor(nome : string) {
        super(nome);
    }

    correr(): void {
       console.log("Atleta Correndo")
    }
    aquecer(): void {
       console.log("Atleta Aquecendo")
    }
    nadar(): void {
       console.log("Atleta Nadando")
    }
    pedalar(): void {
       console.log("Atleta Pedalando")
 
    }
    cansar(): void {
        console.log("Atleta Cansado")
    }
}