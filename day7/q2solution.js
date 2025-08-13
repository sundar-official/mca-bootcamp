let P = parseFloat(prompt("Enter Principal Amount:"));
let R = parseFloat(prompt("Enter Rate of Interest:"));
let N = parseFloat(prompt("Enter No. of Years:"));

let SI = (P * N * R) / 100;

console.log("simple interest=" +SI.toFixed(2));