class Car1 {
    constructor(model, color) {
        this.model = model;
        this.color = color;
        this.getDetails = function() {
            return `Car model is ${this.model} and color is ${this.color}`;
        }
    }
}

const BMWCar = new Car1('BMW', 'red');
const MercedesCar = new Car1('Mercedes', 'black');


class Car2 {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }

    getDetails() {
        return `Car model is ${this.model} and color is ${this.color}`;
    }
}

const BMWCar2 = new Car2('BMW', 'red');
const MercedesCar2 = new Car2('Mercedes', 'black');





class Car3 {
    constructor(model, color) {
        this.model = model;
        this.color = color;
        this.getDetails = function() {
            return `Contructor: Car model is ${this.model} and color is ${this.color}`;
        }
    }

    getDetails() {
        return `Prototype: Car model is ${this.model} and color is ${this.color}`;
    }
}

const BMWCar3 = new Car3('BMW', 'red');
const MercedesCar3 = new Car3('Mercedes', 'black');