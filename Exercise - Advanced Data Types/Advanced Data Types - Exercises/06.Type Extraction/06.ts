let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}` } };
let myLocation = { city:'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`} };

type namesType = typeof names;
type locationType = typeof myLocation;

function createCombinedFunction(names: namesType, myLocation: locationType){
    return function(combinedObject: namesType & locationType) {
        console.log(`Hello, ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);  
    }
}

let combinedFunction = createCombinedFunction(names, myLocation);
let combinedPerson = Object.assign({}, names, myLocation);
combinedFunction(combinedPerson);
