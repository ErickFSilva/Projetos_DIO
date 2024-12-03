/**
 *  CAIXAS E ARMÁRIOS
 */


/* Guardando coisas em armários ao invés de caixas */
let pokemon = ["pikachu", "charmander", "bulbasaur"];

console.log(pokemon);


/* Como abrir portas específicas de seu armário */
console.log(pokemon[0]);
console.log(pokemon[1]);
console.log(pokemon[2]);
console.log();


/* Vantagens de se utilizar vetores */
pokemon.pop(); // remove o último elemento do array

console.log(pokemon);

pokemon.shift(); // remove o primeiro elemento do array

console.log(pokemon)
console.log();


/* Comparando vetores entre linguagens */
let nomesPokemon = ["pikachu", 10, "bulbasaur"];

console.log(nomesPokemon);
console.log(nomesPokemon.indexOf(10));

nomesPokemon.splice(1,1); // remove 1 elemento a partir do índice 1

console.log(nomesPokemon);
console.log();


/**
 * MATRIZES PRA QUE TE QUERO
 */


/* Trabalhando com Matrizes */
let timePokemon = [
    ["pikachu", "M", "level 1"],
    ["charmander", "F", "level 4"]
];

console.log(timePokemon);
console.log(timePokemon[0]);
console.log(timePokemon[1]);
console.log(timePokemon[0][0]);
console.log(timePokemon[1][0]);
console.log();

console.log("O pokemon '" + timePokemon[1][0] + "' é do sexo '" + timePokemon[1][1] + "' e está no nível '" + timePokemon[1][2] + "'.");
console.log();


/* O que dá pra fazer com vetores e matrizes */
console.log(nomesPokemon.length);
console.log(nomesPokemon[1].length);
console.log();

console.log(timePokemon.length);
console.log(timePokemon[1].length);
console.log();