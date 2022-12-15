//const sumAll = function() {

    function soma(){

        let valor1= 90;
        let valor2= 1;
        let maiorValor = 0;
        let menorValor = 0;
        let soma = 0;

        //Filtro pra saber qual o menor e maior valor
        //esses valores serao usado no loop
        if (valor1 > valor2){
        maiorValor = valor1;
        menorValor = valor2;
        }else{
        maiorValor = valor2;
        menorValor = valor1;
        }



        //Condicoes que resultam em ERROR
        if (valor1 < 0 || valor2 < 0 || typeof valor1 === "string" || typeof valor2 === "string" || typeof valor1 === "object" || typeof valor2 === "object") {

           soma = "ERROR"
        }
        else{ //Loop que vai do menor valor para o maior valor
         for (let i = menorValor; i <= maiorValor; i++) {
            //Soma os valores
           soma+=i //soma = soma + i
        }
           

        

        }

        console.log(soma) 
    }
    
    soma()  

//};

// Do not edit below this line
//module.exports = sumAll;
