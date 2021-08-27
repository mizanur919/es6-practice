// Javascript Object Notation
// JSON
// const user = {id: 3, name: 'Amir Khan', job: 'actor'};
// const stringified = JSON.stringify(user);
// console.log("Stringify", stringified);
// console.log("Object ", user);

const shop = {
    shopName: "ABC Store",
    address: 'OR Nizam Road',
    products: ['electronics', 'pc accessories', 'cool drinks'],
    owner: {
        name: 'Alia But',
        profession: 'actor'
    },
    isExpensive: false
};
const stringifiedComplex = JSON.stringify(shop);
const covertedString = JSON.parse(stringifiedComplex);
console.log(covertedString);