//Method Overriding
class Shape {
    draw() {
        return `Drawing shape!`
    }
}

class Circle extends Shape {
    draw() {
        return `Drawing circle!`
    }
}

let shape = new Shape();
let circle = new Circle();

console.log(shape.draw());
console.log(circle.draw());

//Overloading
class Person {
    greet(num: number): void;
    greet(fName: string, lName: string): void;

    greet(a: number | string, b?: string){
        console.log(typeof a == 'string'
            ? `${a} ${b}`
            : `Number: ${a}`); 
    } 
}

let person = new Person();
person.greet(13);
person.greet('John', 'Doe');


//Access Modifiers
class Animal {
    constructor(protected _name: string){

    }
}

class Bear extends Animal {
    roar() {
        return `${this._name} roars!`;
    }
}