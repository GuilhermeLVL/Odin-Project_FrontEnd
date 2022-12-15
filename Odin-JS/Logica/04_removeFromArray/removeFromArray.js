const removeFromArray = function() {

let array1 = [1,2,3,4];
console.log(array1);
let remove1 = array1.splice(2,1);
console.log(`Array atual: ${array1} \nO numero removido: ${remove1}`);

let array2 = [1,2,3,4];
console.log(array2);
array2.splice(1,2);
console.log(array2);

let array3 = [1,2,3,4,7,"Tacos"];
console.log(array3);
array3.splice(4,5);
console.log(array3);

let array4 = [1,2,3,4,7];
console.log(array4);
array4.splice(1,1);
array4.pop();
console.log(array4);

let array5 = [1,2,3,4];
console.log(array5);
array5.splice(0,4);
console.log(array5);

let array6 = ["hey",2,3,"ho"];
console.log(array6);
array6.shift()
array6.splice(1,1)
console.log(array6)

let array7 = [1,2,3,"1"]
console.log(array7);
array7.splice(2,3)
console.log(array7)
};
removeFromArray()

// Do not edit below this line
module.exports = removeFromArray;
