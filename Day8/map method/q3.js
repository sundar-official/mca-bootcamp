let nestedArrays = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8],
];
let sums = nestedArrays.map((arr) =>
  arr.reduce((total, num) => total + num, 0)
);

console.log(sums);