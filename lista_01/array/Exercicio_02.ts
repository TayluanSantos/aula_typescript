import readlineSync = require('readline-sync');

//Iniciar array com 10 números inteiros
const numeros : Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

// Usuario digita um número
let numero : number = readlineSync.questionInt("Por favor,digite um numero: ");

//Verifica se o número existe dentro do array ou não
if(numeros.includes(numero)){
    console.log(`O número ${numero} está localizado na posição: ${numeros.indexOf(numero)}`);
} else {
    console.log(`O número ${numero} não foi encontrado.`);
}
