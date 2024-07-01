import readlineSync = require('readline-sync');

// Criando um set
const numeros : Set<number> = new Set<number>();

// Usuário digita 10 números, e os valores são adicionados ao set
for(let i = 1 ; i <= 10 ; i++){
    numeros.add(readlineSync.questionInt("Por favor,digite um numero: "));
}

// Exibe todos os números presentes dentro do Set,ignorando valores duplicados.
console.log("\nListando dados do Set: ")

for(let numero of numeros) {
    console.log(numero);
}