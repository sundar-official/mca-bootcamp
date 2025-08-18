let students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "C" },
];

students.forEach(function (student) {
  student.grade = "A+"; 
});

students.forEach((student) => console.log(student));