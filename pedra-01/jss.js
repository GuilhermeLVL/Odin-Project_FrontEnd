var ale;
var escolhaDef;
var resultado;

var empate = 0;
var pontoPc = 0;
var pontoVoce = 0;

function vezPc() {

    function aleatorio(min, max) {
        min = Math.ceil(0);
        max = Math.floor(3);
        return Math.floor(Math.random() * (max - min) + min);
    }

    let opcoes = ["pedra", "papel", "tesoura"]

    ale = opcoes[aleatorio()]

    switch (ale) {
        case 0:
            ale = "pedra"
            console.log(ale);
            break;
        case 1:
            ale = "papel"
            console.log(ale);
            break;
        case 2:
            ale = "tesoura"
            console.log(ale);
            break;

        default:
            break;

    }
    console.log(ale);
    return ale;
}


function suaVez() {

    let escolha = prompt("Escolha entre pedra papel ou tesoura:");

    escolhaDef = escolha.toLowerCase().trim();


    switch (escolhaDef) {
        case "pedra":
            console.log("Pedra");
            break;
        case "papel":
            console.log("Papel");
            break;
        case "tesoura":
            console.log("Tesoura");
            break;

        default:
            prompt("Essa opcao nao é valida ");

            break;


    }

    return escolhaDef;
}




function jogo() {
    vezPc()
    suaVez()



    if (ale == escolhaDef) {
        console.log("Empate");
        empate++;
    }
    //Pedra
    else if (ale == "pedra" && escolhaDef == "papel") {
        console.log("Vitoria");
        pontoVoce++;
    }
    else if (ale == "pedra" && escolhaDef == "tesoura") {
        console.log("Derrota");
        pontoPc++;
    }
    //Papel
    else if (ale == "papel" && escolhaDef == "pedra") {
        console.log("Derrota");
        pontoPc++;
    }
    else if (ale == "papel" && escolhaDef == "tesoura") {
        console.log("Vitoria");
        pontoVoce++;
    }
    //Tesoura
    else if (ale == "tesoura" && escolhaDef == "papel") {
        console.log("Derrota");
        pontoPc++;
    }
    else if (ale == "tesoura" && escolhaDef == "pedra") {
        console.log("Vitoria");
        pontoVoce++;
    }
}

function round() {

    for (let i = 0; i < 5; i++) {
        jogo()

    }

    if (pontoPc > pontoVoce) {
        console.log("Voce perdeu");
    } else if (pontoVoce > pontoPc) {
        console.log("Voce ganhou");
    } else {
        console.log("Empate");
    }


}


round()