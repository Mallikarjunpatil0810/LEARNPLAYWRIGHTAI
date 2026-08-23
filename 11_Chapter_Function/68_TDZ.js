// Temporal Dead Zone (TDZ) Example

// Example 1: TDZ with let
console.log("--- TDZ with let ---");
try {
  console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
} catch (error) {
  console.log("Error accessing myLetVar before declaration:", error.message);
}

let myLetVar = "I am a let variable";
console.log("After declaration:", myLetVar);

// Example 2: TDZ with const
console.log("\n--- TDZ with const ---");
try {
  console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
} catch (error) {
  console.log("Error accessing myConstVar before declaration:", error.message);
}

const myConstVar = "I am a const variable";
console.log("After declaration:", myConstVar);

// Example 3: TDZ in block scope
console.log("\n--- TDZ in block scope ---");
{
  // TDZ starts here for blockVar
  try {
    console.log(blockVar); // ReferenceError
  } catch (error) {
    console.log("Error in block scope:", error.message);
  }
  let blockVar = "Block scoped variable";
  console.log("Inside block after declaration:", blockVar);
}

// Example 4: typeof and TDZ
console.log("\n--- typeof and TDZ ---");
try {
  console.log(typeof tdzVar); // ReferenceError, not "undefined"
} catch (error) {
  console.log("typeof on TDZ variable throws error:", error.message);
}
let tdzVar = 42;

// Example 5: var does NOT have TDZ
console.log("\n--- var (no TDZ) ---");
console.log("varVariable before declaration:", varVariable); // undefined, not error
var varVariable = "I am a var variable";
console.log("After declaration:", varVariable);