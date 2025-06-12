"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validateAge(target, propName, descriptor) {
    const originalSetter = descriptor.set;
    descriptor.set = function (val) {
        if (val < 1 || val > 200) {
            throw new Error('Age must be between 1 and 200');
        }
        originalSetter === null || originalSetter === void 0 ? void 0 : originalSetter.call(this, val);
    };
    return descriptor;
}
class Age {
    constructor(age) {
        this.age = age;
    }
    set age(val) { this._age = val; }
    get age() { return this._age; }
}
__decorate([
    validateAge
], Age.prototype, "age", null);
let ageVal = new Age(10);
ageVal.age = -10;
