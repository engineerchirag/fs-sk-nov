// Object literal
const marriage = {
    name: "Atul",
    age: 30,
    company: 'NA',
    address: {
        city: "Patna"
    },
    getDetails: function () {
        return `I'm ${this.name} with age ${this.age}, currently working at ${this.company}`;
    }
}


// Constructor
function Person (name, age, company, address) {
    this.name = name;
    this.age = age;
    this.company = company;
    this.address = address;
    this.getDetails = function () {
        return `I'm ${this.name} with age ${this.age}, currently working at ${this.company}`;
    };
}

const atulMarriageDetail = new Person('Atul', 30, 'NA', { city: 'Patna'});
const vivekMarriageDetail = new Person('Vivek', 24, 'Sixsails', { city: 'Delhi'});

// Class

class MarriageDetail {
    constructor(name, age, company, address) {
        this.name = name;
        this.age = age;
        this.company = company;
        this.address = address;
        this.getDetails = function () {
            return `I'm ${this.name} with age ${this.age}, currently working at ${this.company}`;
        };
    }
}

const aashutoshMarriageDetail = new MarriageDetail('Aashutosh', 100, 'NA', { city: 'London'});