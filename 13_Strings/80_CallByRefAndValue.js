// ============================================
// Call by Value vs Call by Reference in JavaScript
// ============================================

// --- Call by Value (Primitive Types) ---
// Primitives: string, number, boolean, null, undefined, symbol, bigint
// When passed to a function, a COPY of the value is created.
// Changes inside the function do NOT affect the original variable.

console.log("===== CALL BY VALUE (Primitives) =====");

let num = 10;
let str = "Hello";

function modifyPrimitives(a, b) {
    a = 100;        // Changing the copy
    b = "World";    // Changing the copy
    console.log("Inside function - a:", a, "b:", b);
}

console.log("Before function call - num:", num, "str:", str);
modifyPrimitives(num, str);
console.log("After function call - num:", num, "str:", str);
// Output: num and str remain unchanged because primitives are passed by value

console.log("\n");

// --- Call by Reference (Objects) ---
// Objects: object, array, function, date, etc.
// When passed to a function, a REFERENCE (memory address) is passed.
// Changes to the object's PROPERTIES inside the function affect the original.

console.log("===== CALL BY REFERENCE (Objects) =====");

let person = {
    name: "Alice",
    age: 25
};

let numbers = [1, 2, 3];

function modifyObject(obj, arr) {
    // Modifying properties of the object (affects original)
    obj.name = "Bob";
    obj.age = 30;

    // Modifying array elements (affects original)
    arr.push(4, 5);
    arr[0] = 99;

    console.log("Inside function - person:", obj, "numbers:", arr);
}

console.log("Before function call - person:", person, "numbers:", numbers);
modifyObject(person, numbers);
console.log("After function call - person:", person, "numbers:", numbers);
// Output: person and numbers are changed because objects are passed by reference

console.log("\n");

// --- Important: Reassigning vs Mutating ---
// Reassigning the parameter itself does NOT affect the original reference.

console.log("===== REASSIGNMENT vs MUTATION =====");

let car = { brand: "Toyota", model: "Camry" };

function reassignParameter(obj) {
    // This reassigns the local parameter, does NOT affect original
    obj = { brand: "Honda", model: "Civic" };
    console.log("Inside function (reassign) - obj:", obj);
}

console.log("Before function call - car:", car);
reassignParameter(car);
console.log("After function call - car:", car);
// Output: car remains unchanged because reassigning the parameter doesn't affect the original

console.log("\n");

// --- Practical Example: Swapping values ---
// Call by value cannot swap primitives outside the function
// Call by reference can swap properties of objects

console.log("===== SWAPPING EXAMPLE =====");

// This WON'T work (call by value)
function swapPrimitives(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log("Inside swapPrimitives - a:", a, "b:", b);
}

let x = 5, y = 10;
console.log("Before swapPrimitives - x:", x, "y:", y);
swapPrimitives(x, y);
console.log("After swapPrimitives - x:", x, "y:", y);
// x and y remain unchanged

// This WILL work (call by reference via object)
function swapProperties(obj) {
    let temp = obj.a;
    obj.a = obj.b;
    obj.b = temp;
    console.log("Inside swapProperties - obj.a:", obj.a, "obj.b:", obj.b);
}

let pair = { a: 5, b: 10 };
console.log("Before swapProperties - pair.a:", pair.a, "pair.b:", pair.b);
swapProperties(pair);
console.log("After swapProperties - pair.a:", pair.a, "pair.b:", pair.b);
// pair.a and pair.b are swapped

console.log("\n");

// --- Summary ---
console.log("===== SUMMARY =====");
console.log("Call by Value: Primitives (string, number, boolean, etc.)");
console.log("  - A copy of the value is passed to the function");
console.log("  - Changes inside the function do NOT affect the original");
console.log("");
console.log("Call by Reference: Objects (object, array, function, etc.)");
console.log("  - A reference to the object is passed to the function");
console.log("  - Mutating the object's properties DOES affect the original");
console.log("  - Reassigning the parameter does NOT affect the original");