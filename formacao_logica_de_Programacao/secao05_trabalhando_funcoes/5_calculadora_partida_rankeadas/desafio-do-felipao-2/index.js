/**
 * DESAFIO 2 - CALCULADORA DE PARTIDAS RANKEADAS
 */


let nomeJogador = "Erick";
let nivelJogador = partidas(98, 14);

console.log(`O jogador ${nomeJogador} está no nível: ${nivelJogador}`);
console.log();


function partidas(vitorias, derrotas) {

    let rankeadas = vitorias - derrotas;

    numeroVitorias(rankeadas);

    if (rankeadas <= 0) { return "Noob" }
    else if (rankeadas >= 1 && rankeadas <= 10) { return "Ferro"; }
    else if (rankeadas >= 11 && rankeadas <= 20) { return "Bronze" }
    else if (rankeadas >= 21 && rankeadas <= 50) { return "Prata" }
    else if (rankeadas >= 51 && rankeadas <= 80) { return "Ouro" }
    else if (rankeadas >= 81 && rankeadas <= 90) { return "Diamante" }
    else if (rankeadas >= 91 && rankeadas <= 100) { return "Lendário" }
    else if (rankeadas >= 101) { return "Imortal" }

}

function numeroVitorias(rankeadas) {

    if (rankeadas > 0) {
        console.log(`${nomeJogador} obteve vitórias: ${rankeadas}`);
    }
    else {
        console.log(`O jogador não possui vitórias suficientes para entrar no ranking`);
    }

}