//const leapYears = function() {

let entrada1 =700;

let DivP4 = entrada1 % 4;
let DivP400 = entrada1 % 400;
let DivP100 = entrada1 % 100;

if(DivP4 == 0 && DivP100 != 0 || DivP400 == 0){
console.log ("Bissexto")
}else{
console.log("Nao Bissexto")

}


//};

// Do not edit below this line
//module.exports = leapYears;
