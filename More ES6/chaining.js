// Recap Of Destructuring
// declare variable based on the name of object property
const myObject = {
    x: 45,
    y: 78,
    z: 60,
    a: 34,
    b: 12
};
const {x, b, y, a} = myObject;
console.log(y, x, a, b);