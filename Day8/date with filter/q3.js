let arr3 = [1, 2, 2, 3, 4, 4, 5];
let unique = arr3.filter((value, index, self) => self.indexOf(value) === index);

console.log(unique);