console.log("\n ************ TRABALHANDO COM CONDICIONAIS ************");
console.log("-------------------------------------------------------------------------------------------");

const destinos = new Array(
    " Salvador",
    " São Paulo",
    " Rio de Janeiro",
);

const idadeComprador = 22;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = " Curitiba";

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let cont = 0;
let destinoExistente = false;

while (cont < destinos.length) {
    if (destinos[cont] == destino) {
        console.log("\n Destino existe!!!");
        destinoExistente = true;
        break;
    }
    cont++;
}

if (destinoExistente == false) {
    console.log("\n Destino não existe!!!");
}

if (podeComprar && destinoExistente) {
    console.log(" Boa viagem!!!");
} else {
    console.log(" Desculpe. Houve um erro!");
}

for (let contador = 0; contador < destinos.length; contador++) {
    if (destinos[contador] == destino) {
        console.log("\n Destino existe!!!");
        destinoExistente = true;
    }
}






console.log("\n\n\n\n\n");