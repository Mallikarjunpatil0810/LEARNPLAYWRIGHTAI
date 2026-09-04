// Named exports
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// Exporting variables
export const PI = 3.14159;
export const E = 2.71828;

// Exporting an object
export const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

// Default export - a single utility function
export default function greet(name) {
  return `Hello, ${name}!`;
}