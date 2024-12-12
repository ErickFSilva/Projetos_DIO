/**
 * DESAFIO DO FELIPÃO 3: Escrevendo as Classes de Um Jogo
 */

class heroi {

    // Construtor
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo // (ex: guerreiro, mago, monge, ninja)
    }

    // Métodos

    atacar() {
        console.log(`O tipo ${this.tipo} atacou usando ${this.ataque(this.tipo)}`)
    }

    ataque(tipo) {

        if (tipo === "mago") { return "magia" }
        else if (tipo === "guerreiro") { return "espada" }
        else if (tipo === "monge") { return "artes marciais" }
        else if (tipo === "ninja") { return "shuriken" }

    }
}


// nome, idade, tipo (ex: mago, guerreiro, monge, ninja )
let heroi1 = new heroi("Lavrovite", "35", "mago")
let heroi2 = new heroi("IsYou", "23", "guerreiro")
let heroi3 = new heroi("Carateca", "44", "monge")
let heroi4 = new heroi("XuguiLau", "26", "ninja")

// Saída
heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()