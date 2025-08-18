let counts = [2, 4, 3, 5];
let incremental = counts.map((n) => Array.from({ length: n }, (_, i) => i + 1));

console.log(incremental);