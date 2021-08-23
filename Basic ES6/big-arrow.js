// const multiply = (num1, num2) => num1 * num2;
// const result = multiply(4, 7);
// console.log(result);

//////////// Single Parameter system 01 ////////////
// const fiveTimes = (num) => num * 5;
// const output = fiveTimes(4);
// console.log(output);


//////////// Single Parameter system 02 ////////////
// const tenTimes = num => num * 10;
// const result = tenTimes(4);
// console.log(result);

//////////// Without Parameter ////////////
// const getName = () => "Someone";
// const name = getName();
// console.log(name);


//////////// Multiple line in function body ////////////
const calculation = (x, y) => {
    const add = x + y;
    const multi = x * y;
    const result = add + multi;
    return result;
}
const output = calculation(2, 4);
console.log(output);