import { Queue } from "../../interface/Queue";
import entrada = require('readline-sync');

const fila = new Queue<string>();
let continua : boolean = true;
let opcao : number;

while(continua) {

    console.log("******************** BANCO DO BRASILDOBRASIL ******************** ");
    console.log(" 1 - Adicionar Cliente na Fila");
    console.log(" 2 - Listar Todos os Clientes");
    console.log(" 3 - Retirar Cliente na Fila");
    console.log(" 0 - Sair ");
    console.log("***************************************************************** ");
    
    opcao = entrada.questionInt("Por favor,digite uma das opcoes acima: ");

    console.clear();

    switch(opcao) {
        case 1: 

            let cliente : string = entrada.question("\nPor favor,digite o nome do cliente: ");
            fila.enqueue(cliente);
    
            console.log("\nFila:");
            fila.printQueue();
            console.log("\nCliente adicionado!\n\n");

    
            break
    

        case 2: 

            if(fila.isEmpty()) {
                console.log("A fila está vazia.");
            } else {
                console.log("\nLista de pessoas na fila:\n");
                fila.printQueue();
                console.log("\n")
            }

            break
    
        case 3 :

            if(fila.isEmpty()) {
                console.log("A fila está vazia.");
            } else {
                let clienteRemovido  = fila.dequeue();
                console.log(`Cliente Removido: ${clienteRemovido}`)
                console.log("\nLista de pessoas na fila:");
                fila.printQueue();
                console.log("\n")
            }

            break
                
        case 0: 
        console.log("Programa Finalizado!");
        continua = false;
    }
}
