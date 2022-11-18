let num= 999;

function FizBuz(){

    for (let i= 0; i<num; i++) {
        
        if(i%3 && i%5){
            console.log("FizzBuzz");

        } else if(i%5){

            console.log("Buzz");

        }else if(i%3){

        console.log("Fizz");
        }else{
            console.log(i)
        }

    }
}

FizBuz()  