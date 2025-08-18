let people = [
  { name: "Alice", age: 12 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

let adults = people.filter((person) => person.age > 18);

adults.forEach((person) => console.log(person));
