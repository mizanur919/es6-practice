function addNumber(num1, num2 = 0){

    // System 1 if not pass value as argument
    // if(num2 == undefined){
    //     num2 = 8;
    // }

    // system 2 if not pass value as argrument
    // num2 = num2 || 0;

    const total = num1 + num2;
    return total;
}
const input = addNumber(4, 8);
console.log(input);