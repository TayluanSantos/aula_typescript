import readlineSync = require('readline-sync');

// Criando um Array de string
const cores : Array<string> = new Array<string>();

// Adicionando valores ao Array
for(let i = 1 ; i <= 5 ; i++){
    cores.push(readlineSync.question("Por favor,digite uma cor: "));
}

// Listando todas as cores
console.log("\nListar cores:");
console.table(cores);

// Listando as cores em ordem alfabética
console.log("\nOrdenar cores:");
console.table(cores.sort());





