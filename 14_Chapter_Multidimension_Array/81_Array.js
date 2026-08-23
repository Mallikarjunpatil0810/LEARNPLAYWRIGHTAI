// ============================================
// JavaScript Array - Complete Guide
// ============================================

// 1. Creating Arrays
console.log("===== CREATING ARRAYS =====");

// Using array literal
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);

// Using Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numbers);

// Using Array.of()
let mixed = Array.of(10, "Hello", true, { name: "John" });
console.log("Mixed:", mixed);

// Using Array.from()
let fromString = Array.from("Hello");
console.log("From String:", fromString);

// 2. Accessing Elements
console.log("\n===== ACCESSING ELEMENTS =====");

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// at() method (ES2022)
console.log("First using at():", fruits.at(0));
console.log("Last using at():", fruits.at(-1));

// 3. Adding & Removing Elements
console.log("\n===== ADDING & REMOVING ELEMENTS =====");

// push() - add to end
fruits.push("Mango");
console.log("After push:", fruits);

// pop() - remove from end
let last = fruits.pop();
console.log("Popped:", last, "| Remaining:", fruits);

// unshift() - add to beginning
fruits.unshift("Grapes");
console.log("After unshift:", fruits);

// shift() - remove from beginning
let first = fruits.shift();
console.log("Shifted:", first, "| Remaining:", fruits);

// splice() - add/remove at any index
fruits.splice(1, 0, "Orange", "Kiwi"); // Insert at index 1
console.log("After splice insert:", fruits);

fruits.splice(2, 1); // Remove 1 element at index 2
console.log("After splice remove:", fruits);

// 4. Iterating Over Arrays
console.log("\n===== ITERATING OVER ARRAYS =====");

// forEach
fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});

// for...of
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// map() - creates new array
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercased:", upperFruits);

// 5. Searching & Filtering
console.log("\n===== SEARCHING & FILTERING =====");

let nums = [10, 25, 30, 45, 50, 25];

// indexOf() / lastIndexOf()
console.log("Index of 25:", nums.indexOf(25));
console.log("Last index of 25:", nums.lastIndexOf(25));

// includes()
console.log("Includes 30?", nums.includes(30));
console.log("Includes 99?", nums.includes(99));

// find() - returns first matching element
let found = nums.find(num => num > 30);
console.log("First > 30:", found);

// findIndex() - returns index of first match
let foundIndex = nums.findIndex(num => num > 30);
console.log("Index of first > 30:", foundIndex);

// filter() - returns all matches
let filtered = nums.filter(num => num > 25);
console.log("Filtered (> 25):", filtered);

// 6. Transforming Arrays
console.log("\n===== TRANSFORMING ARRAYS =====");

// map()
let doubled = nums.map(num => num * 2);
console.log("Doubled:", doubled);

// reduce() - accumulate values
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

let max = nums.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
console.log("Max:", max);

// reduceRight()
let concatenated = nums.reduceRight((acc, curr) => acc + "-" + curr);
console.log("ReduceRight:", concatenated);

// flat() - flatten nested arrays
let nested = [1, [2, 3], [4, [5, 6]]];
console.log("Flat (depth 1):", nested.flat());
console.log("Flat (depth 2):", nested.flat(2));

// flatMap()
let sentences = ["Hello World", "Foo Bar"];
let words = sentences.flatMap(s => s.split(" "));
console.log("FlatMap:", words);

// 7. Sorting & Reversing
console.log("\n===== SORTING & REVERSING =====");

let unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original:", unsorted);

// sort() - default (lexicographic)
let sortedDefault = [...unsorted].sort();
console.log("Default sort:", sortedDefault);

// sort() - numeric ascending
let sortedAsc = [...unsorted].sort((a, b) => a - b);
console.log("Ascending:", sortedAsc);

// sort() - numeric descending
let sortedDesc = [...unsorted].sort((a, b) => b - a);
console.log("Descending:", sortedDesc);

// reverse()
let reversed = [...sortedAsc].reverse();
console.log("Reversed:", reversed);

// 8. Checking Conditions
console.log("\n===== CHECKING CONDITIONS =====");

