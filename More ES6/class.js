class Support{
    name;
    designation = 'Chief Executive Officer';
    address = 'BD';
    constructor(n){
        this.name = n;
    }
    startSession(){
        console.log("from function");
    }
}
const someone = new Support('amir khan');
const anyone = new Support('zahid khan');
console.log(someone);
console.log(anyone);