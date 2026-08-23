// ============================================
// Function Scope in JavaScript
// ============================================

// 1. Global Scope
let globalVar = "I am a global variable";

function showGlobalScope() {
    console.log("Accessing globalVar inside function:", globalVar);
}

showGlobalScope();
console.log("Accessing globalVar outside function:", globalVar);

console.log("---");

// 2. Function Scope (var is function-scoped)
function functionScopeExample() {
    var functionScopedVar = "I am function-scoped (var)";
    let functionScopedLet = "I am block-scoped (let)";
    const functionScopedConst = "I am block-scoped (const)";

    console.log("Inside function:");
    console.log(functionScopedVar);
    console.log(functionScopedLet);
    console.log(functionScopedConst);
}

functionScopeExample();

// Trying to access function-scoped variables outside will throw ReferenceError
// console.log(functionScopedVar); // ReferenceError
// console.log(functionScopedLet); // ReferenceError
// console.log(functionScopedConst); // ReferenceError

console.log("---");

// 3. Nested Function Scope (Lexical Scoping)
function outerFunction(outerParam) {
    let outerVar = "I am from outer function";

    function innerFunction() {
        let innerVar = "I am from inner function";
        console.log("Inner function can access:");
        console.log("  outerParam:", outerParam);
        console.log("  outerVar:", outerVar);
        console.log("  innerVar:", innerVar);
    }

    innerFunction();

    // Cannot access innerVar here
    // console.log(innerVar); // ReferenceError
}

outerFunction("Hello from parameter");

console.log("---");

// 4. Variable Shadowing
let shadow = "Global shadow";

function shadowDemo() {
    let shadow = "Local shadow"; // Shadows the global 'shadow'
    console.log("Inside function:", shadow); // "Local shadow"
}

shadowDemo();
console.log("Outside function:", shadow); // "Global shadow"

console.log("---");

// 5. Hoisting with var (function-scoped)
function hoistingDemo() {
    console.log("Before declaration:", hoistedVar); // undefined (not ReferenceError)
    var hoistedVar = "I am hoisted";
    console.log("After declaration:", hoistedVar);
}

hoistingDemo();

console.log("---");

// 6. IIFE (Immediately Invoked Function Expression) - Creates private scope
(function () {
    let privateVar = "This is private to the IIFE";
    console.log("Inside IIFE:", privateVar);
})();

// console.log(privateVar); // ReferenceError

console.log("---");

// 7. Block Scope vs Function Scope
if (true) {
    var blockVar = "I am var - accessible outside block";
    let blockLet = "I am let - NOT accessible outside block";
    const blockConst = "I am const - NOT accessible outside block";
}

console.log("blockVar accessible outside block:", blockVar); // Works
// console.log(blockLet); // ReferenceError
// console.log(blockConst); // ReferenceError

console.log("---");

// 8. Practical Example: Counter using closure (function scope)
function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log("Count:", count);
        },
        decrement: function () {
            count--;
            console.log("Count:", count);
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
console.log("Final count:", counter.getCount()); // 1