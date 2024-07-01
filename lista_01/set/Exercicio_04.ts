import readlineSync = require('readline-sync');

//Iniciar array com 10 números inteiros
const numeros : Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

// Usuario digita um número
let numero : number = readlineSync.questionInt("Por favor,digite um numero: ");


//Verifica se o número existe dentro do set 
if(numeros.has(numero)){
    console.log(`O número ${numero} foi encontrado.`);
} else {
    console.log(`O número ${numero} não foi encontrado.`);
}
