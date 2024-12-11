/**
 * JSON
 */


/* Introdução ao JSON */


/* Significado de JSON: */
console.log("Javascript Object Notation");
console.log();


/* Transferindo dados com JSON */
let name = "Erick";
let age = 28;
let products = ["Mouse 2xm", "Teclado mecânico", "Monitor"];
let productsValues = [29.90, 129.90, 899.90];

generateInvoice(name, age, products, productsValues);

function generateInvoice(name, age, products, productsValues) {
    console.log("O comprador é " + name);
    console.log("A idade é " + age);
    console.log("O produto é " + products[0]);
    console.log("O valor é " + productsValues[0]);
    console.log();
}



/* Trabalhando com JSON na pratica */
let invoice = {
    name: "Erick",
    age: "28",
    products: {
        0: ["Mouse 2xwm", 29.0],
        1: ["Teclado mecânico", 129.90],
        2: ["Monitor", 899.90]
    },
    taxes: 98.90
};

console.log(invoice);
console.log();

generateInvoice2(invoice);

function generateInvoice2(invoice) {
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade é ${invoice.age}`);
    console.log(`A taxa é ${invoice.taxes}`);

    for (let index in invoice.products) {
        let [productName, productPrice] = invoice.products[index];
        console.log(`- ${productName}: R$ ${productPrice}`);
    }

    console.log();
}


/* Por que utilizar JSON */
