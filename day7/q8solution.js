// Get n from user
let n = parseInt(prompt("Enter how many odd numbers to sum:"));

let sum = 0;
let series = "";

// Loop from 1 to (2n - 1) in steps of 2
for (let i = 1; i <= 2 * n - 1; i += 2) {
  sum += i;
  series += i;
  if (i < 2 * n - 1) {
    series += " + ";
  }
}

// Display result
console.log(`Sum of first ${n} odd numbers is ${sum}`);
console.log(`(${series} = ${sum})`);
