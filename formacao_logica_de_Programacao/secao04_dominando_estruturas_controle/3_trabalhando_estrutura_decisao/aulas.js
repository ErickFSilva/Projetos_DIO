/**
 * INTRODUÇÃO A SWITCH
 */


/* Switch - Case */
let fruta = "Banana";

switch (fruta) {
    case "Laranja":
        console.log("Suco de laranja");
    
    case "Banana":
        console.log("Vitamina de banana");

    case "Maçã":
        console.log("Suco de maçã");
}
console.log();


/* Break */
fruta = "Uva";

switch (fruta) {
    case "Pera":
        console.log("Vitamina de Banana com pera");
        break;

    case "Uva":
        console.log("Suco de uva");
        break;

    case "Morango":
        console.log("Suco de morango");
        break;
}
console.log();


/* Default */
fruta = "Uva";

switch (fruta) {
    case "Pera":
        console.log("Vitamina de Banana com pera");
        break;

    case "Uva":
        console.log("Suco de uva");
        break;

    case "Morango":
        console.log("Suco de morango");
        break;

    default:
        console.log("Suco genérico!");
}
console.log();


/* Possibilidade do switch case */
fruta = "Banana";

switch (fruta) {
    case "Pera":
    case "Banana":
        console.log("Vitamina de Banana com pera");
        break;

    case "Uva":
        console.log("Suco de uva");
        break;

    case "Morango":
        console.log("Suco de morango");
        break;

    default:
        console.log("Suco genérico!");
}
console.log();