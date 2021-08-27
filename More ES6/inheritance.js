class teamMember{
    name;
    designation = 'Chief Executive Officer';
    address = 'BD';
    constructor(n, adrs){
        this.name = n;
        this.address = adrs;
    }
}

class Support extends teamMember{
    getSupportTime;
    constructor(na, adrsss, time){
        super(na, adrsss);
        this.getSupportTime = time;
    }
    startSession(){
        console.log(this.name, "from function");
    }
}

class StudentCare extends teamMember{
    specialCare;
    constructor(na, adrss, care){
        super(na, adrss)
        this.specialCare = care;
    }
    buildARoutine(student){
        console.log(this.name, 'Build a routine for', student);
    }
}

// const someone = new Support('amir khan', 'London');
// const anyone = new Support('zahid khan', 'USA');
// console.log(someone);
// console.log(anyone);

// const alia = new StudentCare('Alia Bhut', 'Mumbhai');
// console.log(alia);
const amirKhan = new Support('Amir Khan', 'London', '9AM, 4PM, 9PM');
console.log(amirKhan);
const salmanCare = new StudentCare('Salman Khan', 'USA', 'Special Special Care');
console.log(salmanCare);