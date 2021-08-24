// OLD System To double each number of an array

// const numbers = [2, 4, 6, 8];
// const output = [];
// const doubleIt = number => number * 2;
// for(const number of numbers){
//     const result = doubleIt(number);
//     output.push(result);
// }
// console.log(output);

// Using Map double each number of an array

const numbers = [2, 4, 6, 8];
const doubleIt = number => number * 2;
const output = numbers.map(number => number * 2);
//console.log(output);

const nums = [2, 4, 5, 3];
const result = nums.map(x => Math.pow(x, 3));
console.log(result)
