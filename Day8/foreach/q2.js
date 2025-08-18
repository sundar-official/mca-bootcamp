let numbers = [1, -2, 3, -4, 5];
let positives = [];

numbers.forEach(function (num) {
  if (num >= 0) {
    positives.push(num);
  }
});

console.log(positives);