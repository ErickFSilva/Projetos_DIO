/**
 * OPERADORES DE COMPARAÇÃO
 */


/* Operadores de igual e diferença */

// = é utilizado para atribuição;
// == é utilizado para comparar o valor;
// === é utilizado para comparar o valor e o formato do conteúdo;
// !== é compara se há diferença nos valores;

let numero = "1";
console.log(numero == "1");
console.log(numero == 1);


let marca = "Apple";
console.log(marca !== "Apple");
console.log(marca !== "Samsung");


let resultado = marca !== "Samsung";
console.log(resultado);


let cpfBloqueado = "123.456.789-00";
let cpfUsuario = "987.654.321.00";
let ehCPFBloqueado = cpfUsuario === cpfBloqueado;
console.log("O usuário está barrado? " + ehCPFBloqueado);


let cpfPermitido = "111.111.111-00";
let cpfPassageiro = "222.222.222-11";
let ehBloqueado = cpfPassageiro !== cpfPermitido;
console.log("É um usuário invalido? ", ehBloqueado ? "Sim" : "Não");


/* Operadores de maior e menor */
let idadeMinima = 18;
let idadeUsuario = 18;
let idadePermitidaValida = idadeUsuario > idadeMinima;
console.log(idadePermitidaValida);

let idadePermitidaValida2 = idadeUsuario >= idadeMinima;
console.log(idadePermitidaValida2);


let idadeDeCorte = 50;
let idadeDoUsuario = 50;
let resultadoEhTerceiraIdade = idadeDeCorte < idadeDoUsuario;
console.log(resultadoEhTerceiraIdade);

let resultadoEhTerceiraIdade2 = idadeDeCorte <= idadeDoUsuario;
console.log(resultadoEhTerceiraIdade2);