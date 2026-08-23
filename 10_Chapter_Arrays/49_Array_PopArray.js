// Array Pop - Removes the last element from an array

// Example 1: Basic pop
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Original array:", fruits);

let poppedFruit = fruits.pop();
console.log("Popped element:", poppedFruit);
console.log("Array after pop:", fruits);

// Example 2: Pop in a loop
let numbers = [10, 20, 30, 40, 50];
console.log("\nOriginal numbers:", numbers);

while (numbers.length > 0) {
    let removed = numbers.pop();
    console.log("Removed:", removed, "| Array now:", numbers);
}

// Example 3: Pop returns undefined on empty array
let emptyArray = [];
console.log("\nPopping from empty array:", emptyArray.pop());