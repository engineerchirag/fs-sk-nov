// Constructor function
function Car(model, color) {
    this.model = model;
    this.color = color;
    this.getColor = function() {
        return this.color;
    }
}

Car.prototype.getModel = function() {
    return `Model is ${this.model}`
}



function SuperCar(price, features, model, color) {
    Car.call(this, model, color); // super
    this.price = price;
    this.features = features;
}

SuperCar.prototype = Object.create(Car.prototype); // extends 

SuperCar.prototype.getOnRoadPrice = function() {
    return this.price + 100000;
}

const BMWCar = new SuperCar(['f1'], 10000000, "BMW", "red");
// const BMWCar = new Car('BMW', 'red');