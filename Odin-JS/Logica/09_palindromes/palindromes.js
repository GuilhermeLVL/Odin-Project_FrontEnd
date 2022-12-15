const palindromes = function () {
  let palavra = "ZZZZ car, a man, a maracaz.";

  let palavraFormatada = "";
  let palavraReverse = "";

  function formatacao() {
    return palavra
      .replace(/( )+/g, "")
      .toLowerCase()
      .replace(/[.]/, "")
      .replace(/[,]/, "")
      .replace(/[,]/, "")
      .replace(/[!]/, "");
  }

  palavraFormatada = formatacao(palavra);

  console.log(palavraFormatada);

  function reverceStr() {
    return palavraFormatada.split("").reverse().join("");
  }

  palavraReverse = reverceStr(palavraFormatada);

  console.log(palavraReverse);

  if (palavraFormatada == palavraReverse) {
    console.log("True");
  } else {
    console.log("False");
  }
};

palindromes();
// Do not edit below this line
module.exports = palindromes;

//replace(/( )+/g,"") remover espacos (Juntando a string)
