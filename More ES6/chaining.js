// Recap Of Destructuring
// declare variable based on the name of object property
// Destructuring Object
// const myObject = {
//     x: 45,
//     y: 78,
//     z: 60,
//     a: 34,
//     b: 12
// };
// const {x, b, y, a} = myObject;
// console.log(y, x, a, b);

// Destructuring Array
// const [p, q] = [4, 8];
// console.log(q, p);

// const [firstFriend, secondFriend] = ['Hasan Khan', 'Niloy Mahmud'];
// console.log(`My first friend name is: ${firstFriend} and second friend is: ${secondFriend}`);


// Destructuring Objects with other way
// const {flat, memory, sky} = {sky: 'blue', soil:'gray', flat: 'red-green', memory: '8GB'};
// console.log(sky, "\n", flat, "\n", memory);

const company = {
    companyName: 'Robi',
    ceo: {
        ceoName: 'Minhazurl', 
        id: 3, 
        salary: 120000
    },
    employees: {
        web: 34, 
        hr: 56, 
        accounts: 45
    },
    tech: {
        database: 'sql',
        cssFW: {
            first: 'bootstrap',
            second: 'tailwind css'
        }
    }
};

console.log(company?.backend?.cssFW.first);
