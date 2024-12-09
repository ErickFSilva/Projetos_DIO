/**
 * SOBRE FUNÇÕES
 */


/* Criando sua primeira função */
function torrar() {
    console.log('Torrando pão');
    injetarPao();
}

function injetarPao() {
    console.log("Preparando para injetar pão");
    console.log('Finalizado');
    console.log();
}


/* Cuidados na hora de trabalhar com funções */

// Não iniciar nomes de funções com números;
// Não iniciar funções com espaços, utilizar o padão camelCase;
// Utilize nomes que dê significados as funções;
// Crie uma função para cada ação, evite envelopar tudo em uma única função;

// Função que pega todos os dados
function getData() {
    console.log("Coletando dados...");
}

// Função que verifica os valores
function checkValues() {
    console.log("Verificando valores coletados...");
}

// Função que envia os dados para o banco de dados
function sendToDataBase() {
    console.log("Enviando dados para o banco de dados...");
}

// A função 'main' é responsavel por chamar todas as outras funções
function mainFunction() {
    torrar();
    console.log();

    getData();
    checkValues();
    sendToDataBase();
    console.log();

    enviarDados();
    console.log();
}

mainFunction();


/* Comparando funções entre liguagens de programação */

// JavaScript
function enviarDados() {
    let nomeDoBanco = "PostgreSQL";
    console.log("Salvando dados em: " + nomeDoBanco);

    if (nomeDoBanco !== "MySQL") {
        console.log(`Você não está trabalhando com o DB MySQL`);
    }
}
