// Using Map

const friends = ['solaiman', 'hasan', 'hridoy khan', 'jashim uddin'];
const output = friends.map(f => f.length);
//console.log(output);

const products = [
    {name: 'Nokia X106', price:300, color:'black'},
    {name: 'Monitor', price:259, color:'white'},
    {name: 'HP Pevilion 34', price:400, color:'silver'},
    {name: 'Table', price:120, color:'golden'}
];
// const result = products.map(p => p.name);
// console.log(result);


// Using Foreach
products.forEach(p => console.log(p.name));