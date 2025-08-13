// Input marks
let mark1 = parseFloat(prompt("Enter Mark 1:"));
let mark2 = parseFloat(prompt("Enter Mark 2:"));
let mark3 = parseFloat(prompt("Enter Mark 3:"));

// Calculate total and average
let total = mark1 + mark2 + mark3;
let average = total / 3.0;

// Display results exactly like example
console.log(`Total Marks   = ${total}`);
console.log(`Average Marks = ${average.toFixed(1)}`);
