const fibonacci = function(valor) {

let anterior=0;
let atual=1;
let proximo=1;

for(let i = 0; i < valor; i++){
console.log(proximo);

anterior = atual + proximo; //2  //3
atual = proximo;//1 //2
proximo = anterior //2 
}
};
fibonacci(9)

// Do not edit below this line
module.exports = fibonacci;
