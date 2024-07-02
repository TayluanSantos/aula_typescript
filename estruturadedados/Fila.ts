import { Queue } from "../interface/Queue";

const fila = new Queue<number>();

for(let i = 1 ; i <= 10 ; i++) {
    fila.enqueue(i);
}

console.log("\nExibir todos os Elementos da Fila: ");
fila.printQueue();

console.log("\nRemover elemento: " + fila.dequeue());
fila.printQueue();

console.log("\nExibir o 1º elemento da fila: " + fila.peek());

console.log("\nChecar se o Elemento 4 existe na fila? " + fila.contains(1));

console.log("\nA fila está vazia? " + fila.isEmpty());

