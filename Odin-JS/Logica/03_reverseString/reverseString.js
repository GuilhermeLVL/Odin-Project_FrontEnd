const reverseString = function() {

    //Split tranforma a String em um array
    //Reverse inverte a ordem do array
    //join Retorna o array em foma de uma unica string

    let palavra = `Hello`.split(``).reverse().join(``)
    console.log(palavra)

    let palavra2 = `Hello There`.split(``).reverse().join(``)
    console.log(palavra2)

    let palavra3 = `123! abc!`.split(``).reverse().join(``)
    console.log(palavra3)

    let semPalavra = ``.split(``).reverse().join(``)
    console.log(semPalavra)


};
reverseString()
// Não edite abaixo desta linha
module.exports = reverseString;
