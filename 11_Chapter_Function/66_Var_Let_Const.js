// ============================================
// VAR, LET, CONST - Variable Declarations in JS
// ============================================

// ---------- VAR (Function Scoped) ----------
console.log("=== VAR ===");

var name = "Alice";
console.log("Initial name:", name); // Alice

// var can be re-declared
var name = "Bob";
console.log("Re-declared name:", name); // Bob

// var can be updated
name = "Charlie";
console.log("Updated name:", name); // Charlie

// var is function scoped (NOT block scoped)
if (true) {
    var x = 10;
}
console.log("var x outside block:", x); // 10 (accessible!)

// var hoisting
console.log("Hoisted var y:", y); // undefined (not error)
var y = 20;

// ---------- LET (Block Scoped) ----------
console.log("\n=== LET ===");

let city = "New York";
console.log("Initial city:", city); // New York

// let can be updated
city = "Los Angeles";
console.log("Updated city:", city); // Los Angeles

// let CANNOT be re-declared in same scope
// let city = "Chicago"; // ❌ SyntaxError

// let is block scoped
if (true) {
    let blockVar = "Inside block";
    console.log("Inside block:", blockVar);
}
// console.log(blockVar); // ❌ ReferenceError (not accessible)

// let is NOT hoisted (Temporal Dead Zone)
// console.log(z); // ❌ ReferenceError
let z = 30;

// ---------- CONST (Block Scoped, Immutable Binding) ----------
console.log("\n=== CONST ===");

const PI = 3.14159;
console.log("PI:", PI);

// const CANNOT be updated
// PI = 3.14; // ❌ TypeError

// const CANNOT be re-declared
// const PI = 3.14; // ❌ SyntaxError

// const must be initialized at declaration
// const gravity; // ❌ SyntaxError

// const is block scoped
if (true) {
    const temp = 100;
    console.log("Inside block const:", temp);
}
// console.log(temp); // ❌ ReferenceError

// const with objects - properties CAN be mutated
const person = { name: "David", age: 30 };
console.log("Original person:", person);
person.age = 31; // ✅ Allowed
person.city = "Boston"; // ✅ Allowed
console.log("Mutated person:", person);
// person = {}; // ❌ TypeError (cannot reassign)

// const with arrays - elements CAN be mutated
const numbers = [1, 2, 3];
console.log("Original numbers:", numbers);
numbers.push(4); // ✅ Allowed
numbers[0] = 99; // ✅ Allowed
console.log("Mutated numbers:", numbers);
// numbers = [5, 6, 7]; // ❌ TypeError (cannot reassign)

// ---------- SUMMARY ----------
console.log("\n=== SUMMARY ===");
console.log("Feature        | var    | let    | const");
console.log("---------------|--------|--------|-------");
console.log("Scope          | Function | Block  | Block");
console.log("Re-declare     | ✅ Yes | ❌ No  | ❌ No");
console.log("Update         | ✅ Yes | ✅ Yes | ❌ No");
console.log("Hoisted        | ✅ Yes | ❌ No  | ❌ No");
console.log("Must Init      | ❌ No  | ❌ No  | ✅ Yes");