// Read a 5-letter word from the user
let word = prompt("Enter a Five letter word:");

// Ensure exactly 5 letters (optional check)
if (word.length !== 5) {
  console.log("Please enter exactly five letters.");
} else {
  let encodedWord = "";

  // Loop each character and subtract 1 from ASCII value
  for (let i = 0; i < word.length; i++) {
    let asciiValue = word.charCodeAt(i);
    let newChar = String.fromCharCode(asciiValue - 1);
    encodedWord += newChar;
  }

  // Display encoded word
  console.log(`Encoded Word: ${encodedWord}`);
}
