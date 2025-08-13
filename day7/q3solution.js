// Taking inputs
let P = parseFloat(prompt("Enter Principal Value:"));
let R = parseFloat(prompt("Enter Rate of Interest:"));
let N = parseFloat(prompt("Enter No. of Years:"));

// Calculate i
let i = R / 100;

// Formula: F = P × (1 + i)^N
let F = P * Math.pow(1 + i, N);

// Output
console.log(`Compound Interest ${F.toFixed(2)}`);
