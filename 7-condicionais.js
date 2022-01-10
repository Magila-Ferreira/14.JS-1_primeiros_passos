console.log("          ");
console.log("************ TRABALHANDO COM CONDICIONAIS ************");
console.log("          ");

const destinos = new Array(
    "Salvador",
    " São Paulo",
    " Rio de Janeiro",
);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("(DESTINOS: " + destinos);
console.log("          ");

if (idadeComprador >= 18) {
    console.log(" *** Passagem comprada. Comprador maior de idade. *** ");
} else if (estaAcompanhada) {
    console.log("Peça para seu/sua acompanhante realizar a compra das passagens!");
} else {
    console.log(" *** Passagem não pode ser vendida. Comprador menor de idade. *** ");
}


console.log("          ");
console.log("          ");
console.log("          ");