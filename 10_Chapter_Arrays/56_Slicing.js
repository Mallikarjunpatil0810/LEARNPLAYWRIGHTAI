
// Slice & Combining

let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end.


let arr = [1, 2, 3, 4, 5];

// slice(start, end)
// ✔ Returns a NEW array.
// ✔ Does NOT modify (mutate) the original array.
// ✔ start index is included.
// ✔ end index is excluded.
// ✔ Array indexing starts from 0.
// ✔ If 'end' is omitted, it returns elements from 'start' to the end of the array.

console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr);

// ---------- More Array Slicing Examples ----------

console.log("\n--- Array Slicing Examples ---\n");

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// 1. slice() with no arguments — returns a shallow copy of the entire array
console.log("1. fruits.slice()       →", fruits.slice());
// Output: ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

// 2. slice(start) — from start index to end
console.log("2. fruits.slice(2)      →", fruits.slice(2));
// Output: ["Cherry", "Date", "Elderberry"]

// 3. slice(start, end) — from start to end-1
console.log("3. fruits.slice(1, 4)   →", fruits.slice(1, 4));
// Output: ["Banana", "Cherry", "Date"]

// 4. slice() with negative start index — counts from the end
console.log("4. fruits.slice(-2)     →", fruits.slice(-2));
// Output: ["Date", "Elderberry"]

// 5. slice() with negative start and end
console.log("5. fruits.slice(-4, -1) →", fruits.slice(-4, -1));
// Output: ["Banana", "Cherry", "Date"]

// 6. slice() with start > end — returns empty array
console.log("6. fruits.slice(4, 2)   →", fruits.slice(4, 2));
// Output: []

// 7. Original array remains unchanged (immutable)
console.log("7. Original fruits      →", fruits);
// Output: ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

// 8. Using slice() to copy an array
let copy = fruits.slice();
console.log("8. Copy of fruits       →", copy);
// Output: ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

// 9. slice() on array of objects (shallow copy)
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
let slicedUsers = users.slice(0, 2);
console.log("9. Sliced users         →", slicedUsers);
// Output: [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]

// 10. Combining slice() with other methods
let numbers = [10, 20, 30, 40, 50, 60];
let lastThree = numbers.slice(-3).reverse();
console.log("10. Last 3 reversed     →", lastThree);
// Output: [60, 50, 40]

console.log("\n--- Key Takeaways ---");
console.log("• slice() does NOT mutate the original array");
console.log("• Negative indices count from the end (-1 = last element)");
console.log("• If end is omitted, slice goes to the end of the array");
console.log("• slice() with no arguments creates a shallow copy");

