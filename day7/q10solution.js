// Optional prompt to start program
let startProgram = prompt(
  "This program calculates the product of odd numbers from 1 to 15.\nType 'yes' to continue:"
).toLowerCase();

if (startProgram === "yes") {
  let product = 1;
  let series = "";

  // Loop from 1 to 15 in steps of 2
  for (let i = 1; i <= 15; i += 2) {
    product *= i;
    series += i;
    if (i < 15) {
      series += " × ";
    }
  }

  // Display result
  console.log(`Product of odd numbers from 1 to 15 = ${product}`);
  console.log(`(Odd numbers: ${series} = ${product})`);
} else {
  console.log("Program cancelled.");
}
