const fish = {
    id: 34,
    fishName: 'King Hilsha',
    price: 9000,
    phone: '019898737378',
    address: 'Chandpur',
    dress: 'silver'
};

///// Old Method to store object values ///////
// const address = fish.address;
// const fishPhone = fish.phone;
// const fishId = fish.id;
// const fishPrice = fish.price;

////// Using destructureing /////////
// const {fishName, address, phone, dress} = fish;

// console.log(address);
// console.log(phone);
// console.log(fishName);

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
    }
};

///// Old Method to store object values ///////
// const webEmployees = company.employees.web;
// const ceoSalary = company.ceo.salary;
// const companyName = company.companyName;

// console.log(webEmployees);
// console.log(ceoSalary);
// console.log(companyName);

////// Using destructureing /////////
const {ceoName, salary, id} = company.ceo;
const {web, hr, accounts} = company.employees;

console.log(ceoName);
console.log(id);
console.log(hr, accounts);