// ------------------------------------------------------------
// 1. No return type, No arguments
// ------------------------------------------------------------
function greetNoReturnNoArgs() {
    console.log("Hello! This function has no return and no arguments.");
}

// Calling the function
greetNoReturnNoArgs();

// ------------------------------------------------------------
// 2. With return type, No arguments
// ------------------------------------------------------------
function getGreetingWithReturn() {
    return "Hello! This function has a return type but no arguments.";
}

// Calling the function and storing the return value
let message = getGreetingWithReturn();
console.log(message);

// ------------------------------------------------------------
// 3. With arguments, No return
// ------------------------------------------------------------
function greetWithArgs(name, age) {
    console.log(`Hello ${name}, you are ${age} years old. This function has arguments but no return.`);
}

// Calling the function with arguments
greetWithArgs("Alice", 25);

// ------------------------------------------------------------
// 4. With arguments and with return
// ------------------------------------------------------------
function addNumbers(a, b) {
    let sum = a + b;
    return sum; // returning the result
}

// Calling the function with arguments and using the return value
let result = addNumbers(10, 20);
console.log(`Sum of 10 and 20 is: ${result}`);

// ------------------------------------------------------------
// Arrow function examples (ES6) for the same concepts
// ------------------------------------------------------------

// Arrow: No return, No args
const arrowNoReturnNoArgs = () => {
    console.log("Arrow: No return, No args");
};
arrowNoReturnNoArgs();

// Arrow: With return, No args
const arrowWithReturn = () => "Arrow: With return, No args";
console.log(arrowWithReturn());

// Arrow: With args, No return
const arrowWithArgsNoReturn = (name) => {
    console.log(`Arrow: Hello ${name}, no return`);
};
arrowWithArgsNoReturn("Bob");

// Arrow: With args and return
const arrowWithArgsAndReturn = (x, y) => x * y;
console.log(`Arrow: 5 * 6 = ${arrowWithArgsAndReturn(5, 6)}`);