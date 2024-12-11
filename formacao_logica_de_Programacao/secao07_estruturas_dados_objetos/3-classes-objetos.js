/**
 * INTRODUÇÃO A CLASSES E OBJETOS
 */


class formaDeBolo {

    constructor(saborDaMassa, saborRecheio) {
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    descrever() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com sabor de ${this.saborRecheio}`);
    }

    assar() {
        console.log(`Assando bolo de ${this.saborDaMassa}`);
    }

}

let boloFesta = new formaDeBolo("chocolate", "prestígio");
let boloPremium = new formaDeBolo("chocolate", "chocolate Suíço");

console.log(boloFesta);
console.log();

console.log(boloFesta.saborDaMassa);
console.log(boloFesta.saborRecheio);
console.log();

boloFesta.descrever();
boloPremium.descrever();
console.log();

boloPremium.assar();
console.log();
