/**
 * SOBRE RETORNOS
 */


/* Funções com retorno como fazer, como fazer e cuidados */
let resultado = soma(5, 10);
console.log(`O resultado desta função é ${resultado}.`);
console.log(`O resultado desta função é ${soma(10, 20)}`);

function soma(numA, numB) {
    return numA + numB;
}
console.log();


/* Exemplo de função com retorno no dia-a-dia */
let userName = getFirstName('Erick-Ferreira-da-Silva', "-");
console.log(`Seja bem vindo, ${userName}!`);

userName = getFirstName("Erick Ferreira da Silva", " ");
console.log(`Seja bem vindo, ${userName}!`);

userName = getFirstName('Erick_Ferreira_da_Silva', "_");
console.log(`Seja bem vindo, ${userName}!`);

function getFirstName(name, splitChar) {
    let firstName = name.split(splitChar)[0];
    return firstName;
}
console.log();