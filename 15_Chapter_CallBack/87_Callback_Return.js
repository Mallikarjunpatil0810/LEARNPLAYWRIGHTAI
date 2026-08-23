// Callback using return function
// A function that returns another function (callback)

function greet(name) {
    return function (message) {
        console.log(`Hello ${name}, ${message}`);
    };
}

// Usage
const greetJohn = greet("John");
greetJohn("Welcome to JavaScript!");

// Another example with arithmetic operations
function calculator(operation) {
    if (operation === "add") {
        return function (a, b) {
            return a + b;
        };
    } else if (operation === "multiply") {
        return function (a, b) {
            return a * b;
        };
    } else {
        return function () {
            return "Invalid operation";
        };
    }
}

const add = calculator("add");
console.log("Addition:", add(10, 5));

const multiply = calculator("multiply");
console.log("Multiplication:", multiply(10, 5));

// Example with array and callback
function processArray(arr) {
    return function (callback) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(callback(arr[i]));
        }
        return result;
    };
}

const numbers = [1, 2, 3, 4, 5];
const processor = processArray(numbers);

const doubled = processor(function (num) {
    return num * 2;
});
console.log("Doubled:", doubled);

const squared = processor(function (num) {
    return num * num;
});
console.log("Squared:", squared);