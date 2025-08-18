let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

users.forEach(function (user) {
  user.age += 1; 
});

users.forEach((user) => console.log(user));