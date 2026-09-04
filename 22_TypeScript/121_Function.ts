//functions in typescript

// 1. Basic function declaration
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 2. Arrow function (lambda)
const add = (a: number, b: number): number => a + b;
console.log(`Sum: ${add(5, 3)}`);

// 3. Optional parameter (marked with ?)
function introduce(name: string, age?: number): string {
    if (age) {
        return `I'm ${name} and I'm ${age} years old.`;
    }
    return `I'm ${name}.`;
}
console.log(introduce("Bob"));
console.log(introduce("Bob", 25));

// 4. Default parameter
function multiply(a: number, b: number = 10): number {
    return a * b;
}
console.log(`Multiply with default: ${multiply(5)}`);
console.log(`Multiply with custom: ${multiply(5, 3)}`);

// 5. Rest parameter (...args)
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(`Sum of 1,2,3,4: ${sumAll(1, 2, 3, 4)}`);

// 6. Function type (type alias)
type MathOperation = (x: number, y: number) => number;

const subtract: MathOperation = (a, b) => a - b;
const divide: MathOperation = (a, b) => a / b;

console.log(`Subtract: ${subtract(10, 4)}`);
console.log(`Divide: ${divide(10, 2)}`);

// 7. Void return type (no return value)
function logMessage(message: string): void {
    console.log(`LOG: ${message}`);
}
logMessage("This is a log entry.");

// 8. Never return type (throws error or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

// 9. Function overloading (multiple signatures)
function getInfo(id: number): string;
function getInfo(name: string): string;
function getInfo(value: number | string): string {
    if (typeof value === "number") {
        return `User ID: ${value}`;
    }
    return `User Name: ${value}`;
}
console.log(getInfo(101));
console.log(getInfo("Charlie"));

// 10. Callback function (function as parameter)
function processArray(arr: number[], callback: (item: number) => void): void {
    arr.forEach(callback);
}
processArray([1, 2, 3], (num) => console.log(`Processing: ${num}`));

// 11. Generic function
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("Hello Generics"));
console.log(identity<number>(42));

