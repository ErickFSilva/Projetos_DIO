/**
 * OPERADORES LÓGICOS
 */


/* Operador AND */
let idade = 18;
let vistoVerificado = false;
console.log((idade >= 18) && (vistoVerificado === true));


let moedasColetadas = 99;
let item = "estrela";
let resultado = (moedasColetadas === 100) && (item === "estrela");
console.log(resultado);


/* Operador OR */
let tempo = "chuva";
item = "pá";
let podeSair = (tempo !== "chuva") || (item === "guarda chuva");
console.log(`Nosso personagem pode sair? ${podeSair ? "Sim" : "Não"}`);


/* Operador NOT */
tempo = "chuva";
resultado = tempo !== "chuva";
console.log(resultado);
console.log(!resultado);
console.log(!!resultado);


tempo = "chuva";
let horario = 8;
resultado = !(tempo !== "chuva") && (horario > 6);
console.log(resultado);