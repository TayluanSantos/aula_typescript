import { Stack } from "../../interface/Stack";
import entrada = require('readline-sync');

const pilha = new Stack<string>();
let continua = true;
let opcao;

while(continua) {

    console.log("******************** LIVRARIA TAYSANTOS ******************** ");
    console.log(" 1 - Adicionar Livro na Pilha");
    console.log(" 2 - Listar Todos os Livros");
    console.log(" 3 - Retirar Livro da Pilha");
    console.log(" 0 - Sair ");
    console.log("***************************************************************** ");
    
    opcao = entrada.questionInt("Por favor,digite uma das opcoes acima: ");

    console.clear();

    switch(opcao) {
        case 1: 

            let livro = entrada.question("Por favor,digite o nome do livro: ");
            pilha.push(livro);
    
            console.log("\nPilha:\n");
            pilha.printStack();
            console.log("\nLivro adicionado!\n\n");
    
            break
    

        case 2: 

            if(pilha.isEmpty()) {
                console.log("A pilha está vazia.")
            } else {
                console.log("\nLista de livros na pilha:\n");
                pilha.printStack();
                console.log("\n")
            }

            break
    
        case 3 :

            if(pilha.isEmpty()) {
                console.log("A pilha está vazia.")
            } else {
                let livroRemovido = pilha.pop();
                console.log(`O livro ${livroRemovido} foi removido da pilha.`)
                console.log("\nLista de livros na pilha:");
                pilha.printStack();
                console.log("\n")
            }

            break
                
        case 0: 
        console.log("Programa Finalizado!")
        continua = false;
    }
}
