console.log(`Trabalhando com listas`);
// const salvador = ;
// const saoPaulo = ;
// const rioDeJaneiro = ;


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista
console.log("Destinos possiveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);// começa em 0 a primeira posição
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]), console.log(listaDeDestinos[0]);