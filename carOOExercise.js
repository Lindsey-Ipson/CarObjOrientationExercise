class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk () {
        return 'Beep.';
    }
    toString () {
        const {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}.`;
    }
};

class Car extends Vehicle {
    constructor (make, model, year) {
    super(make, model, year);
    this.numWheels = 4
    }
};

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine () {
        return 'VROOM!!!';
    }
}

class Garage {
    constructor (capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add (vehicle) {
        if (vehicle.constructor.name === 'Car' || vehicle.constructor.name === "Motorcycle" || vehicle.constructor.name === "Vehicle") {
            if (this.vehicles.length < this.capacity) {
            this.vehicles.push(vehicle);
            return 'Vehicle added!'
            }
            else return "Sorry, we're full."
        }
        else return 'Only vehicles are allowed in here!';
    }
}

