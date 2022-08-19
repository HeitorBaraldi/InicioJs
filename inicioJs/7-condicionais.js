console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

const idadeComprador = 19;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possiveis");
console.log(listaDeDestinos);


// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
//     console.log(listaDeDestinos);

// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);
//     console.log(listaDeDestinos);
// } else {

//     console.log("Não é maior de idade e não está acompnhado");
//     console.log(listaDeDestinos);

// };



if (idadeComprador >= 18 || estaAcompanhada==true) {
    console.log("Passagem comprada");
    listaDeDestinos.splice(2, 1);
    console.log(listaDeDestinos);
} else {

    console.log("Não é maior de idade e não está acompanhado");
    console.log(listaDeDestinos);

};

console.log("Embarque: \n\n")
if(idadeComprador > 18 && temPassagemComprada) {
    console.log("BOA VIAGEM")
} else {
    console.log("NÃO PODE EMBARCAR")
}