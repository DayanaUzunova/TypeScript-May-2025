type WithDiagnostics<T> = T & {
  partName: string;
  runDiagnostics: () => string;
};

// Base types
type CarBody = { material: string; state: string };
type Tires = { airPressure: number; condition: string };
type Engine = { horsepower: number; oilDensity: number };

// Diagnostic function
function monitorCarParts(
  carBody: WithDiagnostics<CarBody>,
  tires: WithDiagnostics<Tires>,
  engine: WithDiagnostics<Engine>
): void {
  console.log("Diagnostics Report:");
  console.log(carBody.runDiagnostics());
  console.log(tires.runDiagnostics());
  console.log(engine.runDiagnostics());
}

// Shared diagnostic function
function runDiagnostics(this: { partName: string }): string {
  return this.partName;
}

// Provided input with diagnostic functionality
const carBody = {
  material: 'aluminum',
  state: 'scratched',
  partName: 'Car Body',
  runDiagnostics
};

const tires = {
  airPressure: 30,
  condition: 'needs change',
  partName: 'Tires',
  runDiagnostics
};

const engine = {
  horsepower: 300,
  oilDensity: 780,
  partName: 'Engine',
  runDiagnostics
};

// Run the diagnostics
monitorCarParts(carBody, tires, engine);
