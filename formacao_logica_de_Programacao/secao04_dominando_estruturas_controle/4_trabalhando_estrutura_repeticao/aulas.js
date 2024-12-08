/**
 * COMO FUNCIONA O FOR E O WHILE
 */


// For
for (let i = 0; i < 4; i++) {
    console.log(i);
    console.log("Aumentar o contador");
}
console.log();


// Cuidados com for
let pontosDeVida = 0;

for (let i = 1; i <= 10; i++) {
    pontosDeVida += 1;
    console.log("Tomou poção mágica " + i);
}

console.log(pontosDeVida + " Totais ");


// While
let contador = 0;

while (contador < 3) {
    contador++;
    console.log(contador);
}


// Do while
contador = 10;

do {
    contador++;
    console.log(contador);
} while (contador < 16);