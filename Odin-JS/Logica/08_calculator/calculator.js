const add = function() {
	let num1 = 0;
  let num2= 0;
  
  console.log(num1 + num2)
};
add()

const subtract = function() {
	let num1=10; 
  let num2=4;

  console.log(num1-num2)
};
subtract()

const sum = function() {
	//Variaveis

let array1 = [7,11];
let soma = 0;

  //Somando valores do array
  //Length pega o numero de eleentos do array
  //dessa forma, nao é necessario saber quantos elementos o array possui

for (let i = 0; i < array1.length; i++ ){

  soma += array1[i];
}
console.log(soma)

};
sum()

const multiply = function() {
let num1 =2;
let num2 =4;

console.log(num1*num2)
};
multiply()

const power = function() {
let	num1 = 4;
let num2 = 3;

let potencia = 1;

for(let i=0; i < num2; i++){
potencia *= num1
}
  console.log(potencia)

};
power()

const factorial = function() {
	let array1 = [1,2,3,4,5,6,7,8,9,10];
  let num1 = 5;
  let multi = 1;

  for(let i = 0; i < num1; i++){
  
   multi *= array1[i]

  }
 console.log(multi)
};
factorial()
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
