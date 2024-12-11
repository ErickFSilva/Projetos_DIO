// Definição da classe ItemMagico
class ItemMagico {
    // Construtor que inicializa os atributos do item mágico
    constructor(tipo, dano, resistencia) {
        this.tipo = tipo; // tipo do item (ex: "arma", "armadura", etc.)
        this.dano = dano; // dano do item
        this.resistencia = resistencia; // resistência do item
    }

    // Calcula o dano causado pelo item em combate
    calcularDano() {
        if (this.tipo === 'arma') {
            return this.dano * 2; // Armas causam dano dobrado
        } else if (this.tipo === 'armadura') {
            return this.dano * 0.5; // Armaduras causam metade do dano (simulado)
        } else {
            return this.dano; // Outros tipos de item causam o dano padrão
        }
    }
}

// Solicita ao usuário para digitar os atributos do item mágico
const tipoItem = gets(); // Exemplo: "arma"
const danoItem = parseInt(gets()); // Exemplo: 50
const resistenciaItem = parseInt(gets()); // Exemplo: 30

// Cria um objeto ItemMagico personalizado com base no tipo escolhido
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// Imprime os atributos do item personalizado
print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);
