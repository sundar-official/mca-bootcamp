// Read n from user
let n = parseInt(prompt("Enter the N value:"));

// Display table header
console.log("N   |   Factorial");
console.log("--------------------");

let fact = 1;

// Loop from 1 to n
for (let i = 1; i <= n; i++) {
  fact *= i; // factorial calculation
  console.log(`${i}   |   ${fact}`);
}
