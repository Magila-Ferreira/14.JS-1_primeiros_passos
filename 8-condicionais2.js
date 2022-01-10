console.log("\n");
console.log("************ TRABALHANDO COM CONDICIONAIS ************");
console.log("-------------------------------------------------------------------------------------------");
console.log("\n");

const destinos = new Array(
    "Salvador",
    " São Paulo",
    " Rio de Janeiro",
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("(DESTINOS: " + destinos);
console.log("\n");

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log(" *** Passagem comprada com sucesso!!! *** ");
} else {
    console.log(" *** Passagem não pode ser vendida. Comprador menor de idade desacompanhado. *** ");
}

console.log("-------------------------------------------------------------------------------------------");
console.log("\n");

console.log("EMBARQUE: ");
console.log("\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!!!");
} else {
    console.log("Você não pode embarcar, não possui passagem comprada ou é menor de idade!");
}

console.log("\n\n\n");
