/**
 * FUNÇÕES COM PARÂMETROS
 */


/* Lidando com funções com parâmetros */
torrar('pão de forma', "Roger");
torrar('pão integral', 'Janaína');

function torrar(pao, nome = '(Cliente)', valor = 0) {
    console.log('Torrada feita com ' + pao);
    console.log("Ela é um pedido de " + nome);
    console.log('O valor total é ' + valor);
    console.log();
}


/* Escopo de variáveis e múltiplos parâmetros */

// A variável 'pao' só existe dentro do escopo da função
// console.log(pao);


/* Funções com parâmetros */
torrar('pão na chapa', 'Erick', 10.5);


/* Evite gambiarras */
torrar("pão de queijo", 'Tereza', undefined);


/* Interpolação de Strings */
createStringConnection("db_products","Erick","1234");

function createStringConnection(dataBaseName,user,pass) {
    console.log(`connect:DBCONNECT;user=${user};pass:${pass};initial_database=` + dataBaseName);
    console.log();
}