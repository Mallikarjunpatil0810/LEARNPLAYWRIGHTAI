// Array functions demonstration

// Sample data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

// 1. forEach - iterate over array
console.log("forEach:");
numbers.forEach((num) => console.log(num));

// 2. map - transform each element
const doubled = numbers.map((num) => num * 2);
console.log("\nmap (doubled):", doubled);

// 3. filter - filter elements based on condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("filter (even):", evenNumbers);

// 4. reduce - reduce array to a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce (sum):", sum);

// 5. find - find first element matching condition
const found = numbers.find((num) => num > 5);
console.log("find (first > 5):", found);

// 6. findIndex - find index of first matching element
const foundIndex = numbers.findIndex((num) => num > 5);
console.log("findIndex:", foundIndex);

// 7. some - check if any element satisfies condition
const hasLarge = numbers.some((num) => num > 8);
console.log("some (> 8):", hasLarge);

// 8. every - check if all elements satisfy condition
const allPositive = numbers.every((num) => num > 0);
console.log("every (> 0):", allPositive);

// 9. includes - check if array contains a value
const hasFive = numbers.includes(5);
console.log("includes (5):", hasFive);

// 10. sort - sort array
const sortedFruits = [...fruits].sort();
console.log("sort (fruits):", sortedFruits);

// 11. slice - extract portion of array
const sliced = numbers.slice(2, 5);
console.log("slice (2-5):", sliced);

// 12. splice - add/remove elements (modifies original)
const spliceArray = [...numbers];
const removed = spliceArray.splice(2, 3, 99, 100);
console.log("splice removed:", removed);
console.log("splice modified array:", spliceArray);

// 13. concat - merge arrays
const merged = numbers.concat([11, 12, 13]);
console.log("concat:", merged);

// 14. flat - flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
const flatOnce = nested.flat();
const flatFully = nested.flat(2);
console.log("flat (1 level):", flatOnce);
console.log("flat (full):", flatFully);

// 15. flatMap - map then flat
const flatMapped = numbers.flatMap((num) => [num, num * 2]);
console.log("flatMap:", flatMapped);

// 16. Chaining array methods
const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 10)
  .reduce((acc, curr) => acc + curr, 0);
console.log("chained result:", result);

// 17. Working with objects
const names = people.map((person) => person.name);
console.log("object map (names):", names);

const adults = people.filter((person) => person.age >= 30);
console.log("object filter (age >= 30):", adults);

const totalAge = people.reduce((acc, person) => acc + person.age, 0);
console.log("object reduce (total age):", totalAge);