const convertToCelsius = function() {
  let Fahrenheit= 32
  
  let convertef = ((Fahrenheit - 32) / 1.8)
  let Celsius = convertef

  console.log(`Celsius: ${Celsius.toFixed(1)}`)


};
convertToCelsius()

const convertToFahrenheit = function() {
let Celsius = 73.2;

let converteC = Celsius * 1.8 + 32
console.log(`Fahrenheit:${converteC.toFixed(1)}`)
};

convertToFahrenheit()

/* Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
*/