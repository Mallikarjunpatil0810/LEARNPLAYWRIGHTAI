// Array Transform - Methods to transform arrays in JavaScript

// Sample data
const numbers = [1, 2, 3, 4, 5, 6];
const words = ["hello", "world", "javascript", "array"];

// 1. map() - Transform each element
const doubled = numbers.map(num => num * 2);
console.log("map (doubled):", doubled); // [2, 4, 6, 8, 10, 12]

const uppercased = words.map(word => word.toUpperCase());
console.log("map (uppercased):", uppercased); // ["HELLO", "WORLD", "JAVASCRIPT", "ARRAY"]

// 2. filter() - Keep elements that pass a test
const evens = numbers.filter(num => num % 2 === 0);
console.log("filter (evens):", evens); // [2, 4, 6]

const longWords = words.filter(word => word.length > 5);
console.log("filter (long words):", longWords); // ["javascript"]

// 3. reduce() - Reduce array to a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce (sum):", sum); // 21

const max = numbers.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
console.log("reduce (max):", max); // 6

// 4. flatMap() - Map then flatten one level
const pairs = numbers
  .filter(n => n % 2 === 0)
  .flatMap(n => [n, n * 10]);
console.log("flatMap:", pairs); // [2, 20, 4, 40, 6, 60]

// 5. sort() - Transform order (mutates original)
const unsorted = [3, 1, 4, 1, 5, 9];
const sorted = [...unsorted].sort((a, b) => a - b);
console.log("sort (ascending):", sorted); // [1, 1, 3, 4, 5, 9]

// 6. Chaining transforms
const result = numbers
  .filter(n => n > 2)           // [3, 4, 5, 6]
  .map(n => n * 3)              // [9, 12, 15, 18]
  .reduce((acc, n) => acc + n, 0); // 54
console.log("chained result:", result); // 54

// 7. Practical example: Transform array of objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const names = users.map(user => user.name);
console.log("user names:", names); // ["Alice", "Bob", "Charlie"]

const adults = users.filter(user => user.age >= 30);
console.log("adults:", adults); // [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("total age:", totalAge); // 90