// every() - all elements pass test
let allPositive = nums.every(num => num > 0);
console.log("All positive?", allPositive);

// some() - at least one passes test
let hasEven = nums.some(num => num % 2 === 0);
console.log("Has even?", hasEven);

// 9. Joining & Splitting
console.log("\n===== JOINING & SPLITTING =====");

// join()
let csv = fruits.join(", ");
console.log("CSV:", csv);

// toString()
console.log("toString:", fruits.toString());

// split() (String method, returns array)
let str = "apple,banana,cherry";
let arr = str.split(",");
console.log("Split string:", arr);

// 10. Multidimensional Arrays
console.log("\n===== MULTIDIMENSIONAL ARRAYS =====");

// 2D Array (Matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix);
console.log("Element [1][2]:", matrix[1][2]); // 6

// Iterating 2D array
console.log("Matrix elements:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`[${i}][${j}] = ${matrix[i][j]}`);
    }
}

// 3D Array
let cube = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
console.log("3D element [1][0][1]:", cube[1][0][1]); // 6

// 11. Array Destructuring
console.log("\n===== ARRAY DESTRUCTURING =====");

let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log("a:", a, "b:", b, "rest:", rest);

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log("Swapped - x:", x, "y:", y);

// 12. Spread Operator
console.log("\n===== SPREAD OPERATOR =====");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Combined:", combined);

let copy = [...arr1];
console.log("Copy:", copy);

// 13. Useful Static Methods
console.log("\n===== STATIC METHODS =====");

// Array.isArray()
console.log("Is array?", Array.isArray(fruits));
console.log("Is array?", Array.isArray("Hello"));

// Array.from() with map function
let squares = Array.from([1, 2, 3, 4], x => x * x);
console.log("Squares:", squares);

// Array.of()
let arrOf = Array.of(7);
console.log("Array.of(7):", arrOf);

// 14. Performance & Utility
console.log("\n===== UTILITY OPERATIONS =====");

// fill()
let filled = new Array(5).fill(0);
console.log("Filled with 0:", filled);

// fill with start/end
let partialFill = [1, 2, 3, 4, 5];
partialFill.fill(0, 1, 4);
console.log("Partial fill:", partialFill);

// copyWithin()
let copyWithinArr = [1, 2, 3, 4, 5];
copyWithinArr.copyWithin(0, 3); // Copy elements from index 3 to start
console.log("copyWithin:", copyWithinArr);

// keys(), values(), entries()
console.log("Keys:", [...fruits.keys()]);
console.log("Values:", [...fruits.values()]);
console.log("Entries:", [...fruits.entries()]);

// 15. Chaining Methods
console.log("\n===== METHOD CHAINING =====");

let result = nums
    .filter(n => n > 20)
    .map(n => n * 2)
    .sort((a, b) => a - b)
    .reduce((sum, n) => sum + n, 0);
console.log("Chained result:", result);

// 16. Removing Duplicates
console.log("\n===== REMOVING DUPLICATES =====");

let withDuplicates = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(withDuplicates)];
console.log("Unique:", unique);

// Using filter
let unique2 = withDuplicates.filter((val, idx, self) => self.indexOf(val) === idx);
console.log("Unique (filter):", unique2);

// 17. Array-Like Objects
console.log("\n===== ARRAY-LIKE OBJECTS =====");

function example() {
    console.log("Arguments:", arguments);
    let argsArray = Array.from(arguments);
    console.log("Arguments as array:", argsArray);
}
example(1, 2, 3, 4);

// 18. Performance Comparison
console.log("\n===== PERFORMANCE TIPS =====");

// Pre-allocate array size for large arrays
let size = 1000;
let preAllocated = new Array(size);
for (let i = 0; i < size; i++) {
    preAllocated[i] = i;
}
console.log("Pre-allocated array length:", preAllocated.length);

// Summary of all methods used
console.log("\n===== SUMMARY =====");
console.log("Fruits:", fruits);
console.log("Numbers:", nums);
console.log("Matrix:", matrix);
console.log("All operations completed successfully!");