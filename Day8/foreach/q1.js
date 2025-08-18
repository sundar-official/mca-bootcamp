let fruits = ["apple", "banana", "grape"];
let lengths = []; 

fruits.forEach(function (item) {
  lengths.push(item.length); 
});

console.log(lengths);