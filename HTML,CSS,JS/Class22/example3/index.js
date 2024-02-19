class Car1 {
    constructor(model, color) {
        this.model = model;
        this.color = color;
        this.getDetails = function() {
            return `Car model is ${this.model} and color is ${this.color}`;
        }
    }

    static tax = "10%";
}

const BMWCar = new Car1('BMW', 'red');
BMWCar.color;
BMWCar.model;


console.log(Car1.tax);