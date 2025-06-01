class Vehicle {
    public brand: string;

    constructor(brand: string){
        this.brand = brand;
    }

    public drive(): string {
        return `Driving a ${this.brand}`;
    }
}

class Car extends Vehicle {
    public model: string;

    constructor(brand: string, model:string){
        super(brand);
        this.model = model;
    }

    public override drive(): string{
        return `Driving a ${this.brand} ${this.model}`;
    }
}

const car = new Car("Toyota", "Corola");
console.log(car.drive());
