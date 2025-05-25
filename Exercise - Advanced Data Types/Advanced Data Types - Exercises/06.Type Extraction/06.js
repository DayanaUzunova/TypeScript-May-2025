var names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo: function () { return "".concat(this.fName, " ").concat(this.lName, ", age ").concat(this.age); } };
var myLocation = { city: 'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo: function () { return "".concat(this.street, " ").concat(this.number, ", ").concat(this.city, " ").concat(this.postalCode); } };
function createCombinedFunction(names, location) {
    return function (combinedObject) {
        console.log("Hello, ".concat(combinedObject.getPersonInfo(), " from ").concat(combinedObject.getAddressInfo()));
    };
}
var combinedFunction = createCombinedFunction(names, myLocation);
var combinedPerson = Object.assign({}, names, myLocation);
combinedFunction(combinedPerson);
