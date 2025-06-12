"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function maintainCache(target, methodName, descriptor) {
    let cache = [];
    let lastUpdated = null;
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        const currentMoment = new Date();
        if (!lastUpdated || (currentMoment.getTime() - lastUpdated.getTime()) > 5000) {
            const data = originalMethod.call(this);
            cache = data.slice();
            lastUpdated = new Date();
            return data;
        }
        else {
            console.log('Returned from cache');
            return cache;
        }
    };
    return descriptor;
}
class MockWeatherDataService {
    constructor() {
        this.weatherData = [
            'Sunny 8° to 20°',
            'Partially Cloudy 7° to 19°',
            'Sunny 5° to 18°'
        ];
    }
    addWeatherData(data) { this.weatherData.push(data); }
    getWeatherData() { return this.weatherData; }
}
__decorate([
    maintainCache
], MockWeatherDataService.prototype, "getWeatherData", null);
let service = new MockWeatherDataService();
console.log(service.getWeatherData());
console.log(service.getWeatherData());
service.addWeatherData('Partially Cloudy 5° to 11°');
console.log(service.getWeatherData());
//7 seconds later
setTimeout(() => console.log(service.getWeatherData()), 7000);
