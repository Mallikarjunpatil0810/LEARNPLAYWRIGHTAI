// ============================================
// Array Destructuring in JavaScript
// ============================================

// 1. Basic Array Destructuring
console.log("=== Basic Array Destructuring ===");
const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);  // Red
console.log(secondColor); // Green
console.log(thirdColor);  // Blue

// 2. Skipping Elements
console.log("\n=== Skipping Elements ===");
const numbers = [10, 20, 30, 40, 50];
const [first, , third, , fifth] = numbers;
console.log(first);  // 10
console.log(third);  // 30
console.log(fifth);  // 50

// 3. Using Rest Operator (...)
console.log("\n=== Rest Operator ===");
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
const [topFruit, secondFruit, ...remainingFruits] = fruits;
console.log(topFruit);        // Apple
console.log(secondFruit);     // Banana
console.log(remainingFruits); // ["Mango", "Orange", "Grapes"]

// 4. Default Values
console.log("\n=== Default Values ===");
const scores = [85];
const [math, science = 75, english = 80] = scores;
console.log(math);    // 85
console.log(science); // 75 (default)
console.log(english); // 80 (default)

// 5. Swapping Variables
console.log("\n=== Swapping Variables ===");
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a); // 20
console.log(b); // 10

// 6. Nested Array Destructuring
console.log("\n=== Nested Array Destructuring ===");
const nestedArray = [1, [2, 3], 4];
const [one, [two, three], four] = nestedArray;
console.log(one);   // 1
console.log(two);   // 2
console.log(three); // 3
console.log(four);  // 4

// 7. Function Return Values
console.log("\n=== Function Return Values ===");
function getCoordinates() {
    return [12.34, 56.78];
}
const [latitude, longitude] = getCoordinates();
console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

// 8. Destructuring with String (iterable)
console.log("\n=== String Destructuring ===");
const [char1, char2, char3] = "Hello";
console.log(char1); // H
console.log(char2); // e
console.log(char3); // l

// 9. Ignoring Return Values
console.log("\n=== Ignoring Return Values ===");
const [,, result] = ["Skip1", "Skip2", "KeepMe"];
console.log(result); // KeepMe

// 10. Practical Example: Parsing CSV-like data
console.log("\n=== Practical Example ===");
const csvLine = "John,Doe,30,New York";
const [firstName, lastName, age, city] = csvLine.split(",");
console.log(`Name: ${firstName} ${lastName}, Age: ${age}, City: ${city}`);