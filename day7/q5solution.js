// Input temperature in Fahrenheit
let F = parseFloat(prompt("Enter temperature in Fahrenheit:"));

// Apply formula: C = (5 / 9) × (F - 32)
let C = (5 / 9) * (F - 32);

// Display output exactly like example
console.log(`${F.toFixed(6)} deg F is ${C.toFixed(6)} deg C`);
