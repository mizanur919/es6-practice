// Uses of Filter
const nums = [4, 8, 90, 3, 56, 23, 70];
const bigNumbers = nums.filter(n => n > 80);
//console.log(bigNumbers);
const smallNumbers = nums.filter(n => n < 10);
//console.log(smallNumbers);

const products = [
    {name: 'Nokia X106', price:300, color:'black'},
    {name: 'Monitor', price:259, color:'white'},
    {name: 'HP Pevilion 34', price:400, color:'silver'},
    {name: 'Table', price:120, color:'golden'}
];
const productsResult = products.filter(p => p.price > 200);
// console.log(productsResult);
// console.log(products.filter(p => p.color == 'black'));
const usingFind = products.find(p => p.color == 'white');
console.log(usingFind);