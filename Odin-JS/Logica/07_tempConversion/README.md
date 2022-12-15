# Exercise 07 - tempConversion
Escreva duas funções que convertem temperaturas de Fahrenheit para Celsius e vice -versa:
`` `
Converttocelsius (32) // Fahrenheit para Celsius, deve retornar 0

ConverttoFahrenheit (0) // Celsius para Fahrenheit, deve retornar 32
`` `

Por sermos humanos, queremos que a temperatura do resultado seja arredondada para um local decimal: ou seja, `converttocelsius (100)` deve retornar `37.8` e não` 37.777777777777778`.

Este exercício solicita que você crie mais de uma função para que a seção `module.exports` do arquivo de especificações pareça um pouco diferente desta vez.Nada com que se preocupar, estamos apenas empacotando as duas funções em um único objeto a ser exportado.

## dicas
- Você pode encontrar as fórmulas relevantes na [Wikipedia] (https://en.wikipedia.org/wiki/conversion_of_units_of_temperature).

- Tente encontrar sozinho na Internet como arredondar um número para 1 local decimal no JavaScript.Se você lutar, dê uma olhada [aqui] (https://stackoverflow.com/q/7342957/5433628).