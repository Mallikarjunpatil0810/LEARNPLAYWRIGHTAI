// Searching an element in an array using find()

// Example 1: Find a number in an array
const numbers = [10, 25, 30, 45, 60, 75];

const foundNumber = numbers.find(num => num > 40);
console.log("First number greater than 40:", foundNumber); // Output: 45

// Example 2: Find an object in an array of objects
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 4, name: "David", age: 28 }
];

const foundUser = users.find(user => user.name === "Charlie");
console.log("Found user:", foundUser);
// Output: { id: 3, name: 'Charlie', age: 35 }

// Example 3: Find with index parameter
const foundWithIndex = numbers.find((num, index) => index === 3);
console.log("Element at index 3:", foundWithIndex); // Output: 45

// Example 4: When element is not found (returns undefined)
const notFound = numbers.find(num => num > 100);
console.log("Element > 100 not found:", notFound); // Output: undefined

// Array Iteration Methods

// Example 1: forEach() - Iterate through each element
console.log("\n--- forEach() ---");
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// Example 2: map() - Create a new array by transforming each element
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers); // Output: [20, 50, 60, 90, 120, 150]

// Example 3: filter() - Create a new array with elements that pass a condition
const filteredNumbers = numbers.filter(num => num > 30);
console.log("Numbers greater than 30:", filteredNumbers); // Output: [45, 60, 75]

// Example 4: reduce() - Reduce array to a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of all numbers:", sum); // Output: 245

// Example 5: some() - Check if at least one element passes a condition
const hasLargeNumber = numbers.some(num => num > 50);
console.log("Has number > 50:", hasLargeNumber); // Output: true

// Example 6: every() - Check if all elements pass a condition
const allPositive = numbers.every(num => num > 0);
console.log("All numbers positive:", allPositive); // Output: true

// Example 7: for...of loop
console.log("\n--- for...of loop ---");
for (const num of numbers) {
  console.log("Number:", num);
}

// Example 8: Iterating over array of objects with forEach
console.log("\n--- Users with forEach ---");
users.forEach(user => {
  console.log(`${user.name} is ${user.age} years old`);
});

// Example 9: forEach() to calculate and display age in months
console.log("\n--- Age in months using forEach ---");
users.forEach(user => {
  console.log(`${user.name} is ${user.age * 12} months old`);
});



