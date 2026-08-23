// ============================================
// JavaScript Hoisting Examples
// ============================================

// --- 1. Variable Hoisting with 'var' ---
console.log("--- var hoisting ---");
console.log(myVar); // undefined (hoisted but not initialized)
var myVar = 10;
console.log(myVar); // 10

// --- 2. Variable Hoisting with 'let' and 'const' ---
// console.log(myLet); // ❌ ReferenceError: Cannot access before initialization
let myLet = 20;
console.log(myLet); // 20

// console.log(myConst); // ❌ ReferenceError: Cannot access before initialization
const myConst = 30;
console.log(myConst); // 30

// --- 3. Function Declaration Hoisting ---
console.log("--- Function declaration hoisting ---");
sayHello(); // ✅ Works: "Hello!"

function sayHello() {
  console.log("Hello!");
}

// --- 4. Function Expression Hoisting ---
console.log("--- Function expression hoisting ---");
// sayHi(); // ❌ TypeError: sayHi is not a function (var is hoisted but not the assignment)
var sayHi = function () {
  console.log("Hi!");
};
sayHi(); // ✅ Works now

// --- 5. Arrow Function Hoisting ---
console.log("--- Arrow function hoisting ---");
// greet(); // ❌ ReferenceError: Cannot access before initialization
let greet = () => {
  console.log("Greetings!");
};
greet(); // ✅ Works now

// --- 6. Practical Example ---
console.log("--- Practical example ---");
var x = 5;

function outer() {
  console.log("x inside outer before declaration:", x); // undefined (local x hoisted)
  var x = 10;
  console.log("x inside outer after declaration:", x); // 10
}

outer();
console.log("x in global scope:", x); // 5 (global x unchanged)