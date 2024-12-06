/**
 * INTRODUÇÃO A IF
 */


/* IF */
let ehLigado = false;

if (ehLigado) {
    console.log('Executou o comando'); // retorno de true
}


let possuiOvos = true;
let itensComprados = "";

if (possuiOvos) {
    itensComprados = "Leite";
}

console.log(
    "Item comprado: " + itensComprados
);
console.log();


/* ELSE */
possuiOvos = false;

if (possuiOvos) {
    itensComprados = "Leite";
}
else {
    console.log("Passou na seção de congelados");
    itensComprados = "Lasanha congelada";
}

console.log(
    "Item comprado: " + itensComprados
);
console.log();


/* ELSE IF */
let nivelDeFome = 1;

if (nivelDeFome === 1) {
    console.log("Pouca fome");
}
else if (nivelDeFome === 2) {
    console.log("Muita fome");
}
else {
    console.log("Você comeria mais que o Pica-pau");
}