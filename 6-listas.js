console.log("          ");
console.log("          ");
console.log("          ");
console.log("*** TRABALHANDO COM LISTAS ***");
console.log("          "); 
console.log("          ");

/* VARIÁVEIS */
const salvador = "Salvador, ";
const saoPaulo = "São Paulo, ";
const rioDeJaneiro = "Rio de Janeiro";
/* IMPRIMINDO AS VARIÁVEIS */
console.log("(variável) - DESTINOS : " + salvador + saoPaulo + rioDeJaneiro);
console.log("          ");

/* ARRAYS */
const destinos = new Array(
    "Salvador",
    " São Paulo",
    " Rio de Janeiro",
);
/* IMPRIMINDO O ARRAY */
console.log("(array) - DESTINOS: " + destinos);
console.log("          ");

/* ADICIONANDO ÍTENS À LISTA DO CONSTRUTOR */
destinos.push(" Curitiba");
console.log("(array incrementado) - DESTINOS: " + destinos);
console.log("          ");

/* REMOVENDO UM ÍTEM DA LISTA */
destinos.splice(1,1);
console.log("(array decrementado) - DESTINOS: " + destinos);
console.log("          ");

/* iMPRIMINDO PARTE DA LISTA */
console.log("DESTINO SELECIONADO: " + destinos[1]);
console.log("          ");

console.log("          ");
console.log("          ");
console.log("          ");

