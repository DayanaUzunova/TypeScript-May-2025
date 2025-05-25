// carPartsDiagnostics.ts
// Diagnostic function
function monitorCarParts(carBody, tires, engine) {
    console.log("Diagnostics Report:");
    console.log(carBody.runDiagnostics());
    console.log(tires.runDiagnostics());
    console.log(engine.runDiagnostics());
}
// Shared diagnostic function
function runDiagnostics() {
    return this.partName;
}
// Provided input with diagnostic functionality
var carBody = {
    material: 'aluminum',
    state: 'scratched',
    partName: 'Car Body',
    runDiagnostics: runDiagnostics
};
var tires = {
    airPressure: 30,
    condition: 'needs change',
    partName: 'Tires',
    runDiagnostics: runDiagnostics
};
var engine = {
    horsepower: 300,
    oilDensity: 780,
    partName: 'Engine',
    runDiagnostics: runDiagnostics
};
// Run the diagnostics
monitorCarParts(carBody, tires, engine);
