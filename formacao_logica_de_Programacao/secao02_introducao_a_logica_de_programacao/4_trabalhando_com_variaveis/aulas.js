/* Declarando variáveis na prática: */
console.log("Digite o nome do seu jogador.");
let nickname = "Erick";
console.log("Bem vindo, " + nickname + '!');
console.log("\n");


/* Estrutura do nosso programa */
console.log(nickname + " entrou no servisor.");
console.log("\n");


/* A diferença de constante e variável */
// Não se altera os valores de constantes...
const notificacao = "Pokemon GO diz";
console.log(notificacao +": tem um novo pokemin na região.")
console.log(notificacao + ": você foi derrotado por um líder.")
console.log("\n");



/* Colocando seu conhecimento em prática */
let poteCafe = "Café pilão";
let poteAcucar = "Açucar cristal";
let poteBiscoito = "Biscoito maizena";
const mensagemDaVovo = "Na cozinha da vovó hoje tem: ";

console.log(mensagemDaVovo + poteCafe + " - " + poteAcucar + " - " + poteBiscoito);
console.log("\n");

poteCafe = "Café 3 corações";

console.log(mensagemDaVovo + poteCafe + " - " + poteAcucar + " - " + poteBiscoito);
console.log("\n");