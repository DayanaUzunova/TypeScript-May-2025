var Mechanic = /** @class */ (function () {
    function Mechanic() {
    }
    Mechanic.prototype.technicalInspection = function (car) { return true; };
    return Mechanic;
}());
var mechanic = new Mechanic();
var someCar = { engine: { horsepower: 350, type: 'diesel' }, tires: { model: 'BRIT', airPressure: 33 }, body: { material: 'aluminum' } };
var notACar = { vroom: false };
var maybeCar = { tires: { model: 'BRIT' }, body: { material: 'aluminum' } };
var maybeCar2 = { engine: { horsepower: 220 }, tires: { model: 'BRIT', wear: 'High', airPressure: 33 }, body: { material: 'aluminum' } };
var maybeCar3 = { engine: { horsepower: 250 }, tires: { model: 'Nie' } };
var maybeCar4 = { engine: { horsepower: 220, type: 'electric' }, tires: { model: 'BRIT' }, body: { material: 'steel', weight: 2670 } };
var maybeCar5 = { engine: { horsepower: '220', type: 'electric' }, tires: { model: 'BRIT', airPressure: 28 }, body: { material: 'steel', weight: 2670 } };
mechanic.technicalInspection(someCar); //ok
mechanic.technicalInspection(maybeCar2); //ok
// mechanic.technicalInspection(maybeCar4);    //TS Error
// mechanic.technicalInspection(notACar);      //TS Error
// mechanic.technicalInspection(maybeCar);     //TS Error
// mechanic.technicalInspection(maybeCar3);    //TS Error
// mechanic.technicalInspection(maybeCar5);    //TS Error
