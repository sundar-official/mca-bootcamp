// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Get input from user
let n = parseInt(prompt("How many Prime numbers?"));

// Prime number generation
let count = 0;
let number = 2;
let primes = "";

while (count < n) {
  if (isPrime(number)) {
    primes += number + " ";
    count++;
  }
  number++;
}

// Display output
console.log(primes.trim());
