// ============================================
// Array Searching in JavaScript
// ============================================

// Sample array
const fruits = ["apple", "banana", "mango", "orange", "banana", "grape"];
const numbers = [10, 25, 38, 45, 52, 67, 89, 100];

console.log("Original Array (fruits):", fruits);
console.log("Original Array (numbers):", numbers);
console.log("----------------------------------------");

// 1. indexOf() - Returns first index of element, or -1 if not found
let index = fruits.indexOf("banana");
console.log("indexOf('banana'):", index); // 1

index = fruits.indexOf("banana", 2); // search starting from index 2
console.log("indexOf('banana', 2):", index); // 4

index = fruits.indexOf("kiwi");
console.log("indexOf('kiwi'):", index); // -1

// 2. lastIndexOf() - Returns last index of element
let lastIdx = fruits.lastIndexOf("banana");
console.log("lastIndexOf('banana'):", lastIdx); // 4

// 3. includes() - Returns true if element exists, false otherwise
let hasFruit = fruits.includes("mango");
console.log("includes('mango'):", hasFruit); // true

hasFruit = fruits.includes("kiwi");
console.log("includes('kiwi'):", hasFruit); // false

// 4. find() - Returns first element that satisfies condition
let found = numbers.find((num) => num > 50);
console.log("find(num > 50):", found); // 52

found = numbers.find((num) => num > 100);
console.log("find(num > 100):", found); // undefined

// 5. findIndex() - Returns index of first element that satisfies condition
let foundIdx = numbers.findIndex((num) => num > 50);
console.log("findIndex(num > 50):", foundIdx); // 4 (index of 52)

foundIdx = numbers.findIndex((num) => num > 100);
console.log("findIndex(num > 100):", foundIdx); // -1

// 6. findLast() - Returns last element that satisfies condition (ES2023)
let lastFound = numbers.findLast((num) => num > 50);
console.log("findLast(num > 50):", lastFound); // 100

// 7. findLastIndex() - Returns index of last element that satisfies condition (ES2023)
let lastFoundIdx = numbers.findLastIndex((num) => num > 50);
console.log("findLastIndex(num > 50):", lastFoundIdx); // 7

// 8. filter() - Returns array of all elements that satisfy condition
let filtered = numbers.filter((num) => num > 50);
console.log("filter(num > 50):", filtered); // [52, 67, 89, 100]

// 9. some() - Returns true if at least one element satisfies condition
let hasEven = numbers.some((num) => num % 2 === 0);
console.log("some(even number):", hasEven); // true

// 10. every() - Returns true if ALL elements satisfy condition
let allPositive = numbers.every((num) => num > 0);
console.log("every(num > 0):", allPositive); // true

// 11. Searching in array of objects
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 4, name: "David", age: 28 },
  { id: 5, name: "Eve", age: 22 },
];

console.log("\nArray of Objects (users):", users);

// Find object by property
let user = users.find((u) => u.id === 3);
console.log("find user with id=3:", user); // { id: 3, name: "Charlie", age: 35 }

// Filter objects by condition
let youngUsers = users.filter((u) => u.age < 30);
console.log("filter users with age < 30:", youngUsers);

// Check if object exists with some()
let hasBob = users.some((u) => u.name === "Bob");
console.log("some user named Bob:", hasBob); // true

// 12. indexOf with objects (reference comparison)
const objArr = [{ id: 1 }, { id: 2 }];
const target = { id: 1 };
console.log("\nindexOf with objects:", objArr.indexOf(target)); // -1 (different reference)

// Using find for object reference search
let foundObj = objArr.find((o) => o.id === 1);
console.log("find object with id=1:", foundObj); // { id: 1 }

// ============================================
// Helper function: Search wrapper
// ============================================
function searchArray(arr, searchTerm, property = null) {
  if (property) {
    // Search in array of objects by property
    return arr.find((item) => item[property] === searchTerm);
  }
  // Search in primitive array
  return arr.find((item) => item === searchTerm);
}

console.log("\n--- Using searchArray helper ---");
console.log("Search number 45:", searchArray(numbers, 45));
console.log("Search user by name 'Charlie':", searchArray(users, "Charlie", "name"));
console.log("Search user by id 2:", searchArray(users, 2, "id"));