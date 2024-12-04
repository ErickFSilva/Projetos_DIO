/**
 * CONHECENDO OS PRINCIPAIS OPERADORES MATEMÁTICOS
 */


/* Operadores matemáticos */
let idade = 30;
console.log(idade);

idade = 30 + 6;
console.log(idade);

idade = 30 - 6;
console.log(idade);

let codigoProduto = 1024;
let codigoExato = codigoProduto - 512;
console.log(codigoExato);

let precoProduto = 100.99;
let valorComTaxa = precoProduto * 2
let valorParcelado = valorComTaxa / 4
console.log(valorComTaxa);
console.log(valorParcelado);

let multiplicador = 4;
let multiplicando = 12;
let produto = multiplicador * multiplicando
console.log("O resultado da multiplicação é " + produto);
console.log();


/* Incremento e decremento */
let contador = 1;
console.log(contador);

contador++;
console.log(contador);

contador--;
console.log(contador);
console.log();


/* Calcular e atribuir */
let preco = 10;
console.log(preco += 4);
console.log(preco -= 7);
console.log(preco *= 6);
console.log(preco /= 3);
console.log();


/* Definindo escopo */
let resultado = 2 * 5 + 5;
console.log(resultado);

resultado = 2 * (5 + 5);
console.log(resultado);

resultado = 2 * ((5 + 5) - 10);
console.log(resultado);
console.log();