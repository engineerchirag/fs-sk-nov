class Car {
    constructor(model, color) {
        this.model = model;
        this.color = color;
        this.getDetails = function() {
            return `Car model is ${this.model} and color is ${this.color}`;
        };
    }

    getModel() {
        return `Model is ${this.model}`
    }
}


class SuperCar extends Car{
    constructor(features, price, model, color) {
        super( model, color);
        this.features =  features;
        this.price = price;
    }

    getOnRoadPrice() {
        return this.price + 100000;
    }
}

const BMWCar = new SuperCar(['f1'], 10000000, "BMW", "red");
const MercedesCar = new SuperCar(['f1', 'f2'], 20000000,'Mercedes', 'black');


// MercedesCar.getDetails === BMWCar.getDetails
// MercedesCar.getModel === BMWCar.getModel