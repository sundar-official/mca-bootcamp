// Ask user to start the program
let startProgram = prompt(
  "This program finds the sum of even numbers between 2 and 30.\nType 'yes' to continue:"
).toLowerCase();

if (startProgram === "yes") {
  let sum = 0;
  let series = "";

  // Loop from 2 to 30
  for (let i = 2; i <= 30; i++) {
    if (i % 2 === 0) {
      sum += i;
      series += i;
      if (i < 30) {
        series += " + ";
      }
    }
  }

  // Display result
  console.log(`Sum of even numbers from 2 to 30 = ${sum}`);
  console.log(`(Even numbers: ${series} = ${sum})`);
} else {
  console.log("Program cancelled.");
}
